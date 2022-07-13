import { apiRoute } from "../global/apiDetails";
import Review from "./Review";
import axios from "axios";
import { useEffect, useState } from "react";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    const response = await axios.get(`${apiRoute}/v1/reviews`);
    setReviews(response?.data);
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
