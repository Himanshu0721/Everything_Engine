import React from "react";

const TermCondition = () => {
    return (
        <div className="terms-container p-6 text-gray-800 w-[85%]">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            <p className="mb-4">
                Welcome to{" "}<span className="font-semibold">The Entrepreneurship Network</span>{" "} ("TEN"). By using our platform and services, you agree to abide by the following terms and conditions ("Terms").
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">1. A Platform for Empowerment</h2>
            <p className="mb-4">
                TEN is a platform that fosters entrepreneurship by offering resources, guidance, and tools for innovation. Our platform allows users to access services such as interactive workshops, mentorship programs, networking opportunities, and educational content.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">2. Age Requirements</h2>
            <p className="mb-4">
                Use of TEN by anyone under 13 years of age is prohibited. You represent that you are at least the age of majority in your jurisdiction or, if not, your parent or legal guardian has agreed to these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">3. Your Content and Contributions</h2>
            <p className="mb-4">
                You retain ownership of your content but grant TEN a non-exclusive, royalty-free license to use your contributions for platform improvement and promotion.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">4. Privacy</h2>
            <p className="mb-4">
                TEN respects your privacy and handles your data as outlined in our{" "} <span className="underline">Privacy Policy</span>. We collect and use personal information to improve the platform and its services.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">5. Disclaimers and Limitation of Liability</h2>
            <p className="mb-4">
                TEN services are provided "AS IS" without warranties of any kind. TEN’s liability for claims or damages is limited to the amount paid by you for accessing our services in the past 12 months.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">6. Termination</h2>
            <p className="mb-4">
                You may terminate your use of TEN’s services at any time. TEN also reserves the right to terminate or suspend your access for violations of these Terms.
            </p>
        </div>
    );
};

export default TermCondition;
