import React, {useState} from 'react'
import chart from 'react-apexcharts';
export const Charts = () => {
    const[data, setdata] = useState({
        series:[
            {
                name: 'sales',
                data: [31, 40, 28, 40, 20  ],
            },
            {
                name: 'Revenue',
                data: [11, 42, 88, 20, 30  ],
            },
            {
                name: 'Customers',
                data: [31, 40, 28, 40, 20  ],
            },
        ],
        options : {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,

                },
            },
            markers: {
                size: 4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.3,
                    opacityTo: 0.4,
                    stops: [0, 90, 100],
                },
            },
            dataLabels: {
                enabled:false ,

            },
            stroke: {
                curve: 'smooth',
                width: 2,

            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2019-09-19T00:00.00.000z',
                    '2019-09-19T01:30.00.000z',
                    '2019-09-19T02:30.00.000z',
                    '2019-09-19T03:30.00.000z',
                    '2019-09-19T05:30.00.000z',

                ],

            },
            tootip: {
                x: {
                    format: 'dd/mm/yy HH:mm',
                },

            },

        },
    });
  return (
   <chart 
   options={data.options}
   series={data.series}
   type={data.options.chart.type}
   height={data.options.chart.height}
   />
  )
}