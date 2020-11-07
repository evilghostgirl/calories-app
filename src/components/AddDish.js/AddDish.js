import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={handleOnChange} placeholder="add" />;
};
