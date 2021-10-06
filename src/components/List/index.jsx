import { Container, Icon } from './style'
import { FaChartBar, FaGithub } from "react-icons/fa";

function getIcon(type) {
    if (type === '1')
        return <FaChartBar />
    else if (type === '2')
        return <FaGithub />
}

export default function List({ type, text }) {
    return (
        <Container>
            <Icon>
                {getIcon(type)}
            </Icon>
            <p>{text}</p>
        </Container>
    )
}