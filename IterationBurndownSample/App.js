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
                        categories: ['5/09','5/10', '5/11', '5/12', '5/13', '5/16','5/17', '5/18', '5/19', '5/20'],
                        series: [{
                            type: 'column',
                            name: 'Tasks To Do (Hours)',
                            color: "rgb(46,134,155", 
                            data: [235, 235, 200, 186, 184, 0, 0, 0, 0, 0],  // add additional lines of data to vary the, comment out other lines
//                            data: [235, 235, 200, 186, 184, 0, 0, 0, 0, 0],  
                            tooltip: {
                                valueSuffix: ' hours'
                            },
                            legendIndex: 1
                        },{
                            type: 'column',
                            yAxis: 1,
                            name: 'Accepted (Points)',
                            color: "#5cba49",  
                            data: [0, 10, 20, 28, 28, 30, 0, 0, 0, 0],
//                            data: [0, 10, 20, 28, 28, 30, 0, 0, 0, 0],
                            tooltip: {
                                valueSuffix: 'points'
                            },
                            legendIndex: 3
                        }, {
                            type: 'line',
                            name: 'Ideal',
                            color: "#666666", 
                            data: [234, 208, 182, 156, 130, 104, 78, 52, 26, 0],
//                            data: [234, 208, 182, 156, 130, 104, 78, 52, 26, 0],
                            legendIndex:2

                        }, ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the column chart
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            xoomType: "xy"
                        },
                        title: {
                            text: "Iteration Burndown"
                        },
                        exporting: {
                            enabled: true
                        },
                        xAxis: {
                            title: {
                                text: "Date"
                            }

                        },
                        yAxis: [{
                            title: {
                                text: "Task To Do (Hours)",
                                color: '#000000'
                            }
                        },{
                            title: {
                                text: "Accepted (points)",
                                color: '#000000'
                            },
                            opposite: true
                        }]
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Burndown Sample'
            });
        });
    }
});
