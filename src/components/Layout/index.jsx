import { Container, LeftSide, ContainerIcon, RightSide } from './style';
import { FaBuilding, FaHome } from "react-icons/fa";
import Header from '../Header';
import Home from '../Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Layout() {
    return (
        <Container>
            <LeftSide>
                <ul>
                    <li>

                    </li>
                    <li>
                        <ContainerIcon>
                            <FaHome />
                        </ContainerIcon>
                    </li>
                    <li>
                        <ContainerIcon>
                            <FaBuilding />
                        </ContainerIcon>
                    </li>
                    <li></li>
                </ul>
            </LeftSide>
            <RightSide>
                <Header />
                <Router>
                    <Route path="/" exact render={() => <Home />} />
                </Router>
            </RightSide>
        </Container>
    )
}