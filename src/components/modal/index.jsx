import ExcommentApi from '../../models/excomment-api.js'
import axios from 'axios';
import { Modal as ModalBootstrap, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


function renderInputs(data, setId) {
    if (data) {
        return data.map((repository, i) => {
            return (
                <div>
                    <input key={i} onChange={(e) => setId(e.target.value)} type="radio" value={repository.id} name="project" />
                    <label htmlFor="">{repository.name}</label>
                </div>
            )
        })
    }
}

async function submitForm(chartType, id){
    const excommentApi = new ExcommentApi(axios, 'http://localhost:3000')
    const result = await excommentApi.getHierarchicalJson(chartType, id)
    console.log(result)
}

export default function Modal({ show, setShow }) {
    const [data, setData] = useState([]);
    const [chartType, setChartType] = useState('')
    const [id, setId] = useState(null)

    useEffect(() => {
        async function getData() {
            const excommentApi = new ExcommentApi(axios, 'http://localhost:3000')
            setData(await excommentApi.getProjects());
        }
        getData();
    }, []);

    return (
        <ModalBootstrap show={show} size={"lg"}>
            <ModalBootstrap.Header>
                <h3>Selecione os projetos</h3>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                <div>
                    <label htmlFor="">Selecione o tipo de gráfico</label>
                    <Form.Select onChange={(e) => setChartType(e.target.value)}>
                        <option value="">-</option>
                        <option value="1">Tree map(Com escala)</option>
                        <option value="2">Tree amp(Por dívida)</option>
                        <option value="3">Sunburst (por dívida)</option>
                        <option value="4">Sunburst (por escala)</option>
                        <option value="5">Gráfico de barra empilhada</option>
                        <option value="6">Gráfico de linha</option>
                    </Form.Select>
                </div>
                <div>
                    <label htmlFor="">Selecione o projeto</label>
                    {renderInputs(data, setId)}
                </div>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer>
                <Button variant="danger" onClick={() => setShow(false)}>Fechar</Button>
                <Button variant="primary" onClick={() => submitForm(chartType, id)}>Pesquisar</Button>
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}