
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
  }
  
  var chart = new ApexCharts(document.querySelector("#firstChart"), options);
  chart.render();

  var options2 = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  var chart2 =  new ApexCharts(document.querySelector("#firstChartBar"), options2);
  chart2.render();

  var series2chart = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    },{
      name: 'viewers',
      data: [25,36,90,60,65,55,68,100,115]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
  }
  var chart3 =  new ApexCharts(document.querySelector("#dblSerieChart"), series2chart);
  chart3.render();