import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = () => {
  const [answered, setAnswered] = useState('symbolQuestion');

  const handleSelect = (iconType) => {
    setAnswered(iconType);
  };

  return (
    <div className="question">
      <QuestionBody
        iconType={answered}
        text="Kdo jinému jámu kopá, sám do ní padá."
      />
      <div className="question__options">
        <Option
          onSelected={handleSelect}
          type="smileyStrongYes"
          text="Souhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyYes"
          text="Spíše souhlasím"
        />
        <Option onSelected={handleSelect} type="smileyNeutral" text="Nevím" />
        <Option
          onSelected={handleSelect}
          type="smileyNo"
          text="Spíše nesouhlasím"
        />
        <Option
          onSelected={handleSelect}
          type="smileyStrongNo"
          text="Nesouhlasím"
        />
      </div>
    </div>
  );
};

export default Question;
