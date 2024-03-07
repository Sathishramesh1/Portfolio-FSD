import React, { useState, useEffect } from 'react';

const GetGreetings = ({ className }) => {
  const [greeting, setGreeting] = useState('');

  const date = new Date();
  const hour = date.getHours();

  useEffect(() => {
    if (hour >= 5 && hour < 12) {
      setGreeting('Good morning 🌤');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon 🌞');
    } else if (hour >= 18 && hour < 22) {
      setGreeting('Good evening 🌙');
    } else {
      setGreeting('Hello, night owl 🦉');
    }
  }, [hour]);

  return <div className={className}>{greeting}</div>;
};

export default GetGreetings;
