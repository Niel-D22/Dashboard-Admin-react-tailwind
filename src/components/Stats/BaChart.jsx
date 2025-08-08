import React from "react";
import Chart from "react-apexcharts";

const BaChart = ({ DarkMode }) => {
 const chartConfig = {
  series: [
    {
      name: "Project Selesai",
      data: [1, 2, 3, 4, 2, 3, 4, 2, 1], // jumlah project selesai per bulan
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
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3b82f6"], // warna biru (Tailwind blue-500)
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    xaxis: {
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
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"
      ], // bulan
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
    <div className="px-2 pb-0">
      <Chart options={chartConfig.options}
      series={chartConfig.series} type="bar"
      height={240}
      />
    </div>
  );
};

export default BaChart;
