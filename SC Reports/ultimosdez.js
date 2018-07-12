
Highcharts.chart('ultimosdez', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Últimos dez dias'
  },
  xAxis: {
    categories: [
      'Minha Loja',
      'Minhas Oportunidades',
      'MIS Varejo',
      'Satisfação - Minha Loja',
      'Santander GO'
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
    data: [8, 5, 6, 11, 4]

  }, {
    name: 'Fechados',
    data: [5, 10, 7, 5, 9]

  }]
});
