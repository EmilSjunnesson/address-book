import React from 'react';
import './RadioGroup.css';

/*
  Render a group of radio buttons according todo
  the options prop (array of objects with name and value)
*/
const RadioGroup = ({ title, value, options, onChange }) => {
  return (
    <form className="radio-group">
      <p>{title}</p>
      {options && options.map((o) => (
        <div key={o.value}>
          <input
            type="radio"
            checked={o.value === value}
            onChange={event => onChange(event.target.value)}
            value={o.value}
            />
          <label>{o.name}</label>
        </div>
      ))}
    </form>
  );
};

export default RadioGroup;
