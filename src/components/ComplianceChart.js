import React from 'react';
import { connect } from 'react-redux';
import ZingChart from 'zingchart-react';

const ChartComponent = ({ data }) => {

    const dataToSeries = (d) => Object.keys(d).map(k => {
        return {
            values: Object.keys(d[k]).map(dk => d[k][dk]),
            text: k.replaceAll('_', ' ').toUpperCase()
        };
    });

    const [state, setState] = React.useState({
        type: 'hbar',
        title: {
            text: 'Patch Status',
        },
        legend: {
            x: "75%",
            y: "25%",
            "border-width": 1,
            "border-color": "gray",
            "border-radius": "5px",
            "header": {
              "text": "Legend",
              "font-family": "Courier",
              "font-size": 12,
              "font-color": "#3333cc",
              "font-weight": "normal"
            },
            "marker": {
              "type": "circle"
            },
            "toggle-action": "remove",
            "minimize": true,
            "icon": {
              "line-color": "#9999ff"
            },
            "max-items": 8,
            "overflow": "scroll"
          },
          plot: {
            layout: "auto",
            stacked: true,
            "stack-type": "100%",
            animation: {
              "on-legend-toggle": true,
              "effect": 5,
              "method": 1,
              "sequence": 1,
              "speed": 1
            },
            "value-box": {
              "text": "%v",
              "font-size": 12,
              "font-family": "Georgia",
              "font-weight": "normal",
              "placement": "out",
              "font-color": "gray",
            },
            tooltip: {
              "text": "%t: %v",
              "font-color": "black",
              "font-family": "Georgia",
              "text-alpha": 1,
              "background-color": "white",
              "alpha": 0.7,
              "border-width": 1,
              "border-color": "#cccccc",
              "line-style": "dotted",
              "border-radius": "10px",
              "padding": "10%",
              "placement": "node:center"
            },
            "border-width": 1,
            "border-color": "#cccccc",
            "line-style": "dotted"
          },
        series: dataToSeries(data)
    });

    React.useEffect(() => {
        setState({ 
            ...state, 
            series: dataToSeries(data)
        });
    }, [data]);

    console.log('[PatchStatusChart] state:', state);

    return <ZingChart data={state} />;
};

const mapStateToProps = (state) => ({
    data: state.compliance
});

export const ComplianceChart = connect(mapStateToProps)(ChartComponent);