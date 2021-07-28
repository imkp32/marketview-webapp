export default function(dateArray,historicalArray){
  //console.log(historicalArr);
  return{
    chart: {
      style:{
          fontFamily:'roboto'
      }
  },

      title: {
        text: 'Historical Cumulative Returns'
      },
    
      subtitle: {
        text: 'MarketView Analytics'
      },
    
      yAxis: {
        title: {
          text: 'Historical Returns'
        }
      },
    
      xAxis: {
       categories:dateArray,
       tickInterval:252,
       labels: {
        formatter: function() {
            return this.value.toString().substring(0, 4);
        }
      }
      },
    
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
    
      series: [{
        name: 'Historical Cumulative Returns',
        data: historicalArray}],
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    
    }
  }
  