import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <h2>
        {show ? "Hello React!" : ""}
      </h2>
    </div>
  );
}

export default ShowHide;