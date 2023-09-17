import React from "react";

export const Success = ({ success }) => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
};
