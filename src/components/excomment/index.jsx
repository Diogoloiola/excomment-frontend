import { useState } from 'react'
import { Container, Button, Header, Content } from './style.js'
import ModalApplication from '../modal'
import AnyChart from 'anychart-react'
import anychart from 'anychart'
import ChartAnychart from './../chart'

function renderChart(data, chartType) {
    if (data.name === 'home') {
        const stage = anychart.graphics.create();
        const chart = new ChartAnychart(parseInt(chartType), data, anychart)
        return (<AnyChart
            instance={stage}
            width={'100%'}
            height={700}
            charts={[chart.typeGraphic()]}
        />)
    }
}

export default function Excomment() {

    const [show, setShow] = useState(false)
    const [data, setData] = useState([]);
    const [chartType, setChartType] = useState(null)

    return (
        <Container>
            <Header>
                <Button onClick={() => setShow(true)}>Selecionar projeto</Button>
            </Header>
            <ModalApplication show={show} setShow={setShow} setChartData={setData} setChartTypeGraph={setChartType} />
            <Content>
                {renderChart(data, chartType)}
            </Content>
        </Container>
    )
}