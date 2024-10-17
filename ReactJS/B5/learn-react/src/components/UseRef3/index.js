import { useEffect, useRef, useState } from "react";

function UseRef3() {
    const [inputValue, setinputValue] = useState("");
    const counterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        setinputValue(e.target.value);
        counterRef.current = counterRef.current + 1;
        console.log(inputRef);
    }

    return (
        <>
            <input ref={inputRef} value={inputValue} onChange={handleChange} />
        </>
    );
}

export default UseRef3;