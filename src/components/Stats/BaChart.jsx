import React from "react";
import Chart from "react-apexcharts";

const BaChart = ({ DarkMode }) => {
const chartConfig = {
  series: [
    {
      name: "Total Projects",
      data: [1, 1, 2, 2, 3, 3, 2, 2], // total 16 project
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Jumlah Project per Bulan",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: 600,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#8b5cf6"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug"
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: DarkMode ? "#dddddd" : "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: DarkMode ? "#dddddd" : "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#a0a0a0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};


  return (
    <div className=" px- mt-2">
      <Chart options={chartConfig.options}
      series={chartConfig.series} type="bar"
      height={280}
      />
    </div>
  );
};

export default BaChart;
