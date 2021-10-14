
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

  var cGallery1 = {
    chart: {
      type: 'line',
      height:350,
      width: 500,
    },
    stroke: {
      curve: ['smooth', 'stepline','straight']
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125],
    },{
      name: 'viewers',
      data: [25,36,90,60,65,55,68,100,115],
    },
    {
      name: 'clicks',
      data: [14,22,50,55,47,63,70,81,98],
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
  };
  var chart4 = new ApexCharts(document.querySelector('#cGallery1'), cGallery1);
  chart4.render()

  var cGallery2 = {
    chart: {
      type: 'candlestick',
      height:350,
      width: 500,
    },
    title: {
      text: 'Price Candlestick Charts'
    },
    series: [{
      data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        },
      ],
    xaxis: {
      type:'datetime'
    }
    }]
  }
  var chart5 = new ApexCharts(document.querySelector('#cGallery2'), cGallery2);
  chart5.render();

  var cGallery3 = {
    series: [44, 55, 13, 43, 22],
    chart: {
    height:350,
    width: 500,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  };
  var chart6 = new ApexCharts(document.querySelector('#cGallery3'), cGallery3);
  chart6.render();

  var cGallery4 = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
    height:350,
    width: 500,
  },
  labels: ['A1', 'A2', 'A3', 'A4', 'A5'],
  };

  var chart7 = new ApexCharts(document.querySelector("#cGallery4"), cGallery4);
  chart7.render();