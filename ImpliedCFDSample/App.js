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

                    // start increment 6 months prior to today and build list of 6 increments.  If more incements are added
                    // you will need to add additional entries in all of the series data below.
                    var increments = 6;
                    var theDate = new Date();
                    theDate.setDate( theDate.getDate() - ( increments * 30) );   
                    var dates = [];
                    for(var i = 0; i < increments; i++) {
                        dates.push( new Date (theDate.setDate( theDate.getDate() + 30 )).toLocaleDateString() );
                    }
                    return {
                        categories: dates,
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

