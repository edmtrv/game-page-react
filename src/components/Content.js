import React from 'react';

const Content = ({ content }) => {
  if (typeof content === 'string') {
    return <div>{content}</div>;
  }

  return (
    <div>
      <h3>Minimum Requirements</h3>
      <ul>
        {content.min.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
      <h3>Recommended Requirements</h3>
      <ul>
        {content.rec.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
