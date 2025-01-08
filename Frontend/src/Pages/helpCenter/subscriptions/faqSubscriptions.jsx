import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import HelpCenterLayout from "../HelpCenterLayout";

const FaqSubscriptions = () => {
  return (
    <HelpCenterLayout>
      {/* Breadcrumb and Search */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Breadcrumb */}
          <nav className="text-sm">
            <div className="flex items-center gap-2">
              <Link
                to="/help-center"
                className="text-blue-600 dark:text-purple-600 hover:text-blue-700 dark:text-purple-600 dark:hover:text-purple-700"
              >
                Help Center
              </Link>
              <span className="text-gray-500">&gt;</span>
              <Link
                to="/help-center/subscriptions"
                className="text-blue-600 dark:text-purple-600 hover:text-blue-700 dark:text-purple-600 dark:hover:text-purple-700"
              >
                Subscriptions
              </Link>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-600 dark:text-[#a5acac]">FAQs</span>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 dark:bg-[#242424] focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h1 className="text-4xl font-bold mb-4 dark:text-[#a5acac]">
          TEN - Everything AI Subscriptions FAQs
        </h1>

        <div className="text-sm text-gray-600 mb-8 dark:text-[#a5acac]">14 days ago · Updated</div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What are the benefits of subscribing to TEN - Everything AI?
            </h2>
            <p className="text-lg dark:text-white">
              As a TEN - Everything AI subscriber, you can:
            </p>
            <ul>
              <li style={{ marginBottom: "8px" }}>
                Enjoy exclusive access to bots like OpenAI’s o1-preview,
                Runway’s Gen-3 Alpha Turbo, and many more.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Send far more messages than free users.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Generate images, video, and audio with state-of-the-art bots
                from Runway, Pika, ElevenLabs, Ideogram, Black Forest Labs, and
                more.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Unlock each bot’s maximum input size and chat history - up to 2M
                tokens (equivalent to 1,400,000 words).
              </li>
            </ul>
            <p className="text-lg dark:text-white">
              Compute points reset on a regular basis (daily or monthly) from
              when you purchased your TEN - Everything AI Subscription. Unused
              compute points do not roll over. You can check your remaining
              compute points at any time by visiting the 'Settings' page. Learn
              more about compute points in the&nbsp;
              <a
                href="/hc/en-us/articles/19944206309524"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEN - Everything AI FAQs page
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How do I subscribe to TEN - Everything AI?
            </h2>
            <p className="text-lg dark:text-white">
              If you want to start enjoying the subscription benefits of TEN -
              Everything AI, you can sign up for a monthly or annual
              subscription.
            </p>
            <p className="text-lg dark:text-white">On web:</p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                <span className="text-gray-800 dark:text-[#a5acac] dark:text-white hover:opacity-80">
                  After signing in, click on “Subscribe” on the left sidebar.
                  Select your preferred plan. Read ‘What’s included?’ for
                  additional details.{" "}
                </span>
              </li>
              <li style={{ marginBottom: "8px" }}>
                Once you make your selection, you will be redirected to our 3rd
                party payment processor, Stripe, in order to add your payment
                information and complete the subscription process.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You can manage your subscription at any time by visiting
                “Settings“.
              </li>
            </ol>
            <p className="text-lg dark:text-white">On iOS:</p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                After signing in, tap on the hamburger icon on the top left of
                the screen to open the app sidebar, then tap on “Subscribe”.
                Choose your preferred plan. Tap on “Subscribe to TEN -
                Everything AI”.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You might be asked to sign in with your Apple ID in order to
                complete the subscription process.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You can manage your subscription at any time by visiting
                “Settings” in the TEN - Everything AI app.
              </li>
            </ol>
            <p className="text-lg dark:text-white">On Android:</p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                After signing in, tap on the hamburger icon on the top left of
                the screen to open the app sidebar, then tap on “Subscribe”.
                Choose your preferred plan. Tap on “Subscribe to TEN -
                Everything AI”.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You might be asked to sign in with your Google account in order
                to complete the subscription process.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You can manage your subscription at any time by visiting
                “Settings” in the TEN - Everything AI app.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How do I upgrade my subscription?
            </h2>
            <p className="text-lg dark:text-white">
              You can upgrade your existing subscription to get even more value:
            </p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                On web, click on “Upgrade” on the left sidebar. On iOS or
                Android, tap on the hamburger icon on the top left of the
                screen, then tap on “Upgrade”.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Select your preferred plan, and proceed.
              </li>
              <li style={{ marginBottom: "8px" }}>
                On web, you will be redirected to our third-party payment
                processor to provide your payment information and complete the
                upgrade process. On iOS you might be asked to first sign in with
                your Apple ID. On Android, you might be asked to sign in with
                your Google account.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Upgrade or manage your subscription at any time in TEN -
                Everything AI by visiting “Settings”.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Why can't I upgrade my subscription?
            </h2>
            <p className="text-lg dark:text-white">
              If you are already a subscriber, there are two primary reasons you
              can’t upgrade.
            </p>
            <p className="text-lg dark:text-white">
              First, you can only upgrade if a larger or longer subscription
              plan exists on your platform. TEN - Everything AI has subscription
              options in the Apple store, Google Play store, and TEN -
              Everything AI website. The most diverse subscription options are
              on TEN - Everything AI’s website.
            </p>
            <p className="text-lg dark:text-white">
              Second, you can only upgrade on the platform where you bought your
              active subscription. If you subscribed on the iOS or Android app,
              your subscription is managed through either Apple or Google only.
              If you subscribed on TEN - Everything AI’s website, you can only
              manage your subscription on the TEN - Everything AI website. To
              upgrade on a different platform than where you purchased your
              current subscription, you'll need to cancel your current
              subscription where you purchased it (e.g. in TEN - Everything AI’s
              phone App) and resubscribe on a new platform (e.g. TEN -
              Everything AI’s website).
            </p>
            <p className="text-lg dark:text-white">To upgrade on the same platform:</p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                Open ‘Settings’ in TEN - Everything AI.
              </li>
              <li style={{ marginBottom: "8px" }}>
                In the ‘Subscription’ section, click the “Upgrade” button.
                <ol class="list-decimal pl-6 mb-4">
                  <li style={{ marginBottom: "8px" }}>
                    If you do not see an “Upgrade” button:
                    <ol class="list-decimal pl-6 mb-4">
                      <li style={{ marginBottom: "8px" }}>
                        If it says you are subscribed on a different platform,
                        go to that platform and repeat these steps
                      </li>
                      <li style={{ marginBottom: "8px" }}>
                        Otherwise, you are on the right platform but no further
                        upgrades are available on this platform
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: "8px" }}>
                Follow the prompts to complete your upgrade.
              </li>
            </ol>
            <p className="text-lg dark:text-white">To upgrade on a different platform:</p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                Cancel your current subscription
                <ol class="list-decimal pl-6 mb-4">
                  <li style={{ marginBottom: "8px" }}>
                    Open ‘Settings’ in TEN - Everything AI.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Click on ‘Manage your subscription’. Keep clicking cancel
                    and follow the prompts until you see confirmation that the
                    subscription is cancelled.
                    <ol class="list-decimal pl-6 mb-4">
                      <li style={{ marginBottom: "8px" }}>
                        If you do not see the ‘Manage your subscription’ option,
                        it will say what platform you need to go to. Go there
                        and repeat these steps.
                      </li>
                    </ol>
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Return to ‘Settings’ and confirm that the ‘Subscription’
                    section says your subscription is cancelled and that
                    benefits will terminate at the end of this billing cycle.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: "8px" }}>
                Re-subscribe on the platform of your choice
                <ol class="list-decimal pl-6 mb-4">
                  <li style={{ marginBottom: "8px" }}>
                    Open ‘Settings’ in the TEN - Everything AI website, TEN -
                    Everything AI iOS app, or TEN - Everything AI Android app.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Click “Subscribe to TEN - Everything AI”
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Follow the prompts until you see confirmation that you have
                    subscribed.
                  </li>
                  <li style={{ marginBottom: "8px" }}>
                    Return to ‘Settings’ and confirm that the ‘Subscription’
                    section says the subscription you just purchased.
                  </li>
                </ol>
              </li>
              <li style={{ marginBottom: "8px" }}>
                Enjoy your upgraded subscription
                <ol class="list-decimal pl-6 mb-4">
                  <li style={{ marginBottom: "8px" }}>
                    We want your upgrades to be smooth. If you upgrade on the{" "}
                    <a href="http://TEN - Everything AI.com">
                      TEN - Everything AI.com
                    </a>{" "}
                    website after canceling on an App but before your
                    subscription benefits expire, we will automatically
                    calculate and refund remaining points. Subscriptions already
                    refunded by Apple or Google do not count as remaining.
                  </li>
                </ol>
              </li>
            </ol>
            <p className="text-lg dark:text-white">
              During all of this, rest assured you will maintain subscription
              access until the end of your current billing period, even after
              cancellation. Also, your account data, including chat history and
              settings, will remain intact.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How do I cancel my subscription?
            </h2>
            <p className="text-lg dark:text-white">We’re sorry to see you go!</p>
            <p className="text-lg dark:text-white">
              You may cancel you Subscription through your TEN - Everything AI
              account settings at any time. The cancellation will take effect at
              the end of the Free Trial or the current billing cycle
              (“Cancellation Effective Date”). You are responsible for all
              subscription fees (plus any applicable taxes or charges) incurred
              before your Cancellation Effective Date. You will have access to
              your subscription benefits until that date.
            </p>
            <p className="text-lg dark:text-white">
              If you subscribed via TEN - Everything AI web, you can cancel it
              from your “
              <a
                href="https://TEN - Everything AI.com/settings"
                target="_blank"
                rel="noopener noreferrer"
              >
                Settings
              </a>
              ” page.
            </p>
            <p className="text-lg dark:text-white">
              If you subscribed via Apple store (iOS app), you can cancel your
              subscription by following these steps:
            </p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                Go to the “Settings” app on your iOS device
              </li>
              <li style={{ marginBottom: "8px" }}>Tap on your name</li>
              <li style={{ marginBottom: "8px" }}>Tap on “Subscriptions”</li>
              <li style={{ marginBottom: "8px" }}>
                Locate your TEN - Everything AI subscription and open it
              </li>
              <li style={{ marginBottom: "8px" }}>
                Scroll down and tap on the “Cancel Subscription” button
              </li>
            </ol>
            <p className="text-lg dark:text-white">
              If you subscribed via Google store (Android app), you can cancel
              your subscription by following these steps:
            </p>
            <ol class="list-decimal pl-6 mb-4">
              <li style={{ marginBottom: "8px" }}>
                Go to the “Play Store” app on your Android device
              </li>
              <li style={{ marginBottom: "8px" }}>
                Tap on your profile icon on the top right
              </li>
              <li style={{ marginBottom: "8px" }}>
                Tap on “Payments &amp; subscriptions”
              </li>
              <li style={{ marginBottom: "8px" }}>Tap on “Subscriptions”</li>
              <li style={{ marginBottom: "8px" }}>
                Locate your TEN - Everything AI app subscription and open it
              </li>
              <li style={{ marginBottom: "8px" }}>
                Tap on “Cancel subscription” at the bottom and choose a reason
              </li>
              <li style={{ marginBottom: "8px" }}>
                Confirm my tapping the “Cancel subscription” button
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How do I request a refund?
            </h2>
            <p className="text-lg dark:text-white">
              Other than what is set forth in our{" "}
              <a
                href="https://help.quora.com/hc/en-us/articles/4404208557588-Subscriptions-Refund-Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Refund Policy
              </a>{" "}
              or is determined by Quora, TEN - Everything AI subscription fees
              and other final charges are non-refundable.
            </p>
            <p className="text-lg dark:text-white">
              If you subscribed via a web browser and you are eligible for a
              refund according to our Refund Policy, you may contact us{" "}
              <a
                href="https://help.TEN - Everything AI.com/hc/en-us/requests/new?ticket_form_id=17272099607444"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to request it. Make sure you provide the email address associated
              with the subscription when you fill out the form.
            </p>
            <p className="text-lg dark:text-white">
              If you subscribed via Apple or Google Play, please contact them to
              understand their refund policies. You can also read their
              documentation on refund requests:
            </p>
            <ul>
              <li style={{ marginBottom: "8px" }}>
                Apple App Store:{" "}
                <a href="https://support.apple.com/en-us/HT204084">
                  https://support.apple.com/en-us/HT204084
                </a>
              </li>
              <li style={{ marginBottom: "8px" }}>
                Google Play Store:{" "}
                <a href="https://support.google.com/googleplay/answer/2479637?hl=en">
                  https://support.google.com/googleplay/answer/2479637?hl=en
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What countries have subscriptions available?
            </h2>
            <p className="text-lg dark:text-white">
              We currently offer subscriptions to TEN - Everything AI in the
              following countries and platforms:
            </p>
            <table class="w-full border-collapse">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="px-8 py-5 text-left text-base font-semibold text-gray-800 dark:text-[#a5acac]">
                    Region
                  </th>
                  <th class="px-8 py-5 text-center text-base font-semibold text-gray-800 dark:text-[#a5acac]">
                    TEN - Everything AI.com Website
                  </th>
                  <th class="px-8 py-5 text-center text-base font-semibold text-gray-800 dark:text-[#a5acac]">
                    Apple's App Store
                  </th>
                  <th class="px-8 py-5 text-center text-base font-semibold text-gray-800 dark:text-[#a5acac]">
                    Google's Play Store
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">Albania</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Armenia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Australia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Austria</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Bahamas (The)</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Bahrain</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Barbados</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <p className="text-lg dark:text-white">
                      <span>Belarus</span>
                    </p>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Belgium</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Bosnia and Herzegovina</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Brazil</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Bulgaria</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Cambodia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Cameroon</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Canada</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Chile</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Colombia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Croatia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Cyprus</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Czechia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Denmark</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Egypt</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Estonia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Finland</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>France</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Georgia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Germany</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Ghana</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Greece</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Hong Kong</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Hungary</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Iceland</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>India</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Ireland</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Italy</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Japan</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Kazakhstan</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <p className="text-lg dark:text-white">
                      <span>Korea</span>
                    </p>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <p className="text-lg dark:text-white">
                      <span>Kosovo</span>
                    </p>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <p className="text-center">Yes</p>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Kyrgyz Republic</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Latvia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Lithuania</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Luxembourg</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Macao</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Malaysia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Malta</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Mexico</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Moldova</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Netherlands</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>New Zealand</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Nigeria</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Norway</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Oman</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Poland</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Portugal</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Puerto Rico</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Romania</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Saudi Arabia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Serbia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Singapore</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Slovak Republic</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Slovenia</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>South Africa</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Spain</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Sweden</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Switzerland</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Taiwan</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Tajikistan</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td className="text-center w-1/4">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Thailand</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Turkey</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Uganda</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td className="text-center w-1/4">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Ukraine</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>United Arab Emirates</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>United Kingdom</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>United States</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Uzbekistan</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Vietnam</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]">Yes</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td class="px-8 py-6 text-left text-gray-700 dark:text-[#a5acac]">
                    <span>Zimbabwe</span>
                  </td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                  <td className="text-center w-1/4">Yes</td>
                  <td class="px-8 py-6 text-center text-gray-700 dark:text-[#a5acac]"></td>
                </tr>
              </tbody>
            </table>
            <p className="text-lg dark:text-white">&nbsp;</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What is creator monetization?
            </h2>
            <p className="text-lg dark:text-white">
              The creator monetization program pays TEN - Everything AI bot
              creators for engaging users with their bots. There are currently
              two ways: set a price per message users send to a bot and/or earn
              per subscription a bot helps drive. To learn more, see{" "}
              <a href="https://help.TEN - Everything AI.com/hc/en-us/articles/21921312368020-TEN - Everything AI-Creator-Monetization-FAQs">
                the creator monetization FAQ
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Title intentionally left blank
            </h2>
          </section>
        </div>

        {/* Have more questions */}
        <div className="mt-12 text-center">
          <span className="text-gray-800 dark:text-[#a5acac]">Have more questions? </span>
          <Link
            to="/submit-request"
            className="text-blue-600 dark:text-purple-600 hover:text-blue-700"
          >
            Submit a request
          </Link>
        </div>
      </div>
    </HelpCenterLayout>
  );
};

export default FaqSubscriptions;
