import React from "react";

function Model({children}) {
  return (
    <center>
      <div className="card" style={{ width: "50vw" }}>
        <div className="card-body">
         {children}
        </div>
      </div>
    </center>
  );
}

export default Model;
