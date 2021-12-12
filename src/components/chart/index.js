export default class ChartAnychart {
    constructor(type, data, anychart) {
        this.type = type
        this.data = data
        this.anychart = anychart
    }

    typeGraphic() {
        switch (this.type) {
            case 1:
                return this.drawTreeMap()
            default:
                return []
        }
    }

    drawTreeMap() {
        const chart = this.anychart.treeMap([this.data], "as-tree");
        chart.maxDepth(3);
        // cria e configur as escala das cores
        const customColorScale = this.anychart.scales.linearColor();

        // setando a escala de cores no gráfico
        customColorScale.colors(["#0000FF", "#fff", "#ff0000"]);

        chart.colorScale(customColorScale);
        // adicionando o rande das cores.
        chart.colorRange().enabled(true);
        chart.colorRange().length("100%");

        // Colocando titulo no site do gráfico
        chart.title().useHtml(true);
        chart.title("Treemap <br><br>" +
            "<span style='font-size:12; font-style:italic'>" +
            "</span>");
        return chart
    }
}