import React from "react";

const Content = ({ title, desc }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>----------------------------</p>
        </div>
    );
};

export default Content;