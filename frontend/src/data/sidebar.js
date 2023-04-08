// import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
// import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    // icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Add License",
    // icon: <BiImageAdd />,
    path: "/add-license",
  },
  {
    title: "Account",
    // icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  // {
  //   title: "Report Bug",
  //   icon: <FaCommentAlt />,
  //   path: "/contact-us",
  // },
];

export default menu;