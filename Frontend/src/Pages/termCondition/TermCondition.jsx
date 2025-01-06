import React from "react";

const TermCondition = () => {
  return (
    <div className="terms-container text-gray-800 dark:text-white w-auto">
      <header className="text-center bg-gray-100 dark:bg-[#242424] m-0 p-5 text-2xl font-semibold">
        Terms and Conditions
      </header>{" "}
      <div className="p-6">
        <p className="mb-6 text-gray-600 dark:text-[#a5acac] text-base">
          Welcome to{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-500">
            The Entrepreneurship Network ("TEN")
          </span>
          . By using our platform and services, you agree to abide by the
          following terms and conditions ("Terms").
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          1. A Platform for Empowerment
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          TEN is a platform that fosters entrepreneurship by offering resources,
          guidance, and tools for innovation. Our platform allows users to
          access services such as interactive workshops, mentorship programs,
          networking opportunities, and educational content.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          2. Age Requirements
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          Use of TEN by anyone under 13 years of age is prohibited. You
          represent that you are at least the age of majority in your
          jurisdiction or, if not, your parent or legal guardian has agreed to
          these Terms.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          3. Your Content and Contributions
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          You retain ownership of your content but grant TEN a non-exclusive,
          royalty-free license to use your contributions for platform
          improvement and promotion.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          4. Privacy
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          TEN respects your privacy and handles your data as outlined in our{" "}
          <a href="privacy-policy" className="text-[#5d5cde]">
            Privacy-Policy
          </a>
          . We collect and use personal information to improve the platform and
          its services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          5. Disclaimers and Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          TEN services are provided "AS IS" without warranties of any kind.
          TEN’s liability for claims or damages is limited to the amount paid by
          you for accessing our services in the past 12 months.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-500">
          6. Termination
        </h2>
        <p className="mb-4 text-gray-600 dark:text-[#a5acac] text-base">
          You may terminate your use of TEN’s services at any time. TEN also
          reserves the right to terminate or suspend your access for violations
          of these Terms.
        </p>
      </div>
    </div>
  );
};

export default TermCondition;
