import React, { useState } from 'react';
import { LineChart } from 'lucide-react';
import logo from "../../assets/logo.svg";

// FAQ component remains the same
const FAQ = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-3">
    <button onClick={onClick} className="flex justify-between items-center w-full text-left">
      <span className="text-sm sm:text-base lg:text-lg pr-4">{question}</span>
      <span className={`text-lg sm:text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>+</span>
    </button>
    {isOpen && (
      <div className="mt-2 text-gray-600 text-sm lg:text-base pr-4">
        {answer}
      </div>
    )}
  </div>
);

const AboutPage = () => {
  // State and data declarations remain the same
  const [openFAQs, setOpenFAQs] = useState({});

  const popularBots = [
    { 
      name: 'Assistant',
      icon: <LineChart className="w-6 h-6 text-purple-600" />,
      image: "https://qph.cf2.poecdn.net/main-thumb-pb-3002-200-vcmrcgoloaktppabmdfsgeczaixswmxt.jpeg"
    }
  ];

  const features = [
    {
      title: 'The best AI all in one place',
      description: 'Access to Gemini, Claude, ChatGPT, and many more AI models in a single platform',
      image: "https://i.ibb.co/HHwpFpH/Screenshot-2025-01-07-110146.png"
    },
    {
      title: 'Generate stunning images',
      description: 'Create beautiful artwork and illustrations using state-of-art AI models',
      image: "https://i.ibb.co/x3scFwp/Screenshot-2025-01-07-110002.png"
    },
    {
      title: 'AI-powered web search',
      description: 'Get accurate answers with citations from across the web',
      image: "https://i.ibb.co/SQHtGL6/Screenshot-2025-01-07-105812.png"
    }
  ];

  const faqs = [
    { 
      question: 'What is Everything AI?', 
      answer: 'Everything AI is a comprehensive platform offering AI-powered tools and bots to enhance productivity, automate tasks, and improve decision-making.' 
    },
    { 
      question: 'How much does it cost?', 
      answer: 'The cost varies depending on the subscription plan. We offer free, standard, and premium plans to suit different needs. Contact us for detailed pricing.' 
    },
    { 
      question: 'How often are new bots added?', 
      answer: 'New bots are added regularly, with updates typically rolled out every week to keep the platform innovative and useful.' 
    },
    { 
      question: 'Is Everything AI easy to use for beginners?', 
      answer: 'Yes, Everything AI is designed with an intuitive interface and detailed guides, making it accessible and easy to use for beginners.' 
    },
    { 
      question: 'Where can I use it?', 
      answer: 'Everything AI can be used across various industries, including education, healthcare, marketing, customer support, and more. It is compatible with web and mobile platforms.' 
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modified Hero Section with centered text */}
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="flex flex-col items-center gap-6 lg:gap-12">
            <div className="w-full max-w-md">
              <img 
                src={logo}
                alt="Stack of AI apps"
                className="w-full h-auto max-h-48 lg:max-h-64 rounded-lg object-contain"
              />
            </div>
            <div className="w-full max-w-2xl text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                The best AI,<br />all in one place
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 mx-auto">
                Access the world's most powerful AI models in a single platform
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition-colors">
                Sign up free
              </button>
            </div>
          </div>
        </div>

         {/* Popular Bots */}
         <div className="py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl mb-4 text-center">Explore popular bots</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {popularBots.map((bot, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-2 overflow-hidden">
                  {bot.image ? (
                    <img
                      src={bot.image}
                      alt={bot.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    bot.icon
                  )}
                </div>
                <span className="text-xs sm:text-sm text-center">{bot.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8">
            Unlock the potential of AI with Everything AI
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-4 rounded-xl bg-indigo-600 text-white">
                {feature.image && (
                  <div className="h-32 sm:h-40 -mx-4 -mt-4 mb-4">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-indigo-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Platform Section */}
        <div className="py-8 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <img 
                src="https://i.ibb.co/sjb2ccR/Screenshot-2025-01-07-101553.png" 
                alt="Multi-device preview" 
                className="rounded-lg shadow-lg w-full object-cover" 
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Your chat synced across all devices</h2>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm sm:text-base">
                Get the Everything AI App
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section - Now with max height and scrolling */}
        <div className="py-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="max-h-96 overflow-y-auto pr-2 space-y-2">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQs[index]}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        {/* Footer - Now with condensed layout */}
        <footer className="border-t border-gray-200 py-4 sm:py-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Everything AI Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-base sm:text-lg font-semibold">Everything AI</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <span className="cursor-pointer hover:text-indigo-600">Company</span>
              <span className="cursor-pointer hover:text-indigo-600">Policy</span>
              <span className="cursor-pointer hover:text-indigo-600">Resources</span>
              <span className="cursor-pointer hover:text-indigo-600">Social</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;

