import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return reviews.length === 0 ? (
    <p>There are no reviews for this movie</p>
  ) : (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
