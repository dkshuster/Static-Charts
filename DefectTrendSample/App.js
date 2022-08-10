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
                    // calculate and populate the previous 1 week intervals based on todays date.  If you change the number of increments
                    // you will have to adjust the series values to match the number of increments.
                    var increments = 24;
                    var theDate = new Date();
                    theDate.setDate( theDate.getDate() - (increments * 7) );  // start increments, 1 week increments ago
                    var dates = [];
                    for(var i = 0; i < increments; i++) {
                        console.log("I = " + i);
                        dates.push( new Date (theDate.setDate( theDate.getDate() + 7 )).toDateString() );
                    }
                    return {
                        categories : dates,
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
                    };
                }
            });
            

            Rally.launchApp('Rally.example.BareMetalChart', {
              name: 'Defect Trend Chart'
            });
        });
    }
});
