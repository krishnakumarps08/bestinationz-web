import React, { useEffect, useState } from 'react';

const Typewriter = ({ phrases, period } : any) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = loopNum % phrases.length;
      const fullTxt = phrases[i];

      if (isDeleting) {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
      } else {
        setText((prevText) => fullTxt.substring(0, prevText.length + 1));
      }

      if (!isDeleting && text === fullTxt) {
        setIsDeleting(true);
        // setTimeout(() => setIsDeleting(false),2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    }, period || 2000);

    return () => clearInterval(interval);
  }, [loopNum, isDeleting, phrases, period, text]);

  return <span className="wrap">{text}</span>;
};

export const Subtitle = () => {
  return (
    <h1>
      <p className='text-bold' >
        <Typewriter  phrases={['Designing a trip is an ART', 'Seize the moment, book your unforgettable journey', "Let's turn your wanderlust into a reality", 'Transforming vacations into memories, one click at a time']} period={50} />
      </p>
    </h1>
  );
};
