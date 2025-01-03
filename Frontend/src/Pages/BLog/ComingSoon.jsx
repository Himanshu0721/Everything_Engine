import React, { useEffect } from "react";

const ComingSoon = () => {
  const location = window.location.pathname;
  let name = location.split("/")[1];

  return (
    <div>
      <h1>Coming Soon {name}</h1>
    </div>
  );
};

export default ComingSoon;
