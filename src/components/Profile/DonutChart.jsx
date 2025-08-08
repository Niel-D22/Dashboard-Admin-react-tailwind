import React from 'react'
import Chart from "react-apexcharts"

const DonutChart = ({DarkMode}) => {
  
// data grafik,

const options = {
  series: [70, 20, 10], // total 100%
  options: {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Mahasiswa", "Admin", "Dosen"],
    colors: ["#4ade80", "#60a5fa", "#f87171"],
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