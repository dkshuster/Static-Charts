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
                        chartColors : ["#CCCCCC","#00a9e0","#009933","#CCCCCC","#00a9e0","#009933"]
                    });
                },
            
                /**
                 * Generate x axis categories and y axis series data for the chart
                 */
                _getChartData: function() {
                    return {
                        series: [{
                            name: 'Baseline Scope',
                            data: [3500, 3550, 4000, 4000, 4000, 5000 ]
                        },{
                            name: 'Baseline Scope In Progress',
                            data: [2200, 2275, 2300, 2400, 2400, 2550]
                        }, {
                            name: 'Baseline Scope Completed',
                            data: [0, 0, 20, 20, 30, 40]
                        },{
                            name: 'Added Scope',
                            data: [0, 0, 0, 0, 0, ]
                        },{
                            name: 'Added Scope In Progress',
                            data: [0, 0, 0, 0, 0, 0]
                        }, {
                            name: 'Added Scope Completed',
                            data: [0, 0, 0, 0, 0, 0]
                        }, ]
                    };
                },
            
                /**
                 * Generate a valid Highcharts configuration object to specify the column chart
                 */
                _getChartConfig: function() {
                    return {
                        chart: {
                            type: 'column',
                            xoomType: "xy"
                        },
                        title: {
                            text: "PI Increment Scope Change"

                        },
                        exporting: {
                            enabled: true
                        },
                        xAxis: {
                            title: {
                                text: "Days"
                            },
                            min: 1,
                            max: 90,
                            plotLines: [{
                                color: '#FF0000',
                                width: 2,
                                value: 6
                            }]
                        },

                        yAxis: {
                            stackLabels: {
                                style: {
                                    color: 'black'
                                },
                                enabled: false
                            },
                            title: {
                                text: "Points / Count"
                            }
                        },
                        plotOptions: {
                            column: {
                                stacking: 'normal',
                                pointPadding: 0.1,
                                groupPadding: 0,
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'PI Incement Scope Change'
            });
        });
    }
});
