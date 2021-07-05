export let chart = {
    typeGraphic(key, data, inputs){
        switch (key) {
            case 1:
                this.drawBarChart(data,inputs)
            break;
        }
    },
    drawBarChart(data, inputs){
        for(let i in data)
            console.log(data[i].data)
    }
}