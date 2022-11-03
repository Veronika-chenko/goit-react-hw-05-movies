import { ReviewList } from './Reviews.styled';
// додати для відсутності коментарів
export const Reviews = ({ reviewList }) => {
  // return <h2>Reviews</h2>;
  return (
    <ReviewList>
      {reviewList.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ReviewList>
  );
};
