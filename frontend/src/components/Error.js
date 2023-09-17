import React from "react";

export const Error = ({ error }) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
};
