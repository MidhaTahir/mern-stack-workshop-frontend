import React from 'react'

const Review = ({name, feedback, rating, domain}) => {
  return (
    <div>
        <ul>
        <li>{name}</li>
        <li>{feedback}</li>
        <li>{rating}</li>
        <li>{domain}</li>
        </ul>
        <hr></hr>
    </div>
  )
}

export default Review