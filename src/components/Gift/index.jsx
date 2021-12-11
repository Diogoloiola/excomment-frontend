import {
    Container,
    Header,
    Select,
    W49,
    FormGroup,
    Content,
    W75,
    W24,
    Form,
    Button
} from "./style"
import { FaGithub } from "react-icons/fa";
import Input from '../Input'
import Languages from '../../data/languages.js'
import Licenses from '../../data/licenses.js'
import axios from 'axios';
import GithubApi from '../../models/github-api.js'
import { githubApiConditionals } from '../../models/query-api.js'
import Overlay from '../overlay/index'

import { useState } from "react";
import { useHistory } from "react-router-dom";

function createOption(data, type) {
    if (type === 1) {
        return data.map((element, index) => <option key={index} value={element}>{element.toUpperCase()}</option>)
    } else if (type === 2) {
        return data.map((element, index) => <option key={index} value={element.value}>{element.name}</option>)
    }
}


export default function Gift(props) {
    const [data, setData] = useState({
        language: null,
        forks: null,
        license: null,
        stars: null,
        size: null,
        perPage: null
    })
    const history = useHistory();

    const [isVisible, setVisible] = useState(false);

    function handleInputChange(event, type, setData) {
        const value = ['language', 'license'].indexOf(type) === -1 ? parseInt(event.target.value) : event.target.value
        setData({
            ...data,
            [type]: value
        })
    }

    async function sendForm(setVisible) {
        setVisible(true)
        const githubApi = new GithubApi('https://api.github.com/search/repositories', axios, githubApiConditionals, process.env.TOKEN);
        const result = await githubApi.getRepositories(data)
        setVisible(false)
        history.push('/repositories', result)
    }

    return (
        <Container>
            <Header>
                <span>
                    <FaGithub />
                </span>
                <h3>GitHub Repositories Finder Tool (GiFT)</h3>
            </Header>
            <Content>
                <FormGroup>
                    <W49>
                        <label htmlFor="">Selecione a linguagem</label>
                        <Select onChange={(e) => handleInputChange(e, 'language', setData)}>
                            {createOption(Languages, 1)}
                        </Select>
                    </W49>
                    <W49>
                        <label htmlFor="">Quantidade de forks</label>
                        <Input type="number" event={(e) => handleInputChange(e, 'forks', setData)} />
                    </W49>
                </FormGroup>
                <FormGroup>
                    <W75>
                        <label htmlFor="">Escolha uma liçenca</label>
                        <Select onChange={(e) => handleInputChange(e, 'license', setData)}>
                            {createOption(Licenses, 2)}
                        </Select>
                    </W75>
                    <W24>
                        <label htmlFor="">Quantidade de estrelas</label>
                        <Input type="number" event={(e) => handleInputChange(e, 'stars', setData)} />
                    </W24>
                </FormGroup>
                <Form>
                    <label htmlFor="">Tamanho do repositório</label>
                    <Input event={(e) => handleInputChange(e, 'size', setData)} type="number" />
                </Form>
                <Form>
                    <label htmlFor="">Quantidade de repositórios que serão retornados</label>
                    <Input event={(e) => handleInputChange(e, 'perPage', setData)} type="number" />
                </Form>
                <Button onClick={async () => sendForm(setVisible)}>Pesquisar</Button>
            </Content>

            {isVisible && <Overlay text={'Pesquisando'} />}
        </Container>
    )
}