import { useContext, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SiChakraui } from "react-icons/si";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "@/Context/userContext";
import { toast } from "react-toastify";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [points, setPoints] = useState(10);
  const navigate = useNavigate();
  const [phoneNo, setPhoneNo] = useState();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setPoints(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setPhoneNo(e.target.value);
  };
  const handelLogOut = () => {
    localStorage.removeItem("userToken");
    toast.success("log out success");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="bg-[#f3f3f5] dark:bg-[#242424] dark:text-white dark:border-[#313535] h-[4.55rem] border-2 border-gray-200">
        <div className="text-2xl font-bold my-5 lg:mx-[50%] md:mx-[45%] mx-[40%]">
          Settings
        </div>
      </div>
      <div className="mt-10 lg:px-28 md:px-24 px-6">
        <div className="text-sm text-[#5d6565] dark:text-[#a5acac]">
          Compute points
        </div>
        <div className="bg-[#f7f7f7] dark:bg-[#242424] px-5 py-3.5 rounded-2xl mt-2">
          <div className="text-lg font-semibold dark:text-white">
            Remaining points
          </div>
          <div className="flex gap-1.5 items-center my-0.5">
            <div className="text-lg dark:text-white">300</div>
            <div className="dark:text-white">
              <SiChakraui />
            </div>
          </div>
          <div className="text-[#8d9696] dark:text-[#737d7d] text-sm">
            Resets to 300 in 10:07:55
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-1.5 items-center">
                <div className="lg:text-lg md:text-lg text-md font-semibold dark:text-white">
                  Global per-message budget
                </div>
                <div className="mt-1 dark:text-white">
                  <IoMdInformationCircleOutline />
                </div>
              </div>
              <div className="flex gap-1.5 items-center my-0.5">
                <div className="text-lg dark:text-white">{points}</div>
                <div className="dark:text-white">
                  <SiChakraui />
                </div>
              </div>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="text-md font-medium bg-[#e4e7e7] dark:bg-[#464e4e] dark:text-white py-1.5 px-4 rounded-3xl cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-500">
              Edit
            </div>
          </div>
          <div className="text-[#8d9696] dark:text-[#737d7d] text-sm">
            Applies to all chats.
          </div>
        </div>
      </div>
      <div className="mt-3 lg:px-28 md:px-24 px-6">
        <div className="text-sm text-[#5d6565] dark:text-[#a5acac]">Email</div>
        <div className="bg-[#f7f7f7] dark:bg-[#242424] px-5 py-3.5 rounded-2xl mt-2">
          <div className="text-lg font-normal dark:text-white">
            {user.user.email}
          </div>
          <div className="text-[#8d9696] dark:text-[#737d7d] text-sm">
            Primary email
          </div>
        </div>
      </div>
      <div className="mt-3 lg:px-28 md:px-24 px-6">
        <div className="text-sm text-[#5d6565] dark:text-[#a5acac]">
          Phone number
        </div>
        <div className="bg-[#f7f7f7] dark:bg-[#242424] px-5 py-3.5 rounded-2xl mt-2">
          <div className="text-lg font-normal dark:text-white">
            +91 {user.user.number}
          </div>
          <div
            onClick={() => setOpen2(true)}
            className="text-[#3b3abe] dark:text-[#9494fa] text-sm cursor-pointer">
            Change phone number
          </div>
        </div>
      </div>
      <div className="mt-3 lg:px-28 md:px-24 px-6">
        <div className="text-sm text-[#5d6565] dark:text-[#a5acac]">
          Device Settings
        </div>
        <div className="bg-[#f7f7f7] dark:bg-[#242424] px-5 py-3.5 rounded-2xl mt-2">
          <div className="text-lg font-bold dark:text-white">Appearance</div>
          <fieldset className="my-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                className="mb-1"
                name="theme"
                value="light"
                checked={theme === "light"}
                onChange={() => toggleTheme("light")}
              />
              <label
                htmlFor="theme"
                className="text-lg font-normal text-black dark:text-white whitespace-nowrap">
                Light theme
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                className="mb-1 dark:bg-transparent"
                name="theme"
                value="dark"
                checked={theme === "dark"}
                onChange={() => toggleTheme("dark")}
              />
              <label
                htmlFor="theme"
                className="text-lg font-normal text-black dark:text-white whitespace-nowrap">
                Dark theme
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="mt-3 lg:px-28 md:px-24 px-6">
        <div className="bg-[#f7f7f7] dark:bg-[#242424] px-5 py-3.5 rounded-2xl my-2">
          <Link to={"/about"}>
            <div className="text-lg text-[#3b3abe] dark:text-[#9494fa] my-1.5">
              About
            </div>
          </Link>
          <hr />
          <Link to={"/privacy-policy"}>
            <div className="text-lg text-[#3b3abe] dark:text-[#9494fa] my-1.5">
              Privacy policy
            </div>
          </Link>
          <hr />
          <Link to={"/term-condition"}>
            <div className="text-lg text-[#3b3abe] dark:text-[#9494fa] my-1.5">
              Terms of service
            </div>
          </Link>
          <hr />
          <Link to={"/usage-guidlines"}>
            <div className="text-lg text-[#3b3abe] dark:text-[#9494fa] my-1.5">
              Usage guidlines
            </div>
          </Link>
          <hr />
          <Link to={"/contact-us"}>
            <div className="text-lg text-[#3b3abe] dark:text-[#9494fa] my-1.5">
              Contact us
            </div>
          </Link>
        </div>
      </div>
      <div onClick={handelLogOut} className="mt-3 lg:px-28 md:px-24 px-6">
        <div className="text-red-700 dark:text-[#e3567c] dark:hover:text-red-600 text-[1.15rem] cursor-pointer rounded-2xl">
          <div className="lg:mx-[43%] md:mx-[40%] mx-[35%] lg:w-[13%] md:w-[19%] w-[32%] hover:bg-[#f7f7f7] dark:hover:bg-[#464e4e] hover:rounded-3xl px-5 py-3.5">
            Log out
          </div>
        </div>
      </div>
      <Modal open={open} onclose={() => setOpen(false)}>
        <div className="bg-white dark:bg-[#181818] dark:border-[.5px] dark:border-gray-700 rounded-xl h-auto mt-5">
          <div className="text-xl font-bold pt-14 px-4 my-1 dark:text-white">
            Global per-message budget
          </div>
          <div className="text-md px-4 text-[#5d6565] dark:text-[#a5acac]">
            We will notify you when a message exceeds this cost. Applies to all
            chats. Edit budgets for specific chats in chat settings.
          </div>
          <div className="my-2.5 mx-4">
            <input
              type="text"
              name="points"
              value={points}
              onChange={handleChange}
              className="py-1.5 px-1.5 w-full border-2 rounded-xl dark:bg-[#181818] dark:text-white"
              placeholder={points}
            />
          </div>
          <div className="text-md px-4 text-[#8d9696] dark:text-[#737d7d]">
            points per message
          </div>
          <button
            onClick={() => setOpen(false)}
            className="bg-[#3b3abe] hover:bg-[#3b3aaa] text-white w-[94%] my-5 py-2.5 mx-4 rounded-xl mb-8">
            Save
          </button>
        </div>
      </Modal>
      <Modal open={open2} onclose={() => setOpen2(false)}>
        <div className="bg-white dark:bg-[#181818] dark:border-[.5px] dark:border-gray-700 rounded-xl h-auto mt-5">
          <div className="lg:text-xl md:text-lg text-lg font-bold pt-14 px-4 mb-5 lg:mx-[27%] md:mx-[28%] mx-[17%] dark:text-white">
            Change phone number
          </div>
          <div className="my-2.5 mx-4">
            <input
              type="text"
              name="phoneno"
              onChange={handleChangeNumber}
              className="py-2.5 px-1.5 w-[42%] mx-[29%] border-2 rounded-xl dark:bg-[#181818] dark:text-white"
              placeholder="Enter your Mobile No."
            />
          </div>
          <button
            onClick={() => setOpen2(false)}
            className="bg-[#3b3abe] hover:bg-[#3b3aaa] my-3 text-white w-[40%] py-3 mx-[30%] rounded-xl mb-10">
            Change number
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Settings;
