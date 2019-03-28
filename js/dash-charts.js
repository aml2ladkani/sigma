//Chart.defaults.scale.gridLines.display = false;

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Roboto';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
      //Start with a base font of 30px
      ctx.font = "50px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});

var ctx = document.getElementById("safe_spend");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels:['Upcoming Expenditure','Amount Budgeted','Safe to Spend'],
        datasets: [{
            data: [67, 174, 186.300],
            backgroundColor: [
                '#cccccc',
                '#5a5a5a',
                '#8d7633'            ],
        }]
    },
    options: {
        animation:{
          duration:750,
          easing:'easeInQuad'
        },
        cutoutPercentage:80,
        scales: {
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                  display: false,
                  drawBorder: false

                }
            }]
        },
        elements: {
                  center: {
                  text: 'BHD 186.3',
                  color: '#000000', //Default black
                  fontStyle: 'Roboto', //Default Arial
                  sidePadding: 20 //Default 20 (as a percentage)
                }
              },
        legend: {
            display: false
        },


tooltips:{
  position:'nearest',
  backgroundColor:'#ffffff',
  displayColors:false,
  bodyFontColor:'#000',
  bodyFontFamily:'Roboto',
  bodyFontSize:'15',
  borderColor:'#b89a43',
  borderWidth:1,
  caretSize:10,
  caretPadding:5,
  bodySpacing:10,
  mode:'point',
  cornerRadius:5,
  xPadding:15,
  yPadding:15

}



    }
});


var ctx = document.getElementById("category_spend");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Rent", "Utilities", "Food & Travel", "Entertainment", "Others"],
        datasets: [{
            data: [110, 85, 153, 56, 85],
            backgroundColor: [
                '#685725',
                '#7a662c',
                '#8d7633',
                '#a0863a',
                '#b29541'
            ],
        }]
    },
    options: {
        animation:{
          duration:750,
          easing:'easeInQuad'
        },
        scales: {
            xAxes: [{
              barPercentage: 0.01,

                ticks: {
                  beginAtZero:false,
                  maxTicksLimit:5,
                  fontColor:'#cccccc',
                  fontFamily:'Roboto'
                    },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
            }],
        yAxes: [{
            barPercentage: 1,
            barThickness: 10,
            gridLines: {
                display: true,
            },
            ticks: {
                beginAtZero:false,
                maxTicksLimit:5,
                fontColor:'#000000',
                fontFamily:'Roboto'
                  },
            title: {
                display: false,
            }
        }]
        },
    legend: {
            display: false
    },
tooltips:{
  position:'nearest',
  backgroundColor:'#b89a43',
  displayColors:false,
  bodyFontColor:'#fff',
  bodyFontFamily:'Roboto',
  bodyFontSize:'15',
  borderColor:'#fff',
  borderWidth:1,
  caretSize:10,
  caretPadding:5,
  bodySpacing:10,
  mode:'point',
  cornerRadius:5,
  xPadding:5,
  yPadding:5,
  footerFontColor:'#000',
  footerFontStyle:'light',


},
ticks: {
  beginAtZero:false,
  maxTicksLimit:5,
  fontColor:'#000'

}
    }

});



var semi_ctx = document.getElementById("current_budget");
var myChart = new Chart(semi_ctx, {
    type: 'doughnut',
    data: {
        labels: ["Rent", "Utilities", "Food & Travel", "Entertainment", "Others"],
        datasets: [{
            label: '# of Votes',
            data: [110, 85, 200, 65, 100],
            backgroundColor: [
              '#685725',
              '#7a662c',
              '#8d7633',
              '#a0863a',
              '#b29541'
            ],

            borderWidth: 1
        }]
    },
    options: {
        animation:{
          duration:750,
          easing:'easeInQuad'
        },
        //rotation: 1 * Math.PI,
        //circumference: 1 * Math.PI,
        cutoutPercentage:75,
    legend: {
            display: false
    },
tooltips:{
  position:'nearest',
  backgroundColor:'#ffffff',
  displayColors:false,
  bodyFontColor:'#000',
  bodyFontFamily:'Roboto',
  bodyFontSize:'15',
  borderColor:'#b89a43',
  borderWidth:1,
  caretSize:10,
  caretPadding:5,
  bodySpacing:10,
  mode:'point',
  cornerRadius:10,
  xPadding:15,
  yPadding:15

}
    },
    centerText: {
        display: true,
        text: "BHD 780",
        color: 'black', //Default black
    },
    plugins: [{
        beforeDraw: function(chart, options) {

    var width = chart.chart.width,
    height = chart.chart.height,
    ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = '25px';
    ctx.font = fontSize + " Roboto";
    ctx.textBaseline = "middle";
    //ctx.textAlign = 'center';
    var text = chart.config.centerText.text,
    textX = Math.round((width - ctx.measureText(text).width) / 2),
    textY = height / 2;

    ctx.fillStyle = '#000';
    ctx.fillText(text, textX, textY);
    ctx.save();


        }
    }]

});
