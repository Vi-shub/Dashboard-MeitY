import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../Redux/auth/action";
import Menu from "../Menu/Menu";
import { Dropdown } from "antd";

// Image imports
import userAvatar from "../../Assets/useravatar.png"; 
import logo from "../../Assets/logo1.png";

// Icon imports
import { BiLogOut, BiUserVoice } from "react-icons/bi";
import { TbLayoutGridAdd, TbUsers, TbBrandSpeedtest } from "react-icons/tb";
import { LuLayoutGrid } from "react-icons/lu";
import { PiStudentDuotone } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";
import { GoChevronDown } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";

// CSS imports
import "./Navbar.css";

const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const auth = useSelector((store) => store.auth);

  // Check if user is authenticated
  if (!auth.data || !auth.data.isAuthenticated) {
    navigate("/");
    return null;
  }

  // Destructure user data with null checks
  const { userType, name, premium } = auth.data.user || {};

  // Sidebar toggle state
  const [toggle, setToggle] = useState(true);

  // Sidebar menu
  const adminData = [
    { icon: <HiOutlineHome />, title: "Dashboard", address: "/home" },
    { icon: <RiAdminLine />, title: "Admins", address: "/admin" },
    { icon: <BiUserVoice />, title: "Tutors", address: "/tutor" },
    { icon: <PiStudentDuotone />, title: "Students", address: "/student" },
    { icon: <TbBrandSpeedtest />, title: "Quizzes", address: "/quizzes" },
    { icon: <TbLayoutGridAdd />, title: "Contents", address: "/contents" },
    { icon: <TbUsers />, title: "Leader Board", address: "/leaderboard" },
  ];
  const studentData = [
    { icon: <HiOutlineHome />, title: "Dashboard", address: "/home" },
    { icon: <TbBrandSpeedtest />, title: "Quizzes", address: "/quizzes" },
    { icon: <TbLayoutGridAdd />, title: "Contents", address: "/contents" },
    { icon: <AiOutlineQuestion />, title: "Doubts", address: "/doubts" },
    { icon: <TbUsers />, title: "Leader Board", address: "/leaderboard" },
  ];
  const tutorData = [
    { icon: <HiOutlineHome />, title: "Dashboard", address: "/home" },
    { icon: <PiStudentDuotone />, title: "Students", address: "/student" },
    { icon: <TbBrandSpeedtest />, title: "Quizzes", address: "/quizzes" },
    { icon: <TbLayoutGridAdd />, title: "Contents", address: "/contents" },
    { icon: <TbUsers />, title: "Leader Board", address: "/leaderboard" },
    { icon: <AiOutlineQuestion />, title: "Doubts", address: "/doubts" },
  ];

  // Dropdown menu
  const items = [
    {
      key: "1",
      label: <span onClick={() => handleLogout()}>Logout</span>,
    },
  ];

  // Logout function
  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <>
      {/* Side Bar */}
      <div id="sidebar" className={toggle ? "hide" : ""}>
        <Link to="/" className="logo">
          <div className="logoBox">
            <img src={logo} alt="logo" />
            <LuLayoutGrid
              className="menuIconHidden"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </Link>

        {/* Side bar menu */}
        <ul className="side-menu top">
          {userType === "Tutor" &&
            tutorData.map((data, i) => (
              <Menu
                Icon={data.icon}
                Title={data.title}
                key={i}
                Address={data.address}
              />
            ))}
          {userType === "Student" &&
            studentData.map((data, i) => (
              <Menu
                Icon={data.icon}
                Title={data.title}
                key={i}
                Address={data.address}
              />
            ))}
          {userType === "Admin" &&
            adminData.map((data, i) => (
              <Menu
                Icon={data.icon}
                Title={data.title}
                key={i}
                Address={data.address}
              />
            ))}
          <span onClick={() => handleLogout()}>
            <Menu Icon={<BiLogOut />} Title={"Logout"} Address={""} />
          </span>
        </ul>
      </div>

      {/* Top Bar */}
      <div id="content">
        <nav>
          <div>
            <LuLayoutGrid
              className="menuIcon"
              onClick={() => setToggle(!toggle)}
            />
            {userType === "Student" ? (
              premium === "false" ? (
                <Link to="/" className="nav-link">
                  🔥 Access all features with premium ! <span>Buy now !</span>
                </Link>
              ) : (
                "🔥You are a premium member !"
              )
            ) : (
              <Link to="/" className="nav-link">
                🔥 Welcome to MeitY!
              </Link>
            )}
          </div>
          <div>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Link to="/" className="profile">
                <img src={userAvatar} alt="User Avatar" />
                <div>
                  <p>{name}</p>
                  <p>
                    {userType} <GoChevronDown />
                  </p>
                </div>
              </Link>
            </Dropdown>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Navbar;
