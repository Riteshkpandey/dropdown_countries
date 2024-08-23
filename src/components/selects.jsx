import React, { useState } from "react";

const Select = ({ option, handleSelectOperation = null }) => {
  const [values, setValues] = useState(null);
  const handleOption = (val) => {
    setValues(val);
    if (handleSelectOperation) handleSelectOperation(val);
  };
  return (
    <div>
      <select value={values} onChange={(e) => handleOption(e.target.value)}>
        {option?.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
