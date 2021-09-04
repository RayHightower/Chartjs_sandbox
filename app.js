let ctx1=document.getElementById("myBarChart").getContext("2d");
let ctx2=document.getElementById("myPieChart").getContext("2d");
let ctx3=document.getElementById("myDoughnutChart").getContext("2d");
let ctx4=document.getElementById("myLineChart").getContext("2d");
let ctx5=document.getElementById("myRadarChart").getContext("2d");
let ctx6=document.getElementById("myBubbleChart").getContext("2d");

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
        labels:["Larry", "Moe", "Curly"],
        datasets:[{
            label:"Pie Percentage",
            data:[12, 15, 18],
            backgroundColor:[
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
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
        labels:["Chicago", "Los Angeles", "Phoenix", "Denver", "Dallas", "Atlanta"],
        datasets:[{
            label:"% of Sales Volume",
            data:[12, 15, 18, 2, 23, 4],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
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
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18, 4, 2, 5, 9, 21],
            backgroundColor:["red", "green", "blue", "red", "green", "blue", "red", "green"]
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
        labels:["Mind", "Body", "Spirit", "Finances", "Relationships", "Artistry"],
        datasets:[{
            label:"Live Balance Radar Chart",
            data:[12, 15, 18, 6, 3, 5],
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
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

const data = { /* for the Bubble Chart */
    datasets: [{
      label: 'Experimental Bubble Chart',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, 
      {
        x: 40,
        y: 10,
        r: 10
      },
      {
        x: 34,
        y: 19,
        r: 21
      },{
        x: 24,
        y: 29,
        r: 10
      },
      {
        x: 30,
        y: 15,
        r: 25
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  };

let myBubbleChart=new Chart(ctx6,{
    type:"bubble",
    data: data,
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
