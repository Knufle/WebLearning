
Highcharts.chart('quinzenal', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Report de chamados'
  },
  subtitle: {
    text: 'Fonte: Service Center'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Quantidade de chamados'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Abertos',
    data: [10, 22, 13, 24, 5, 11, 16, 14, 3, 2, 14, 28]

  }, {
    name: 'Fechados',
    data: [8, 23, 15, 17, 8, 13, 20, 16, 9, 6, 16, 20]

  }, {
    name: 'Em aberto',
    data: [5, 8, 7, 5, 11, 13, 3, 1, 2, 10, 12, 5]

  }, {
    name: 'Atrasados',
    data: [2, 1, 0, 3, 5, 4, 0, 2, 6, 0, 4, 2]

  }]
});
