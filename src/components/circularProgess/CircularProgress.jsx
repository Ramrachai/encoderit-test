import React from 'react';
import './circularProgress.css';

const CircularProgressBar = ({ percentage }) => {
    const strokeWidth = 5;
    const radius = 50 - strokeWidth / 2;
    const dynamicCircumference = 2 * Math.PI * radius * (percentage / 100);
    const color = percentage >= 90 && percentage <=100 ? "#00cc66" :
                  percentage >= 50 && percentage <= 89 ? "#ffaa33" :
                                                         "#ff3333";

    return (
        <svg className="progress-ring" width="120" height="120">
            <circle
                className="progress-ring__circle"
                strokeWidth={strokeWidth}
                stroke="#eeeeee"
                fill="transparent"
                r={radius}
                cx="60"
                cy="60"
            />
            <text className="progress-ring__text" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                {percentage}%
            </text>
            <circle
                className="progress-ring__circle--progress"
                strokeWidth={strokeWidth}
                stroke={color}
                fill="transparent"
                r={radius}
                cx="60"
                cy="60"
                
                style={{
                    strokeDasharray:dynamicCircumference + " " + (2 * Math.PI * radius),
                    strokeDashoffset: 0,
                    transition: 'stroke-dasharray 0.35s ease-in-out',
                  }}
            />

        </svg>
    );
};

export default CircularProgressBar;
