import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from "react-icons/fa";

import user01 from "../assets/nils.jpg";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";

export const links = [
  {
    href: "#",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "try",
    badge: {
      text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: FaFacebookMessenger,
    text: "Inbox",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Users",
  },
  {
    href: "#",
    icon: FaListAlt,
    text: "Products",
  },
  {
    href: "#",
    icon: IoIosLogIn,
    text: "Sign In",
  },
  {
    href: "#",
    icon: IoIosLogOut,
    text: "Sign Up",
  },
];
export const empolyeesData  = [ 
  {
    title: "Total Projects",
    icon: FaProjectDiagram,
    count: 8, // Misalnya kamu sudah buat 8 project
    bgColor: "bg-gray-100",
  },
  {
    title: "GitHub Commits",
    icon: FaGithub,
    count: 113, // Jumlah commit (bisa diubah sesuai data asli kamu)
    bgColor: "bg-blue-100",
  },
  {
    title: "Languages Used",
    icon: FaCode,
    count: 2, // Misalnya kamu pakai HTML, CSS, JS, Node, React
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink = [
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Plan",
    icon: GrPlan,
  },
  {
    title: "Stats",
    icon: IoIosStats,
  },
  {
    title: "Setting",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Daniel R.W.",
    country: "Indonesia",
    role: "Frontend Developer",
    image: user01, // pastikan ini menunjuk ke foto kamu
    bgColor: "bg-emerald-100",
  },
];


export const events = [
  {
    date: "03 Jun",
    title: "Game Suit",
    description: "Suit game pakai Node.js & MySQL.",
  },
  {
    date: "20 Jun",
    title: "Absensi Online SPA",
    description: "Absensi mahasiswa dengan fitur dashboard.",
  },
  {
    date: "18 Mei",
    title: "Dashboard Statistik",
    description: "Tampilkan data user dengan chart dinamis.",
  },
];

;

// ------- ==
// chart data, later we will use this!!!

// const options = {
//   series: [70, 20, 10], // total 100%
//   options: {
//     chart: {
//       type: "donut",
//       height: 350,
//     },
//     labels: ["Mahasiswa", "Admin", "Dosen"],
//     colors: ["#4ade80", "#60a5fa", "#f87171"],
//     legend: {
//       position: "bottom",
//       labels: {
//         colors: darkMode ? "#dddddd" : "#000000",
//       },
//     },
//     dataLabels: {
//       style: {
//         colors: ["#dddddd"],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   },
// };
// 

// ..........
// const chartConfig = {
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       height: 240,
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     plotOptions: {
//       bar: {
//         columnWidth: "40%",
//         borderRadius: 2,
//       },
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#a0a0a0",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };
