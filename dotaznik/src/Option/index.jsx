import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ onSelected, text, type }) => {
  const handleClick = () => {
    onSelected(type);
    // Vhodné pro zjištění, co se děje, ale na konci všechny console smazat :-)
    // console.log(props.text);
  };
  return (
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;

/* Varianta s props, ale používat destructuring výše

const Option = (props) => {

  return (
    <div className="option" onClick={() => props.onSelected(props.type)}>
      <Icon type={props.type} />
      <div>{props.text}</div>
    </div>
  );
};
*/
