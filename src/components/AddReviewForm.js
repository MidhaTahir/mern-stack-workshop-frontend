import { apiRoute } from "../global/apiDetails";
import axios from "axios";
import { useState } from "react";

const AddReviewForm = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    feedback: "",
    domain: "",
    rating: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
    const response = await axios.post(`${apiRoute}/v1/review/`, formFields);
    console.log(response);
    if (response.success) {
      alert("Review added");
    }
  };

  return (
    <div>
      <form className="AddReviewForm__form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
          value={formFields.name}
        />
        <input
          type="text"
          name="feedback"
          onChange={handleChange}
          placeholder="feedback"
          value={formFields.feedback}
        />
        <input
          type="text"
          name="domain"
          onChange={handleChange}
          placeholder="domain"
          value={formFields.domain}
        />
        <input
          type="number"
          name="rating"
          onChange={handleChange}
          placeholder="rating"
          value={formFields.rating}
        />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
