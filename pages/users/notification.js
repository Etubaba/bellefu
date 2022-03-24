import React, { useState } from "react";
import Layout from "../../components/Layout";

const notification = () => {
  const [add, setAdd] = useState(1);

  const handleAdd = () => {
    setAdd(add + 1);
  };
  return (
    <div>
      <h2>Hello bro</h2>
      <button onClick={handleAdd}>+</button>
      <h2>{add}</h2>
    </div>
  );
};

notification.Layout = Layout;
export default notification;
