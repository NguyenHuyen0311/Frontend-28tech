import { useRef, useState } from "react";

function UseRef2() {
    const [inputValue, setinputValue] = useState("");
    const counterRef = useRef(0);

    const handleChange = (e) => {
        setinputValue(e.target.value);
        counterRef.current = counterRef.current + 1;
    }

    console.log(counterRef.current);

    return (
        <>
            <input value={inputValue} onChange={handleChange} />
        </>
    );
}

export default UseRef2;