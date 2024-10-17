import { memo } from "react";

function Box(props) {
    const {onCounter, onReset} = props;
    // console.log(onCounter);
    

    const handleClick = () => {
        onCounter();
    }

    const handleReset = () => {
        onReset();
    }

    console.log("render box");
    
    return (
        <>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default memo(Box);