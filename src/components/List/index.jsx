import { Icon } from './style'
import { FaChartBar, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function getIcon(type) {
    if (type === '1')
        return <FaChartBar />
    else if (type === '2')
        return <FaGithub />
}

export default function List({ type, text, route }) {
    return (
        <Link to={route} className="link-card">
            <Icon>
                {getIcon(type)}
            </Icon>
            <p>{text}</p>
        </Link>
    )
}