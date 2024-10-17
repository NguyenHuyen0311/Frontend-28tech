import { useRef, useState } from "react";

function RandomGift() {
    const gifts = ["Điện thoại", "Máy tính", "Xe máy", "Ô tô", "Đồng hồ"];
    const [result, setResult] = useState("");
    const counterRef = useRef(0);

    const handleRandom = () => {
        if(counterRef.current < 4) {
            const random = Math.floor(Math.random()*gifts.length);
            // console.log(random);
            setResult(gifts[random]);
            counterRef.current = counterRef.current + 1;
        } else {
            alert("Bạn đã hết lượt!");
        }
    }

    console.log(counterRef);

    return (
        <>
            <button onClick={handleRandom}>Random</button>

            <div>Bạn đã trúng thưởng: {result}</div>
        </>
    );
}

export default RandomGift;