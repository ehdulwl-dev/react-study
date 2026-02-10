import React, { useState } from "react";

function ConfirmButton_Function() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 방법 1. 함수 안에 함수로 정의
    function handleConfirm() {
        setIsConfirmed((prevIsConfimed) => !prevIsConfimed);
    };

    // 방법 2. arrow function을 사용하여 정의
    /*const handleConfirm = () => {
        setIsConfirmed((prevIsConfimed) => !prevIsConfimed);
    };
    */
   
    return (
        <button onClick={handleConfirm} disaled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
    
}

export default ConfirmButton_Function;