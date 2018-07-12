
Highcharts.chart('basicline', {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Histórico 12 Meses'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Quantidade de chamados'
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
    name: 'Total',
    data: [7., 6., 9., 14., 18., 21., 25., 26., 23., 18., 13., 9.]
  },
  // {
  //   name: 'London',
  //   data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  // }
]
});
