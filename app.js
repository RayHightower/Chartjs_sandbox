let ctx1=document.getElementById("myBarChart").getContext("2d");

let myBarChart=new Chart(ctx1,{
    type:"bar",
    data:{
        labels:["Jan", "Feb", "Mar"],
        datasets:[{
            label:"Temperature",
            data:[12, 15, 18],
            backgroundColor:["red", "green", "blue"]
        }]
    }
});