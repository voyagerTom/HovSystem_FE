import React from "react";

function clickBTN({ fun, text }) {
  return (
    <div>
      <button onClick={fun}>{text}</button>
    </div>
  );
}

export default clickBTN;
