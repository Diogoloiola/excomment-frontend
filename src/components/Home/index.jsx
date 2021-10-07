import List from '../List';
import { Container, Flex } from './style';

export default function Home() {
    return (
        <Container>
            <h3>Dashboard</h3>
            <Flex>
                <List type='1' text={'Technical debt view'} route={'/excomment-web'} />
                <List type='2' text={'GiFT'} route={'/gift'} />
            </Flex>
        </Container>
    )
}