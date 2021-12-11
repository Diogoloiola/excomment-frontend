import { Container, LeftSide, ContainerIcon, RightSide } from './style';
import { FaChartBar, FaHome, FaGithub } from "react-icons/fa";
import Header from '../Header';
import Home from '../Home';
import Gift from '../Gift'
import { TableRepositories } from '../Gift/table';

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
                            <FaChartBar />
                        </ContainerIcon>
                    </li>
                    <li>
                        <ContainerIcon>
                            <FaGithub />
                        </ContainerIcon>
                    </li>
                    <li></li>
                </ul>
            </LeftSide>
            <RightSide>
                <Header />
                <Router>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/gift" exact component={() => <Gift />} />
                    <Route path="/repositories" exact component={() => <TableRepositories />} />
                </Router>
            </RightSide>
        </Container>
    )
}