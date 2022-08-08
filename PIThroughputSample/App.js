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
                        chartConfig: this._getChartConfig(),
                        chartColors : ["#CCCCCC","#00a9e0","#009933"] 
                    });
                },
            
                /**
                 * Generate x axis categories and y axis series data for the chart
                 */
                _getChartData: function() {
                    return {
                        categories: ['FY21-Q2', 'FY21-Q3', 'FY21-Q4', 'FY22-Q1 PI', 'FY22-Q2', 'FY22-Q3'],
                        series: [{
                            name: 'Not Started',
                            data: [2, 1, 0, 2, 8, 75]
                        },{
                            name: 'In Progress',
                            data: [0, 3, 3, 0, 50, 6]
                        }, {
                            name: 'Completed',
                            data: [51, 75, 84, 81, 24, 0]
                        }, ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the chart configuration
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            type: 'column',
                            xoomType: "xy"
                        },
                        title: {
                            text: "PI Throughput"

                        },
                        exporting: {
                            enabled: true
                        },
                        xAxis: {
                            title: {
                                text: "Releases"
                            }
                        },
                        yAxis: {
                            stackLabels: {
                                style: {
                                    color: 'black'
                                },
                                enabled: true
                            },
                            title: {
                                text: "Count"
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                pointPadding: 0.1,
                                groupPadding: 0.2,
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        }
                    };
                }
            });

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'PI Throughput Sample'
            });
        });
    }
});
