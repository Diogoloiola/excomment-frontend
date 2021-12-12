import { useState } from 'react'
import { Container, Button, Header } from './style.js'
import ModalApplication from '../modal'
import AnyChart from 'anychart-react'
import anychart from 'anychart'

export default function Excomment() {

    const [show, setShow] = useState(false)
    const [chart, setChart] = useState([]);
    let stage = anychart.graphics.create();

    return (
        <Container>
            <Header>
                <Button onClick={() => setShow(true)}>Selecionar projeto</Button>
            </Header>
            <ModalApplication show={show} setShow={setShow} setChart={setChart} />
            {/* <div style={{ width: '100%', height: '500px' }}>
                <AnyChart
                    instance={stage}
                    width={800}
                    height={600}
                    charts={chart}
                />
            </div> */}
        </Container>
    )
}