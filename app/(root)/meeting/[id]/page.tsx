import React from "react";

const Meeting = async ({ params }: { params: { id: string } }) => {
  // You can perform asynchronous actions here if needed
  return <div>Meeting room: #{params.id}</div>;
};

export default Meeting;
