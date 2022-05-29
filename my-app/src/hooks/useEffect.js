import React, { useEffect, useState } from "react";

export default function UseEffect() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        console.log("callback");
        window.addEventListener("resize", handleResize);
        return () => {
            console.log("cleanup");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <span>{windowWidth}</span>
        </>
    );
}
