import React from "react";

class ConfirmButtton_Class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

            
        /* bind() 문법시 사용
        this.handleConfirm = this.handleConfirm.bind(this);
         */
         
    }

    /* bind() 문법시 사용 
    handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }
     */

    /* 클래스 필드 문법 사용 */
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disaled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}

export default ConfirmButtton_Class;