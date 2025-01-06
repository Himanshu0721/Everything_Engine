import React from "react";

const Privacy = () => {
  return (
    <div className="privacy-container text-gray-800 dark:text-white w-auto items-center">
      <header className="text-center bg-gray-100 dark:bg-[#242424] m-0 p-5 text-2xl font-semibold">
        Privacy Policy
      </header>

      <div className="p-4">
        <section className="mb-6">
          <h2 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-500">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            Welcome to our website. By using our services, you agree to these
            Terms and Conditions. Please read them carefully. If you disagree,
            please do not use our services. We are committed to protecting your
            privacy and safeguarding the personal information you share with us.{" "}
          </p>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            This Privacy Policy explains the types of personal data we collect,
            how we use it, and how we protect it. It applies to all users of our
            website and services, whether you're a guest or a registered user.{" "}
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-500">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            By using this website, you confirm that you agree to these terms and
            conditions. If you disagree with any part, you are not permitted to
            use our services. We may update these terms, and continued use of
            the site indicates your acceptance of any changes. Please review
            this page regularly to stay informed.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-500">
            Intellectual Property Rights
          </h2>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            All content provided on this website—including, but not limited to,
            text, graphics, images, logos, and designs—is the property of The
            Entrepreneurship Network (TEN) or its licensors. These materials are
            protected by intellectual property laws, including copyright laws,
            trademark laws, and international conventions. Any unauthorized use,
            reproduction, or distribution of these materials may result in legal
            action.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-500">
            Third-Party Links
          </h2>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            This website may contain links to third-party websites for your
            convenience. These links do not signify our endorsement of the
            third-party websites, and we are not responsible for their content,
            policies, or practices. Users access third-party websites at their
            own risk.
          </p>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            We encourage you to review the privacy policies and terms of service
            of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700 dark:text-gray-500">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-[#a5acac] text-base">
            For inquiries, questions, or concerns regarding these terms and
            conditions, please contact us:{" "}
            <a
              href="mailto:info@entrepreneurshipnetwork.net"
              className="text-[#5d5cde]"
            >
              Click Here.
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
