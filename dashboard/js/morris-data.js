$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Strom: 2666,
            Wasser: null,
            Gas: 2647
        }, {
            period: '2010 Q2',
            Strom: 2778,
            Wasser: 2294,
            Gas: 2441
        }, {
            period: '2010 Q3',
            Strom: 4912,
            Wasser: 1969,
            Gas: 2501
        }, {
            period: '2010 Q4',
            Strom: 3767,
            Wasser: 3597,
            Gas: 5689
        }, {
            period: '2011 Q1',
            Strom: 6810,
            Wasser: 1914,
            Gas: 2293
        }, {
            period: '2011 Q2',
            Strom: 5670,
            Wasser: 4293,
            Gas: 1881
        }, {
            period: '2011 Q3',
            Strom: 4820,
            Wasser: 3795,
            Gas: 1588
        }, {
            period: '2011 Q4',
            Strom: 15073,
            Wasser: 5967,
            Gas: 5175
        }, {
            period: '2012 Q1',
            Strom: 10687,
            Wasser: 4460,
            Gas: 2028
        }, {
            period: '2012 Q2',
            Strom: 8432,
            Wasser: 5713,
            Gas: 1791
        }],
        xkey: 'period',
        ykeys: ['Strom', 'Wasser', 'Gas'],
        labels: ['Strom', 'Wasser', 'Gas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Strom Euro/kW",
            value: 12
        }, {
            label: "Gas Euro/m³",
            value: 30
        }, {
            label: "Wasser Euro/t",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Bestellmenge', 'Verbrauchmenge'],
        hideHover: 'auto',
        resize: true
    });
    
});
