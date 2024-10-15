import {useEffect, useState} from "react";
import "./Comments.scss";

function Comments() {
    const [data1, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
            .then (res => res.json())
            .then (data => {
                setData(data.comments);
            })
    }, [])

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then (res => res.json())
            .then (data => {
                setData2(data.users);
            })
    }, [])

    return (
        <>
            <div className="comments">
                {data1.map((item) => (
                    <div className="comments__content" key={item.id}>
                        {item.body}
                    </div>
                ))}
                {data2.map((item) => (
                    <div className="comments__user" key={item.id}>
                        <div className="comments__user--image">
                            <img src={item.image} alt={item.firstName + item.lastName} />
                        </div>
                        <div className="comments__user--name">
                            {item.firstName + item.lastName}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Comments;