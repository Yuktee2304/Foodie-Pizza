import React from "react";

export const Loading = () => {
  return (
    <div >
      <div className="spinner-border text-center" role="status" style={{height:'110px', width:'110px', margin:'100px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

