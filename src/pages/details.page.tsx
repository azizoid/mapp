import React from "react";

interface DetailsParams {
  id: number;
}

const Details: React.FC<DetailsParams> = ({ id }) => {
  console.log(id);
  return <div>Details Page {id}</div>;
};

export default Details;
