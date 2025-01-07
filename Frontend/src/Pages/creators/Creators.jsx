import React, { useState } from "react";
import creators from "../../assets/creators.png";

const Creators = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="text-center bg-gray-100 dark:bg-[#242424] m-0 p-5 text-2xl font-semibold">
        Creators
      </header>
      <div className="flex flex-col items-center bg-white dark:bg-[#181818] min-h-screen p-6">
        {/* Text Section */}
        <div className="max-w-2xl w-full ">
          <p className="text-2xl font-bold mb-2 text-start dark:text-[#a5acac]">
            Join The Entrepreneurship Network's Creators Program
          </p>
          <p className="text-gray-600 text-base text-start dark:text-gray-500">
            Monetize your skills and earn as users engage with your content.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-6">
          <img
            src={creators}
            alt="Illustration"
            className="w-48 h-48 sm:w-42 sm:h-42 md:w-48 md:h-48 lg:w-48 lg:h-48"
          />
        </div>

        {/* Details Section */}
        <div className="bg-gray-100 dark:bg-[#242424] p-6 rounded-md max-w-2xl w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-start dark:text-white">
            Unlock Opportunities and Earn More
          </h2>
          <ul className="space-y-2 text-base text-gray-700 dark:text-white">
            <li className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full font-bold">
                1
              </div>
              <span>
                <strong>Apply:</strong> Click "Apply Now" to become part of our
                creator network.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full font-bold">
                2
              </div>
              <span>
                <strong>Set Goals:</strong> Define your objectives and customize
                your content strategy.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full font-bold">
                3
              </div>
              <span>
                <strong>Create:</strong> Develop engaging, impactful content
                that resonates with your audience.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full font-bold">
                4
              </div>
              <span>
                <strong>Promote:</strong> Share your content to expand your
                reach and impact.
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-7 h-7 bg-green-500 text-white rounded-full font-bold">
                5
              </div>
              <span>
                <strong>Earn:</strong> Generate revenue as your audience engages
                with your content and services.
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              onClick={toggleModal}
              className="bg-[#5d5cde] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Apply Now →
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-start dark:text-[#a5acac]">
            By clicking "Apply Now," you agree to The Entrepreneurship Network's{" "}
            <a href="/term-condition" className="text-[#5d5cde]">
              Terms of Service
            </a>
            . Discover more about our{" "}
            <a href="#" className="text-[#5d5cde]">
              programs and opportunities
            </a>
            .
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-80 sm:w-96 md:w-110 p-6">
              <div className="flex justify-end">
                <button onClick={toggleModal} className="text-gray-500 text-xl">
                  &times;
                </button>
              </div>
              <h1 className="text-xl font-bold mb-4 text-start mt-0">
                Creator Monetization
              </h1>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-base font-semibold mb-2 mt-6 "
                    htmlFor="country"
                  >
                    Select your country of residence:
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full sm:w-80 p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Country</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Belgium">Belgium</option>
                    <option value="China">China</option>
                    <option value="Greece">Greece</option>
                    <option value="Honduras">Honduras</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Japan">Japan</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                  <p className="mt-6">
                    You will be unable to receive payments if you select a
                    country where you don't file taxes.
                  </p>
                </div>
                <div className="flex justify-start mt-6">
                  <button
                    type="submit"
                    className="bg-[#5d5cde] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Creators;
