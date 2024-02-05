import React from 'react';
import './circularProgress.css';

const CircularProgressBar = ({ percentage, size = 120 }) => {
    const strokeWidth = size / 16; // Adjust strokeWidth based on size
    const radius = size / 2 - strokeWidth / 2;
    const dynamicCircumference = 2 * Math.PI * radius * (percentage / 100);
    const color = percentage >= 90 && percentage <=100 ? "#00cc66" :
                  percentage >= 50 && percentage <= 89 ? "#ffaa33" :
                                                         "#ff3333";

    const fontSize = size / 3; // Adjust fontSize based on size

    return (
        <svg className="progress-ring" width={size} height={size}>
            <circle
                className="progress-ring__circle"
                strokeWidth={strokeWidth}
                stroke="#eeeeee"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <text
                className="progress-ring__text"
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize} // Set fontSize dynamically
                fill={color}
            >
                {percentage}
            </text>
            <circle
                className="progress-ring__circle--progress"
                strokeWidth={strokeWidth}
                stroke={color}
                fill={color + "20"}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                style={{
                    strokeDasharray: `${dynamicCircumference}, ${2 * Math.PI * radius}`,
                    strokeDashoffset: 0,
                    transition: 'stroke-dasharray 0.35s ease-in-out',
                }}
            />
        </svg>
    );
};

export default CircularProgressBar;
