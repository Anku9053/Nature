import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiUse = () => {
  const [data, setData] = useState("");

  const getdata = () => {
    axios.get("http://localhost:3000/items").then((res) => console.log(res.data[0].urls.trailStart));
  };

  useEffect(() => {
    getdata();
  }, []); // Empty dependency array if no dependencies

  return (
    <div>api</div>
  );
};

export default ApiUse;
