let ctx1=document.getElementById("myBarChart").getContext("2d");
let ctx2=document.getElementById("myPieChart").getContext("2d");
let ctx3=document.getElementById("myDoughnutChart").getContext("2d");

let myBarChart=new Chart(ctx1,{
    type:"bar",
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