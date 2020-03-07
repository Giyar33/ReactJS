import React from "react";

import Content from "./Conten";

const listData = [
    {
        title: "title 1",
        desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae earum repellendus quaerat asperiores dolore eligendi ullam debitis eos."
    },
    {
        title: "title 2",
        desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae earum repellendus quaerat asperiores dolore eligendi ullam debitis eos."
    },
];

const Body = () => {
    return (
        <div>
            {listData.map((item,index) => (
            <Content key={index} title={item.title} desc={item.desc} />
            ))}
        </div>
    );
}

export default Body;