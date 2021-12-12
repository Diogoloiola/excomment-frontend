import { Container, LeftSide, ContainerIcon, RightSide } from './style';
import { FaChartBar, FaHome, FaGithub } from "react-icons/fa";
import Header from '../Header';
import Home from '../Home';
import Gift from '../Gift'
import Excomment from '../excomment';
import { TableRepositories } from '../Gift/table';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default function Layout() {
    return (
        <Container>
            <Router>
                <LeftSide>
                    <ul>
                        <li></li>
                        <li>
                            <Link to="/">
                                <ContainerIcon>
                                    <FaHome />
                                </ContainerIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/excomment-web">
                                <ContainerIcon>
                                    <FaChartBar />
                                </ContainerIcon>
                            </Link>
                        </li>
                        <li>
                            <Link to="/gift">
                                <ContainerIcon>
                                    <FaGithub />
                                </ContainerIcon>
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </LeftSide>
                <RightSide>
                    <Header />
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/gift" exact component={() => <Gift />} />
                    <Route path="/repositories" exact component={() => <TableRepositories />} />
                    <Route path="/excomment-web" exact render={() => <Excomment />} />
                </RightSide>
            </Router>
        </Container>
    )
}