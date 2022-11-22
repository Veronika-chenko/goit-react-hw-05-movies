import { useLocation } from 'react-router-dom';
import { ErrorMessage } from 'components/App.styled';
import { GoBackLink } from 'pages/MovieDetails/MovieDetails.styled';

export default function NotFound() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <ErrorMessage>Sorry, we couldn't find that page</ErrorMessage>
      <GoBackLink to={backLinkHref}>Go home</GoBackLink>
    </>
  );
}
