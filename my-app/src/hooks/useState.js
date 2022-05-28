import React, { useState } from "react";

export default function UseState() {
    const [state, setState] = useState({ count: 0, theme: "white" });

    const increase = () => {
        setState((prevState) => ({
            theme: "increase",
            count: prevState.count + 1,
        }));
    };

    const decrease = () => {
        setState((prevState) => ({
            theme: "decrease",
            count: prevState.count - 1,
        }));
    };

    return (
        <>
            <button onClick={decrease}>-</button>
            <span>{state.count}</span>:<span>{state.theme}</span>
            <button onClick={increase}>+</button>
        </>
    );
}
