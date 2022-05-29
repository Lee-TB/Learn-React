import React, { useState } from "react";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>React hooks</h1>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                show UseEffect
            </button>
            <hr />
            {/* <UseState /> */}
            {show && <UseEffect />}
        </>
    );
}
