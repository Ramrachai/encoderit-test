import { FaCircle, FaSquare, FaRegCircle  } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

export function parseText(text) {
    const regex = /([^[]*)\[([^\]]*)\]\(([^\)]*)\)/;
    const matches = text.match(regex);
    if (!matches) return {};
    let description = matches[1].trim()
    let link_text = matches[2]
    let link_url = matches[3]
    let result = `${description} <a href="${link_url}"> ${link_text}</a>`
    return { __html: result };
}

export function getIcon(score) {
    score = score * 100
    if (score >= 90) {
        return <FaCircle color='#00cc66' />;
    } else if (score >= 50 && score <= 89) {
        return <FaSquare color='#ffaa33' />;
    } else if (score > 0 && score <= 49) {
        return <IoTriangle color='#ff3333' />;
    } else {
        return <FaRegCircle color='#bdbdbd' />
    }
}

export function getColor(score) {
    score = score * 100
    if (score >= 90) {
        return '#008800';
    } else if (score >= 50 && score <= 89) {
        return '#e2520f';
    } else if (score >= 0 && score <= 49) {
        return '#a50101';
    }
}