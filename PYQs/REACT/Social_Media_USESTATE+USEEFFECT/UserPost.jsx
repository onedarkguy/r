import CommentList from "./CommentList";

export default function UserPost() {
    return (
        <div>
            <h1>This is user my post title</h1>
            <p>This is user my post description</p>
            <hr />
            <h2>Comments</h2>
            <CommentList />
        </div>
    )
}