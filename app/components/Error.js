import React from "react";
import Err from "../images/error.png";

export default function Error({ message }) {
  return (
    <>
      <div className="center error">{message}</div>
      <img src={Err} alt="Something went wrong" className="img-error" />
    </>
  );
}
