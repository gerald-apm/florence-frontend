import React from 'react'
import './css/Button.css'
import {Link} from 'react-router-dom'

const BStyle = ['btn--primary', 'btn--outline'];
const BSize = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = BStyle.includes(buttonStyle) ? buttonStyle : BStyle(0);
    const checkButtonSize = BSize.includes(buttonSize) ? buttonSize : BSize(0);

    return (
        <Link to='/about' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button;