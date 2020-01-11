import React from 'react';
import Button from './Button';

const Buttons = props => {
  return (
    <div className="ui three buttons">
      <Button name="Description" />
      <Button name="Review" />
      <Button name="System Requirements" />
    </div>
  );
};

export default Buttons;
