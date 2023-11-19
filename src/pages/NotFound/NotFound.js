import { Link } from 'react-router-dom';
import { NotFoundMessage } from './NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundMessage>
      Page is not found. Please go back to <Link to="/">Home page</Link>
    </NotFoundMessage>
  );
}
