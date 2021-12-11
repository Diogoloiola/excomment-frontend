import { useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Table from '../table'

import {
    Container,
    Header,
    Content
} from './style'

export function TableRepositories() {
    const { state } = useLocation();
    console.log(state)
    return (
        <Container>
            <Header>
                <span>
                    <FaGithub />
                </span>
                <h3>GitHub Repositories Finder Tool (GiFT)</h3>
            </Header>
            <Content>
                <Table data={state} />
            </Content>
        </Container>
    )
}