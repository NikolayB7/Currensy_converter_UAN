import React, {useEffect, useState} from 'react';
import periodWeek from "../data/period_week"
import periodMonth from "../data/period_month"
import periodYear from "../data/period_year"
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
    const [period,setPeriod] = useState(periodWeek)
    const changePeriod=(period)=>{
        switch (period) {
            case 'week':
                setPeriod(periodWeek)
                break;
            case 'month':
                setPeriod(periodMonth)
                break;
            case 'year':
                setPeriod(periodYear)
                break;

        }
    }

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
                position: 'bottom',
                display: false,
                onClick: function () {
                    console.log('CLICK LEGEND')
                }
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
        <>
            <div className="chart-period">
                <div className="chart-period__item" onClick={()=>changePeriod('week')}>Тиждень</div>
                <div className="chart-period__item" onClick={()=>changePeriod('month')}>Місяць</div>
                <div className="chart-period__item" onClick={()=>changePeriod('year')}>Рік</div>
            </div>
            <div id='chart'>
                <Line options={options} data={data} />;
            </div>
        </>
    );
};

export default Chart;