let ctx1=document.getElementById("myBarChart").getContext("2d");
let ctx2=document.getElementById("myPieChart").getContext("2d");
let ctx3=document.getElementById("myDoughnutChart").getContext("2d");
let ctx4=document.getElementById("myLineChart").getContext("2d");
let ctx5=document.getElementById("myRadarChart").getContext("2d");

let myBarChart=new Chart(ctx1,{
    type:"bar",
    data:{
        labels:["Jan", "Feb", "Mar", "Apr"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18, 8],
            backgroundColor:["red", "green", "blue", "orange"]
        }]
    },
    options:{
        responsive:false,
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});

let myPieChart=new Chart(ctx2,{
    type:"pie",
    data:{
        labels:["Jan", "Feb", "Mar"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18],
            backgroundColor:["red", "green", "blue"]
        }]
    },
    options:{
        responsive:false,
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});

let myDoughnutChart=new Chart(ctx3,{
    type:"doughnut",
    data:{
        labels:["Jan", "Feb", "Mar"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18],
            backgroundColor:["red", "green", "blue"]
        }]
    },
    options:{
        responsive:false,
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});

let myLineChart=new Chart(ctx4,{
    type:"line",
    data:{
        labels:["Jan", "Feb", "Mar"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18],
            backgroundColor:["red", "green", "blue"]
        }]
    },
    options:{
        responsive:false,
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});

let myRadarChart=new Chart(ctx5,{
    type:"radar",
    data:{
        labels:["Red", "Green", "Blue", "Yellow", "Orange"],
        datasets:[{
            label:"Random Radar Data",
            data:[12, 15, 18, 6, 3, 5],
            backgroundColor:["red", "green", "blue", "yellow", "orange"]
        }]
    },
    options:{
        responsive:false,
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:false
                }
            }]
        }
    }
});
