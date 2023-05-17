import React from 'react';
import {Line, Pie} from "react-chartjs-2";
import {Row} from "react-bootstrap";
import {Container, Grid, Paper} from "@mui/material";

const lineData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [
        {
            label: "On-boarding",
            data: [1, 2, 2, 4, 6,7, 6, 9, 9, 11, 11, 12, 14, 14, 15],
            fill: true,
            backgroundColor: "rgba(0,183,74,0.2)",
            borderColor: "rgb(0,183,74)",
            // yAxisID: 'y-axis-1',
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBorderWidth: 2,
        },
        {
            label: "Off-boarding",
            data: [0, 2, 3, 5, 7,8, 7,7, 8, 10, 12, 12, 12, 14, 16],
            fill: true,
            backgroundColor: "rgba(48,48,48,0.2)",
            borderColor: "#303030",
            // yAxisID: 'y-axis-2',
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBorderWidth: 2,
        },
    ],
}

const pieData01 = {
    labels: ['CFL Bulbs', 'Solar', 'Dimmer Switches'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const pieData02 = {
    labels: ['Order Completed', 'Not Yet Completed'],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 3],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const PieGraph = () => {
    return (
        <Container>
            <Grid  container direction={"row"} justifyContent="space-between"
                   alignItems="center">

            {/*<Line data={lineData}  className={"custom-canvas"}/>*/}
                <Grid  direction="column" justifyContent="center" alignItems="center" item lg={5} md={5} xs={5}
                    // className={classes.paper}
                       component={Paper} paddingY={2}
                >
            <Pie data={pieData01}  className={"custom-canvas"}/>
                </Grid>
                <Grid  direction="column" justifyContent="center" alignItems="center" item lg={5} md={5} xs={5}
                    // className={classes.paper}
                       component={Paper} paddingY={2}
                >
            <Pie data={pieData02}  className={"custom-canvas"}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PieGraph;
