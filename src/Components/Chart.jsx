import React from 'react';
import period from "../data/period_week"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
const Chart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    // const currentDate = new Date();
    // const labels = Array.from({ length: 7 }, (_, i) => {
    //     const date = new Date(currentDate);
    //     date.setDate(currentDate.getDate() + i);
    //     return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    // });
    const labels = period.map((item) => item.exchangedate)

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: '7 днів',
                data: period.map((item) => item.rate),
                borderColor: '#ff8000',
                backgroundColor: '#ff8000',
            },
            // {
            //     fill: true,
            //     label: 'Dataset 2',
            //     data: [10, 12, 34, 65, 32, 54, 23, 54],
            //     borderColor: 'red',
            //     backgroundColor: 'red',
            // },
        ],
    };
    return (
        <div id='chart'>
            <Line options={options} data={data} />;
        </div>
    );
};

export default Chart;