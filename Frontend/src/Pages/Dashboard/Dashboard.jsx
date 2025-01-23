import { useState, useContext, useEffect } from "react";
import "./dashboard.css";
import logo from "../../assets/logo.svg";
import { Plus, Mic, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../Components/ui/dialog";
import Modal from "../../Components/Modal/Modal";
import { UserContext } from "../../Context/userContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [showMoreBots, setShowMoreBots] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = localStorage.getItem("userId");
  const { fetchUser } = useContext(UserContext);

  useEffect(() => {
    fetchUser(id);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const bots = [
    {
      id: 1,
      name: "Assistant",
      icon: "https://qph.cf2.poecdn.net/main-thumb-pb-3002-200-vcmrcgoloaktppabmdfsgeczaixswmxt.jpeg",
      color: "bg-green-500",
      iconBg: "bg-violet-500",
    },
  ];

  const visibleBots = bots.slice(0, 3);
  const moreBots = bots.slice(3);

  const BotButton = ({ bot }) => (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${bot.color}  hover:opacity-90 shadow-sm`}>
      {typeof bot.icon === "string" && bot.icon.startsWith("http") ? (
        <img src={bot.icon} alt="" className="w-5 h-5 rounded" />
      ) : (
        <div
          className={`w-5 h-5 rounded flex items-center justify-center text-white ${bot.iconBg}`}>
          {bot.icon}
        </div>
      )}
      <span className="text-sm font-medium text-gray-700">{bot.name}</span>
    </button>
  );

  const hasMoreBots = moreBots.length > 0;
  return (
    <section className="min-h-screen dark:bg-[#242424] flex flex-col items-center px-6 py-8">
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <div className="h-12"></div>
      <div className="h-11"></div>
      <div className="h-10"></div>
      <div className="flex items-center justify-center gap-4 mt-18 mb-9">
        <img src={logo} alt="Logo" className="h-24 mt-4 mb-4" />
        <span className="dark:text-white text-xl font-semibold">
          Everything AI
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-7">
        {visibleBots.map((bot, index) => (
          <BotButton
            key={index}
            bot={{
              ...bot,
              color: "bg-gray-50 rounded-full border border-black px-4 py-2",
              iconBg: "bg-blue-500",
            }}
          />
        ))}
        <button
          onClick={() => hasMoreBots && setShowMoreBots(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:opacity-90 shadow-sm">
          <span className="w-5 h-5 flex items-center justify-center">⚡</span>
          <span className="text-sm font-medium text-gray-700">
            {hasMoreBots ? "More" : "Coming soon"}
          </span>
        </button>
        <button className="dashboard-btn" onClick={openModal}>
          More
        </button>
      </div>

      {/* Keep the Dialog component for when there are more bots */}
      {hasMoreBots && (
        <Dialog open={showMoreBots} onOpenChange={setShowMoreBots}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>More Bots</DialogTitle>
            </DialogHeader>
            <div className="grid gap-2">
              {moreBots.map((bot, index) => (
                <BotButton key={index} bot={bot} />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}

      <div className="w-full max-w-2xl mb-9">
        <div className="relative flex items-center bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
          <button className="p-7 hover:bg-gray-100 rounded-l-2xl transition-colors">
            <Plus className="w-5 h-5 text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="Start a new chat"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 bg-transparent py-4 text-base text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button className="p-4 hover:bg-gray-100 transition-colors">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-4 hover:bg-gray-100 rounded-r-2xl transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="h-8"></div>

      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-white">Official bots</h2>
          <div className="flex gap-2">
            {/*(if there are more than 9 bots)<button className="text-sm text-violet-600 hover:underline">See all</button>
            <div className="flex gap-1">
              <button
                onClick={() => handleSlideChange('prev')}
                className={`p-1 rounded hover:bg-gray-100 ${currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'}`}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSlideChange('next')}
                className={`p-1 rounded hover:bg-gray-100 ${currentSlide >= Math.ceil(bots.length / 6) - 1 ? 'text-gray-300' : 'text-gray-600'}`}
                disabled={currentSlide >= Math.ceil(bots.length / 6) - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {bots
            .slice(currentSlide * 6, currentSlide * 6 + 6)
            .map((bot, index) => (
              <>
                <Link key={index} to={"/chatbot"}>
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer ">
                    {typeof bot.icon === "string" &&
                    bot.icon.startsWith("http") ? (
                      <img
                        src={bot.icon}
                        alt=""
                        className="w-12 h-12 rounded-xl"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-lg font-medium">
                        {bot.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium dark:text-white">
                        {bot.name}
                      </h3>
                      <p className="text-sm dark:text-white">Official</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
        </div>
      </div>

      <Dialog open={showMoreBots} onOpenChange={setShowMoreBots}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>More Bots</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            {moreBots.map((bot, index) => (
              <BotButton key={index} bot={bot} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Dashboard;
