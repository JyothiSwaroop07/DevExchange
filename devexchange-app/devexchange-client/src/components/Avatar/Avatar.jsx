import React from "react";

import './Avatar.css';

const Avatar = ({children, backgroundColor, px, py , color, borderRadius, fontSize, cursor}) => {

    const style = {
        backgroundColor,
        padding: `${px} ${py}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textDecoration: 'none',
        textAlign: "center",
        cursor: cursor || null,
        width: "25px",
    }


    return (
        <>
            <div style={style} className="avatar-alpha" >
                {children}
            </div>
        </>
    )
}

export default Avatar;