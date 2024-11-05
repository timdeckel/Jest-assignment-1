import React from 'react';

interface SubTitleProps {
    text: string;
}

const SubTitle = ({text}:SubTitleProps) => {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
};

export default SubTitle;