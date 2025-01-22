import { Link } from "react-router-dom";
const bots = [
  {
    id: 1,
    name: "Assistant",
    description:
      "General-purpose assistant bot. For queries requiring up-to-date information, it can access real-time data from the web for more accurate answers. Assistant can also generate images using FLUX-schnell",
    icon: "https://qph.cf2.poecdn.net/main-thumb-pb-3002-200-vcmrcgoloaktppabmdfsgeczaixswmxt.jpeg",
    isOfficial: true,
  },
];
const TenBot = () => {
  return (
    <>
      <div className="py-5 px-3">
        <div className="grid gap-6 p-3 mt-1 md:mt-4 md:pt-2 sm:mt-4 sm:pt-3">
          { bots.map((bot) => (
            <div
              key={ bot.id }
              className="flex items-center gap-4 rounded-lg border p-4 hover:border-gray-300">
              <Link to={ `/chatbot` } className="flex items-center  gap-4">
                <img
                  src={ bot.icon }
                  alt={ `${bot.name} icon` }
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0 ">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg mt-5 truncate">
                      { bot.name }
                    </h3>
                    { bot.isOfficial && (
                      <span className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 whitespace-nowrap">
                        OFFICIAL
                      </span>
                    ) }
                  </div>
                  <p className="text-sm text-gray-600 dark:text-[#a5acac] line-clamp-2">
                    { bot.description }
                  </p>
                </div>
              </Link>
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default TenBot;
