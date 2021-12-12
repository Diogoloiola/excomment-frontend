import { useState } from 'react'
import { Container, Button, Header } from './style.js'
import ModalApplication from '../modal'

export default function Excomment() {

    const [show, setShow] = useState(false)

    return (
        <Container>
            <Header>
                <Button onClick={() => setShow(true)}>Selecionar projeto</Button>
            </Header>
            <ModalApplication show={show} setShow={setShow}/>
        </Container>
    )
}