import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name: "도예지",
        comment: "안녕하세요, 예빵입니다."
    },
    {
        name: "도상희",
        comment: "안녕하세요, 상빵입니다."
    },
    {
        name: "문민재",
        comment: "안녕하세요, 문빵입니다."
    },
    {
        name: "이다영",
        comment: "안녕하세요, 다빵입니다."
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                     <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
           
        </div>
    )
}

export default CommentList;