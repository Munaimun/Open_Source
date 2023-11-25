import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div>
      <div>
        <img src={review.image}></img>
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p> {review.job} </p>
      </div>

      <div>
        <FaQuoteLeft />
      </div>

      <div>{review.text}</div>

      <div>
        <FaQuoteRight />
      </div>

      <div>
        <button>+</button>
        <button>-</button>
      </div>

      <div>
        <button>
          <a
            href="https://www.facebook.com/groups/610380072995229"
            target="blank"
          >
            Join Us
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
