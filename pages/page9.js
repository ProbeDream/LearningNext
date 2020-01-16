import  { useState } from 'react';
const page9 = () => {
  const [color, setColor] = useState('blue');
  return (
    <div>
      <span>Hello ProbeDream!</span>
      <button
        onClick={() => {
          setColor(color === 'blue' ? 'red' : 'blue');
        }}
      >
        Switch to Color!
      </button>
      <style jsx>
        {`
            span{
                color:${color};
            }
            button{
                color:darkblue;
            }
        `}
      </style>
    </div>
  );
};

export default page9;
