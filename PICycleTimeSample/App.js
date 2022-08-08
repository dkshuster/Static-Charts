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
                        categories: ['FY21-Q2', 'FY21-Q3', 'FY21-Q4', 'FY22-Q1 PI', 'FY22-Q2', 'FY22-Q3'],
                        series: [{
                            name: 'Cycle Time (Median)',
                            color: "#937bb7",
                            data: [58, 63, 55, 71, 30, 28]
                        },{
                            name: 'P25 - P75',
                            type: 'errorbar',
                            color: "#000000",
                            data: [ {low:30, high:90},{low:27, high:98},{low:27, high:74},{low:41, high:108},{low:11, high:51}, {low:11, high:51}],
                            showInLegend: true
                        } ]
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
                            text: ""

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
                            min: 0,
                            title: {
                                text: "Days"
                            }
                        },
                        plotOptions: {
                            column: {
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'PI Cycle Time Sample'
            });
        });
    }
});


