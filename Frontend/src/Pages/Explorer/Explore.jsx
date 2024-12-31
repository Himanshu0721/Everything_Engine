import { Search } from "lucide-react";
import { useState } from "react";

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState([]);
  const filters = [
    "Official",
    "Audio and video",
    "Featured",
    "Roleplay",
    "Text analysis",
    "Utilities",
    "Hobbies",
    "Funny",
    "Image generation",
    "Popular",
    "New",
    "Professional",
    "Translation",
    "Learning",
    "Games",
    "Programming",
  ];

  const bots = [
    {
      id: 1,
      name: "Assistant",
      description:
        "General-purpose assistant bot. For queries requiring up-to-date information, it can access real-time data from the web for more accurate answers. Assistant can also generate images using FLUX-schnell",
      icon: "https://qph.cf2.poecdn.net/main-thumb-pb-3002-200-vcmrcgoloaktppabmdfsgeczaixswmxt.jpeg",
      isOfficial: true,
    },
    {
      id: 2,
      name: "Web-Search",
      description:
        "Web-enabled assistant bot that searches the internet to inform its responses. Particularly good for queries regarding up-to-date information or specific facts. Powered by GPT 4o Mini.",
      icon: "https://qph.cf2.poecdn.net/main-thumb-pb-2254704-200-qzclbtuxtlnlkgqjjcfqfziyxncqehra.jpeg",
      isOfficial: true,
    },
    {
      id: 3,
      name: "Claude-3.5-Sonnet",
      description:
        "Anthropic's Claude 3.5 Sonnet using the October 22, 2024 model snapshot. Excels in complex tasks like coding, writing, analysis and visual processing.",
      icon: "https://qph.cf2.poecdn.net/main-thumb-pb-1019-200-ecyfizaydihfkxfwhwjlruyjdyoxengr.jpeg",
      isOfficial: true,
    },
  ];

  const toggleFilter = (filter) => {
    setActiveFilter((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <main className="flex-1 px-4 py-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full rounded-lg border border-gray-200 pl-10 py-2 outline-none focus:border-gray-400"
                placeholder="Search for bots or people"
                type="search"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-1 rounded-full text-sm transition-colors ${
                    activeFilter.includes(filter)
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              {bots.map((bot) => (
                <div
                  key={bot.id}
                  className="flex items-start gap-4 rounded-lg border p-4 hover:border-gray-300"
                >
                  <img
                    src={bot.icon}
                    alt={`${bot.name} icon`}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{bot.name}</h3>
                      {bot.isOfficial && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium">
                          OFFICIAL
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{bot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
