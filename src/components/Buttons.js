import React from 'react';
import Button from './Button';

const Buttons = ({ onButtonClick }) => {
  const buttonList = ['Description', 'Review', 'System Requirements'].map(
    (name, i) => {
      return (
        <Button
          key={i}
          buttonId={i}
          onButtonClick={onButtonClick}
          name={name}
        />
      );
    }
  );
  return <div className="ui three buttons">{buttonList}</div>;
};

export default Buttons;
