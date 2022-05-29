import React, { useState } from "react";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseMemo from "./hooks/useMemo";

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
                show UseMemo
            </button>
            <hr />
            {/* <UseState /> */}
            {/* {show && <UseEffect />} */}
            {show && <UseMemo />}
        </>
    );
}
