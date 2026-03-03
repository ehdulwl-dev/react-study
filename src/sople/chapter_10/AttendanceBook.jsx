import React from "react";

const student = [
    { 
        id: 1,
        name: "Inje"
    },
    { 
        id: 2,
        name: "Steve"
    },
    { 
        id: 3,
        name: "Lesy"
    },
    { 
        id: 4,
        name: "Jodon"
    }
];

function AttendenceBook(props){
    return (
        <ul>
            {student.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendenceBook