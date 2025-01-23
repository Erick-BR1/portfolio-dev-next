"use client";

import React, { useEffect, useState } from "react";
import styles from "./glowCursor.module.css";

export default function GlowCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className={styles.glow}
            style={{
                transform: `translate(${position.x - 400}px, ${position.y - 400}px)`,
            }}
        />
    );
}
