import { URL_API } from './consts.js'

export function removeNumberFromString(string) {
    return string.replace(/[0-9]/g, '');
}

export function getDataWithAxios(url) {
    return axios.get(url)
}

function formatUrlToGet(typeUrl, id) {
    if (typeUrl === 1)
        return `${URL_API}/projects/${id}/hierarchical_json`
    else if (typeUrl === 2)
        return `${URL_API}/projects/${id}/hierarchical_json`
    else if (typeUrl === 3)
        return `${URL_API}/projects/${id}/hierarchical_json`
    else if (typeUrl === 4)
        return `${URL_API}/projects/${id}/hierarchical_json`
    else if (typeUrl === 5 || typeUrl === 6)
        return `${URL_API}/projects/${id}/amount_technical_debt`
}

export function formatQuery(typeUrl, inputs) {

    let axiosConsult = []

    inputs.forEach(input => {
        const value = input.value
        const urlApi = formatUrlToGet(typeUrl, value)
        axiosConsult.push(getDataWithAxios(urlApi))
    })

    return axiosConsult
}


export function createLegendForGraphic(idContainer) {
    const container = document.querySelector(idContainer)
    let colors = {
        "Dívida de arquitetura": "#332288",
        "Dívida de construção": "#117733",
        "Dívida de código": "#44AA99",
        "Dívida de código": "#88CCEE",
        "Dívida de desing": "#DDCC77",
        "Dívida de documentação": "#CC6677",
        "Dívida de pessoa": "#AA4499",
        "Dívida de requisitos": "#882255",
        "Dívida de teste": "#DFFF00"
    }

    for (let i in colors) {
        const flexIntens = document.createElement('div')

        const cube = document.createElement('div')
        const p = document.createElement('p')

        cube.classList.add('legend')
        cube.style.background = colors[i]
        p.innerHTML = i

        flexIntens.appendChild(cube)
        flexIntens.appendChild(p)

        container.appendChild(flexIntens)

    }
}

export function factoryDataBarChart(data, name) {
    return {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['', 'DT1', 'DT2', 'DT3', 'DT4', 'DT4', 'DT5', 'DT6', 'DT7', 'DT8', 'DT9']
        },
        title: {
            text: `Gráfico de barra empilhada ${name}`
        },
        yAxis: {
            min: 0,
            title: {
                text: `Quantidade de dividas ${name}`
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            x: 0,
            verticalAlign: 'bottom',
            y: 10,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: data
    };
}

export function factoryDataLineChart(data, names) {
    let info = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Linha do tempo do projeto'
        },
        subtitle: {
            text: 'repositórios de código-fonte'
        },
        xAxis: {
            categories: names
        },
        yAxis: {
            title: {
                text: 'Quantidade de (DT)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: "Dívida de arquitetura",
            data: [...data['architecture_debt']]
        }, {
            name: "Dívida de construção",
            data: [...data['build_debt']]
        }, {
            name: "Dívida de código",
            data: [...data['code_debt']]
        }, {
            name: "Dívida de defeito",
            data: [...data['defect_debt']]
        }, {
            name: "Dívida de desing",
            data: [...data['design_debt']]
        }, {
            name: "Dívida de requisitos",
            data: [...data['requirement_debt']]
        }]
    }
    return info;
}

export function technicalDebtForIndex(tdType) {
    switch (tdType) {
        case 'architecture_debt':
            return 0
        case 'build_debt':
            return 1;
        case 'code_debt':
            return 2;
        case 'requirement_debt':
            return 3
        case 'defect_debt':
            return 4
        case 'design_debt':
            return 5;
        case 'documentation_debt':
            return 6;
        case 'test_debt':
            return 7;
    }
}

export function resetDataBarChart(data) {
    data.forEach(element => element.data = [])
}

export function createArrayForLineChart(data1, dataFinal) {
    for (let i in data1) {
        if (dataFinal[i] == undefined) {
            dataFinal[i] = []
            dataFinal[i].push(data1[i])
        } else {
            dataFinal[i].push(data1[i])
        }
    }
}

export function getNameRepository(inputs) {
    let names = []
    inputs.forEach(input => {
        names.push(input.getAttribute('name-reposittory'))
    })
    return names;
}