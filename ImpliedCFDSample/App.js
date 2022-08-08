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
                        categories: ['2021-11-15', '2021-12-15', '2022-01-15', '2022-02-15', '2022-03-15', '2022-04-15'],
                        series: [{
                            name: 'Not Started',
                            color: "#CCCCCC",
                            data: [5125, 5300, 5550, 6500, 7100, 7550]
                        },{
                            name: 'In Progress',
                            color: "#00a9e0",
                            data: [1700, 1950, 2050, 2150, 2300, 2400]
                        }, {
                            name: 'Completed',
                            color: "#009933",
                            data: [800, 850, 900, 975, 1000, 1050]
                        }, ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the chart parameters
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            type: 'area'
                        },
                        title: {
                            text: "Implied State CFD Over Last 6 Month(s)"

                        },
                        exporting: {
                            enabled: true
                        },
                        xAxis: {
                            title: {
                                text: ""
                            }

                        },
                        yAxis: {
                            stackLabels: {
                                style: {
                                    color: '#000000'
                                },
                                enabled: true
                            },
                            title: {
                                text: "Count"
                            }
                        },
                        plotOptions: {
                            area: {
                                stacking: 'normal',
                                dataLabels: {
                                    enabled: false
                                },
                                marker: {
                                    enabled: false,
                                    symbol: 'circle',
                                    radius: 2,
                                    states: {
                                        hover: {
                                            enabled: true
                                        }
                                    }
                                },
                                label: {
                                    enabled: false
                                }
                            }
                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Portfolio CFD Sample'
            });
        });
    }
});

