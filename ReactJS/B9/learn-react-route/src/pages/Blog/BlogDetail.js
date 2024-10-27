/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";

function BlogDetail() {
    const params = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
            .then (res => res.json())
            .then (data => {
                // console.log(data);
                setPost(data);
            })
    }, []); 

    // console.log(params);
    // console.log(post);
    
    return (
        <>
            <GoBack />
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <div>
                        {post.body}
                    </div>
                </>
            )}
        </>
    );
}

export default BlogDetail;