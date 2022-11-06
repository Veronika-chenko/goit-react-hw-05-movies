import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/services/Api';
import { ReviewList, ReviewItem } from './Reviews.styled';

export default function Reviews() {
  const [reviewList, setReviewList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };
    (async function () {
      try {
        const { results } = await getMovieReviews(id, signal);
        setReviewList(results);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <ReviewList>
      {reviewList.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviewList.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </ReviewItem>
        ))
      )}
    </ReviewList>
  );
}
