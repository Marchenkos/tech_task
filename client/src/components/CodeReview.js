import React, { useCallback, useEffect, useState } from 'react';

export const CodeReviewComponent = function({ data }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    setCount(0);
  }, [])

  const clickHandler = useCallback(() => {
    setCount(count + 1);

    return;
  }, []);

  const handleScroll = (e) => {
    console.log(e);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={clickHandler}>Increase count</button>
        <div>
          {data.map((item) => <span>{item}</span>)}
        </div>
      </div>
    </>
  )
}