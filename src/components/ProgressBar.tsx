import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [loading, setLoading ] = useState(false);
    const [progress, setProgress] = useState(0); // Initial progress value

    useEffect(() => {
        if(progress < 100 && loading) {
            setTimeout(() => {
                setProgress(prev => prev+=5)
            }, 50);
        }
    }, [progress, loading])

    const increaseProgress = () => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    };
  
    const decreaseProgress = () => {
      setLoading(false)
      setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 10));
    };

    const setReset = () => {
        setLoading(false);
        setProgress(0);
    }

  return (
    <div className='flex flex-col'>
       <div className="progress-bar-container">
            <div className="progress-bar" style={{ width:`${progress}%` }}>
                {progress ? `${progress} %` : ""} 
            </div>
        </div>
        <div className='flex flex-row'>
            <button className='btn btn-blue' onClick={increaseProgress}>+</button>
            <button className='btn btn-red' onClick={decreaseProgress}>-</button>
            <button className='btn btn-blue' onClick={()=> setLoading(true)}>Load 100%</button>
            <button className='btn btn-blue' onClick={setReset}>Reset</button>
        </div>
    </div>
  )
}

export default ProgressBar