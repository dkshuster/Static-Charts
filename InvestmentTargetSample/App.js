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
                        series: [ {
                            type: 'pie',
                            name: 'Investment Planning Targets',
                            data: [{
                                name: 'Customer Success / Satisfaction',
                                y: 50.0,
                                color: '#2f7ed8'
                            },{
                                name: 'Pipeline',
                                y: 20.0,
                                color: '#8bbc21'
                            },{
                                name: 'Employee Engagement',
                                y: 15.0,
                                color: '#910000'
                            },{
                                name: 'Revenue',
                                y: 15.0,
                                color: '#492970'
                            }],
                            center: [100,80],
                            size: 100,
                            showInLegend: false,
                            datalabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        },{
                                type: 'pie',
                                name: 'Investment Planning Targets',
                                data: [{
                                    name: 'Customer Success / Satisfaction',
                                    y: 50.0,
                                    color: '#2f7ed8'
                                },{
                                    name: 'Pipeline',
                                    y: 20.0,
                                    color: '#8bbc21'
                                },{
                                    name: 'Employee Engagement',
                                    y: 15.0,
                                    color: '#910000'
                                },{
                                    name: 'Revenue',
                                    y: 15.0,
                                    color: '#492970'
                                }],
                                center: [100,80],
                                size: 100,
                                showInLegend: false,
                                datalabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            },  {

                            type: 'pie',
                            name: 'Investment Planning Targets',
                            data: [{
                                name: 'Customer Success / Satisfaction',
                                y: 50.0,
                                color: '#2f7ed8'
                            },{
                                name: 'Pipeline',
                                y: 20.0,
                                color: '#8bbc21'
                            },{
                                name: 'Employee Engagement',
                                y: 15.0,
                                color: '#910000'
                            },{
                                name: 'Revenue',
                                y: 15.0,
                                color: '#492970'
                            }],
                            center: [100,80],
                            size: 100,
                            showInLegend: false,
                            datalabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }]
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
                            text: "Investment Planning Targets"
                        },
                        exporting: {
                            enabled: true
                        },
                        labels: {
                            items: [{
                                html: 'Investment Pl;anning Targets',
                                style: {
                                    left: '50px',
                                    top: '18px',
                                    color: 'black'
                                }
                            }, {
                                html: 'Prelininary Feature Estimates',
                                style: {
                                    left: '250px',
                                    top: '18px',
                                    color: 'black'
                                }
                            }, {
                                html: 'Estimated User Story Count',
                                style: {
                                    left: '550px',
                                    top: '18px',
                                    color: 'black'
                                }
                            }, {
                                html: 'Accepted User Story Count',
                                style: {
                                    left: '550px',
                                    top: '18px',
                                    color: 'black'
                                }
                        }]
                        }
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Investment Categories'
            });
        });
    }
});
