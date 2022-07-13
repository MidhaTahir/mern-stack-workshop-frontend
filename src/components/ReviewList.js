import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Review from './Review'

const ReviewList = () => {
  const [reviews,setReviews] = useState([]);

  const getAllReviews = async () => {
    const response = await axios.get("http://localhost:5000/reviews")
    setReviews(response?.data)
  }

  useEffect(() => {
    getAllReviews()
  },[])

  return (
    <div>
        {reviews.map((review) => <Review key={review.id} {...review} />)}
    </div>
  )
}

export default ReviewList