import React from 'react'

function Statistics({good, neutral, bad}) {
  return (
    <div>
      <h3>Statistics</h3>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>No feedback available</div>
      ) : (
        <div>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
        </div>
      )}
    </div>
  );
}

export default Statistics
