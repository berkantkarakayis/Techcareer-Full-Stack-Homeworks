import React, { useState } from 'react';

function StateHeightWidthSample() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [boxStyle, setBoxStyle] = useState(null);

  const handleButtonClick = () => {
    if (width && height) {
      setBoxStyle({
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'darkgrey',
      });
    }
  };

  return (
    <>
      <div>
        <label htmlFor="">Width = </label>
        <input type="text" onChange={(e) => setWidth(e.target.value)} /> 
        <label htmlFor="">Height = </label>
        <input type="text" onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <button onClick={handleButtonClick}>Create</button>
      </div>
      <div style={boxStyle}></div>
    </>
  );
}

export default StateHeightWidthSample;
