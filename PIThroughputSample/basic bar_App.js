Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        Rally.onReady(function() {
            Ext.define('Rally.example.BareMetalChart', {
                extend: 'Rally.app.App',
            
                launch: function() {
                    this.add({
                        xtype: 'rallychart',
                        loadMask: false,
                        chartData: this._getChartData(),
                        chartConfig: this._getChartConfig()
                    });
                },
            
                /**
                 * Generate x axis categories and y axis series data for the chart
                 */
                _getChartData: function() {
                    return {
                        categories: [
                            'Iteration 1',
                            'Iteration 2',
                            'Iteration 3',
                            'Iteration 4',
                            'Iteration 5',
                            'Iteration 6',
                            'Iteration 7',
                            'Iteration 8',
                            'Iteration 9',
                            'Iteration 10',
                            'Iteration 11',
                            'Iteration 12'
                        ],
                        series: [
                            {
                                name: 'Shopping Team',
                                data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
            
                            },
                            {
                                name: 'Payment Team',
                                data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83, 106, 92]
            
                            },
                            {
                                name: 'API Team',
                                data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51]
            
                            },
                            {
                                name: 'Fulfillment Team',
                                data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51]
            
                            }
                        ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the column chart
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Iteration Story Count - Accepted'
                        },
                        subtitle: {
                            text: 'By Points'
                        },
                        xAxis: {
                        },
                        yAxis: {
                            min: 0,
                                title: {
                                text: 'Points'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} points</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                    borderWidth: 0
                            }
                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Bare Metal Chart Example'
            });
        });
    }
});
