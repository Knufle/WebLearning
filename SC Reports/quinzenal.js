
Highcharts.chart('quinzenal', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Quantidade de chamados'
  },
  subtitle: {
    text: 'Fonte: Service Center'
  },
  xAxis: [{
    categories: ['07/07', '08/07', '09/07', '10/07', '11/07',
      '12/07', '13/07', '14/07', '15/07', '16/07'],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[2]
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: Highcharts.getOptions().colors[2]
      }
    },
    opposite: true

  }, { // Secondary yAxis
    gridLineWidth: 0,
    title: {
      text: 'Rainfall',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} mm',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    }

  }, { // Tertiary yAxis
    gridLineWidth: 0,
    title: {
      text: 'Sea-Level Pressure',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    labels: {
      format: '{value} mb',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    x: 80,
    verticalAlign: 'top',
    y: 55,
    floating: true,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  series: [{
    name: 'Abertos',
    type: 'column',
    yAxis: 1,
    data: [10, 22, 13, 24, 5, 11, 16, 14, 3, 2, 14, 28],
    tooltip: {
      valueSuffix: ''
    }

  }, {
    name: 'Fechados',
    type: 'column',
    yAxis: 1,
    data: [8, 23, 15, 17, 8, 13, 20, 16, 9, 6, 16, 20],
    tooltip: {
      valueSuffix: ''
    }

  }, {
    name: 'Em aberto',
    type: 'spline',
    yAxis: 2,
    data: [5, 8, 7, 5, 11, 13, 3, 1, 2, 10, 12, 5],
    marker: {
      enabled: false
    },
    dashStyle: 'shortdot',
    tooltip: {
      valueSuffix: ''
    }

  }, {
    name: 'Atrasados',
    type: 'spline',
    data: [2, 1, 0, 3, 5, 4, 0, 2, 6, 0, 4, 2],
    tooltip: {
      valueSuffix: ''
    }
  }]
});
