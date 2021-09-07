import { createLegendForGraphic } from './utils.js'

export let chart = {
    container: document.querySelector('#chart'),
    typeGraphic(type, dataAxios) {
        this.resetChart()
        switch (type) {
            case 1:
                this.drawTreeMap(dataAxios[0].data);
                break;
            case 2:
                this.drawTreeMapNoScale(dataAxios[0].data);
                break;
            case 3:
                this.drawSunburstNoScale(dataAxios[0].data);
        }
    },
    drawTreeMap(data) {
        var chart = anychart.treeMap([data], "as-tree");
        chart.maxDepth(3);
        // cria e configur as escala das cores
        var customColorScale = anychart.scales.linearColor();

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

        // adicionando o elemento no DOM
        chart.container("chart");

        // Desenha o gráfico
        chart.draw();
    },
    drawTreeMapNoScale(data) {
        var chart = anychart.treeMap([data], "as-tree");
        chart.maxDepth(3);

        chart.title().useHtml(true);
        chart.title("Treemap: <br><br>" +
            "<span style='font-size:12; font-style:italic'>" +
            "</span>");

        chart.container("chart");

        chart.draw();
        createLegendForGraphic('#container-legend')

    },
    drawSunburstNoScale(data) {
        const chart = anychart.sunburst([data], "as-tree");

        chart.calculationMode("ordinal-from-leaves");
        chart.container("chart");

        chart.draw();
        createLegendForGraphic('#container-legend')
    },
    resetChart() {
        this.container.innerHTML = ''
    }
}