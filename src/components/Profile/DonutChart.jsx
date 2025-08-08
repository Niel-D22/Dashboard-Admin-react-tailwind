import React from 'react'
import Chart from "react-apexcharts"

const DonutChart = ({DarkMode}) => {
  
// data grafik,

const options = {
  series: [44, 55, 41],
  options: {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Desktop", "Tablet", "Mobile"],
    colors: ["#FF5733", "#33FF57", "#3357FF"],
    legend: {
      position: "bottom",
      labels: {
        colors: DarkMode ? "#dddddd" : "#000000",
      },
    },
    dataLabels: {
      style: {
        colors: ["#dddddd"],
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
  return (
    <div className=' bg-white rounded-lg  p-5 flex dark:bg-gray-600 h-full items-center justify-center'>
        <Chart options={options.options} series={options.series}
        type="donut"height={200} />
    </div>
  )
}

export default DonutChart