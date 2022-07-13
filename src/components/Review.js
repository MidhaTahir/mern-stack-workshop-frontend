const Review = ({ name, feedback, rating, domain }) => {
  return (
    <div className="Review__box">
      {/* BEM CSS */}
      <ul>
        <li>{name}</li>
        <li>{feedback}</li>
        <li>{rating}</li>
        <li>{domain}</li>
      </ul>
    </div>
  );
};

export default Review;
