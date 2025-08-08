import React from 'react'
import Chart from "react-apexcharts"

const DonutChart = ({DarkMode}) => {
  
// data grafik,

const options = {
  series: [50, 20, 30], // total 100%
  options: {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["JavaScript", "HTML & CSS", "React + Tailwind"],
    colors: ["#facc15", "#60a5fa", "#a78bfa"],
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
    <div data-aos="fade-left" data-aos-duration="2500"  className=' bg-white rounded-lg  p-5 flex dark:bg-gray-600 h-full items-center justify-center'>
        <Chart options={options.options} series={options.series}
        type="donut"height={200} />
    </div>
  )
}

export default DonutChart