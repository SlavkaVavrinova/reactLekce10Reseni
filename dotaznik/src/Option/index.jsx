import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = (props) => {
  const handleClick = () => {
    console.log(props.text);
    props.onSelected(props.type);
  };
  return (
    <div className="option" onClick={handleClick}>
      <Icon type={props.type} />
      <div>{props.text}</div>
    </div>
  );
};

export default Option;
