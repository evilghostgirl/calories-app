import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setList(data);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};
