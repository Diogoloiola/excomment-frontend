import { Modal as ModalBootstrap, Form, Button } from 'react-bootstrap';

export default function Modal({ show, setShow }) {
    return (
        <ModalBootstrap show={show} size={"lg"}>
            <ModalBootstrap.Header>
                <h3>Selecione os projetos</h3>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                <div>
                    <label htmlFor="">Selecione o tipo de gráfico</label>
                    <Form.Select>
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
                    <Form.Select>
                        <option value="">-</option>
                        <option value="1">Tree map(Com escala)</option>
                        <option value="2">Tree amp(Por dívida)</option>
                        <option value="3">Sunburst (por dívida)</option>
                        <option value="4">Sunburst (por escala)</option>
                        <option value="5">Gráfico de barra empilhada</option>
                        <option value="6">Gráfico de linha</option>
                    </Form.Select>
                </div>
            </ModalBootstrap.Body>
            <ModalBootstrap.Footer>
                <Button variant="danger" onClick={() => setShow(false)}>Fechar</Button>
                <Button variant="primary">Pesquisar</Button>
            </ModalBootstrap.Footer>
        </ModalBootstrap>
    )
}