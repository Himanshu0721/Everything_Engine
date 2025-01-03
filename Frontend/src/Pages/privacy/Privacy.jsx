import React from 'react';

const Privacy = () => {
  
    return (
        <div className="privacy-container text-gray-800 w-auto items-center">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      
            <section className="mb-6">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700">Introduction</h2>
                <p className='text-gray-600'>
                    Welcome to our website. By using our services, you agree to these Terms and Conditions. Please read them carefully. If you disagree, please do not use our services. We are committed to protecting your privacy and safeguarding the personal information you share with us.        </p>
                <p className='text-gray-600'>
                    This Privacy Policy explains the types of personal data we collect, how we use it, and how we protect it. It applies to all users of our website and services, whether you're a guest or a registered user.        </p>
            </section>
      
            <section className="mb-6">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700">Acceptance of Terms</h2>
                <p className='text-gray-600'>
                    By using this website, you confirm that you agree to these terms and conditions. If you disagree with any part, you are not permitted to use our services. We may update these terms, and continued use of the site indicates your acceptance of any changes. Please review this page regularly to stay informed.        
                </p>
            </section>
      
            <section className="mb-6">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700">Intellectual Property Rights</h2>
                <p className='text-gray-600'>
                    All content provided on this website—including, but not limited to, text, graphics, images, logos, and designs—is the property of The Entrepreneurship Network (TEN) or its licensors. These materials are protected by intellectual property laws, including copyright laws, trademark laws, and international conventions. Any unauthorized use, reproduction, or distribution of these materials may result in legal action.
                </p>
            </section>
     
            <section className="mb-6">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700">Third-Party Links</h2>
                <p className='text-gray-600'>
                    This website may contain links to third-party websites for your convenience. These links do not signify our endorsement of the third-party websites, and we are not responsible for their content, policies, or practices. Users access third-party websites at their own risk.
                </p>
                <p className='text-gray-600'>
                    We encourage you to review the privacy policies and terms of service of any third-party sites you visit. 
                </p>
            </section>
      
            <section className="mb-6">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold mb-2 text-gray-700">Contact Information</h2>
                <p className='text-gray-600'>
                    For inquiries, questions, or concerns regarding these terms and conditions, please contact us: <a href="mailto:info@entrepreneurshipnetwork.net" className="text-blue-600">Click Here.</a>
                </p>
            </section>
        </div>
    );
};

export default Privacy;