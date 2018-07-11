
Highcharts.chart('piechart', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Abertos por fila'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Minha Loja',
      y: 60,
      sliced: true,
      selected: true
    }, {
      name: 'Portal Certo',
      y: 10
    }, {
      name: 'Relatórios',
      y: 10
    }, {
      name: 'MIS Varejo',
      y: 5
    }, {
      name: 'Santander GO',
      y: 10
    }, {
      name: 'Satisfação Usuário',
      y: 5
    // }, {
    //   name: 'Opera',
    //   y: 1.6
    // }, {
    //   name: 'QQ',
    //   y: 1.2
    // }, {
    //   name: 'Other',
    //   y: 2.61
    //
  }]
  }]
});
