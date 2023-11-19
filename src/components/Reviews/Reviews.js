import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage';
import { ReviewsList, ReviewsTitle } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <ErrorMessage>Whoops! Error! Please reload this page!</ErrorMessage>
      )}
      {reviews.length === 0 ? (
        <p>There are no reviews for this movie</p>
      ) : (
        <ReviewsList>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewsTitle>{review.author}</ReviewsTitle>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      ;
    </div>
  );
}
