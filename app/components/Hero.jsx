import React from "react";

export default function Hero(props) {
  return (
    <div className="hero">
      <img src={props.url} alt={props.alt} />
    </div>
  );
}
