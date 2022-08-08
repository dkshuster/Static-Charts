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
                        categories: ['02/14','02/28','03/14','03/28','04/11','04/25','05/09','05/23',
                                     '10/25','11/08','11/22','12/06','12/20','01/03','01/17','01/31',
                                     '07/05','07/19','08/02','08/16','08/30','09/13','09/27','10/11'],
                        series: [{
                            name: 'Total Active',
                            color: "#000000",
                            data:   [1, 1, 1, 1, 2, 7, 10, 20,
                                     62, 75, 60, 101, 65, 60, 55, 50, 
                                     62, 62, 61, 50, 55, 40, 35, 29],
                            yAxis: 1,
                            marker: {
                                symbol: ''
                            }
                        },{
                            name: 'Cummulative Activated',
                            color: "#ff0000",
                            data:   [0, 1, 1, 2, 10, 40, 60, 62,
                                     80, 84, 80, 120, 160, 200, 210, 218,
                                     240, 245, 250, 260, 280, 285, 290, 320],
                            marker: {
                                symbol: 'triangle'
                            }
                   }, {
                            name: 'Cumulative Terminated',
                            color: "#008000",
                            data:   [0, 1, 1, 2, 8, 9, 10, 12,
                                    16, 20, 35, 40, 50, 81, 80, 116,
                                    124, 130, 165, 200, 239, 245, 260, 282],
                            marker: {
                                symbol: 'triangle-down'
                            }
                   }, ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the column chart
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            type: 'line',
                            xoomType: "xy"
                        },
                        title: '',
                        exporting: {
                            enabled: true
                        },
                        xAxis: {
                            title: {
                                text: "Weeks"
                            },
                            type: 'datetime'
                        },
                        yAxis: [{
                            title: {
                                text: 'Cumulative Defect Count'
                            }
                        },{
                            title: {
                                text: 'Active Defect Count'
                            },
                            opposite: true
                        }],
//                        plotOptions: {
//                            series: {
//                                pointStart: Date.UTC(2022, 5, 16),
//                                pointInterval: 24 * 3600 * 1000  // 2 weeks
//                            }
//                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Defect Trend Chart'
            });
        });
    }
});
