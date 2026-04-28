import { useState, useEffect } from "react";
import data from "../data/comments.json";

export default function CommentList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Simulating a dynamic data load
        setComments(data);
    }, []);

    return (
        <div>
            {comments.map((user, index) => (
                <div key={index}>
                    <h3>{user.username}</h3>
                    <p>{user.comment}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}
