import React from 'react';

const Button = ({ name, buttonId, onButtonClick }) => {
  return (
    <div onClick={() => onButtonClick(buttonId)} className="ui button">
      {name}
    </div>
  );
};

export default Button;
