import { Container, Icon } from './style'
import { FaBuilding, FaHome } from "react-icons/fa";

function getIcon(type) {
    if (type === '1')
        return <FaBuilding />
    else if (type === '2')
        return <FaHome />
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