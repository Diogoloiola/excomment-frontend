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

function createOption( data, type )
{
    if ( type === 1 ) {
        return data.map( element => <option value={element}>{element.toUpperCase()}</option> )
    } else if ( type === 2 ) {
        return data.map( element => <option value={element.value}>{element.name}</option> )
    }
}

export default function Gift()
{
    return (
        <Container>
            <Header>
                <span>
                    <FaGithub />
                </span>
                <h3>GitHub Repositories Finder Tool (GiFT)</h3>
            </Header>
            <Content>
                <form action="">
                    <FormGroup>
                        <W49>
                            <label htmlFor="">Selecione a linguagem</label>
                            <Select name="" id="">
                                {createOption( Languages, 1 )}
                            </Select>
                        </W49>
                        <W49>
                            <label htmlFor="">Quantidade de forks</label>
                            <Input type="number" />
                        </W49>
                    </FormGroup>
                    <FormGroup>
                        <W75>
                            <label htmlFor="">Escolha uma liçenca</label>
                            <Select name="" id="">
                                {createOption( Licenses, 2 )}
                            </Select>
                        </W75>
                        <W24>
                            <label htmlFor="">Quantidade de estrelas</label>
                            <Input type="number" />
                        </W24>
                    </FormGroup>
                    <Form>
                        <label htmlFor="">Tamanho do repositório</label>
                        <Input type="number" />
                    </Form>
                    <Form>
                        <label htmlFor="">Quantidade de repositórios que serão retornados</label>
                        <Input type="number" />
                    </Form>
                    <Button>Pesquisar</Button>
                </form>
            </Content>
        </Container>
    )
}