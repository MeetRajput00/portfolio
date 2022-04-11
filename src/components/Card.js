import React from 'react';
import './Card.css';

function Card(props) {
  return (
  <div class="projectCardBody">
    <a href={props.githubLink}>
      <img src={props.imageLocation} height={250} width={450}/>
    </a>
    <h1>{props.projectTitle}</h1>
  </div>
  )
}

export default Card