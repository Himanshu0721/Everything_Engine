import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import HelpCenterLayout from "../HelpCenterLayout";

const FaqCreator = () => {
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
                className="text-blue-600 hover:text-blue-700"
              >
                Help Center
              </Link>
              <span className="text-gray-500">&gt;</span>
              <Link
                to="/help-center/creator-monetization"
                className="text-blue-600 hover:text-blue-700"
              >
                Creator Monetization
              </Link>
              <span className="text-gray-500">&gt;</span>
              <span className="text-gray-600">FAQs</span>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <h1 className="text-4xl font-bold mb-4">
          TEN - Everything AI Creator Monetization FAQs
        </h1>

        <div className="text-sm text-gray-600 mb-8">12 days ago · Updated</div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">What is creator monetization?</h2>
            <p className="text-lg">
              The creator monetization program pays TEN - Everything AI bot creators for
              engaging users with their bots. There are two ways: set a price
              per message sent to your bots, and/or earn per subscription your
              bots help drive.
            </p>
          </section>
         <section>
         <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How do I participate in creator monetization?
          </h2>
          <h3>Join the program</h3>
          <p className="text-lg">
            Visit{" "}
            <a
              href="https://TEN - Everything AI.com/creators"
              target="_blank"
              rel="noopener noreferrer"
            >
              TEN - Everything AI.com/creators
            </a>{" "}
            via a desktop web browser, or navigate to Creators in the TEN - Everything AI menu.
            Navigate to Creators in the menu. Follow the steps to join creator
            monetization.
          </p>
          <h3>Adjust message limits</h3>
          <p className="text-lg">
            Control when to show paywalls by customizing message limits on each
            bot. Consider how many messages will engage the user, so they are
            most likely to subscribe when they see the paywall.
          </p>
          <h3>Set your price</h3>
          <p className="text-lg">
            You can set a bot’s price per-message. Each time a user messages
            your bot, you earn that price from TEN - Everything AI. Choose a price that balances
            your earnings with user accessibility - lower prices attract more
            users, while higher prices could limit your bot’s use, as it turns
            away some users and potentially limits your bot’s access to
            subscribers only.
          </p>
          <h3>Share</h3>
          <p className="text-lg">
            Share your bots with your friends, on social media, or use any other
            marketing approach to help people discover them. The more users
            engage with your bots, the more you’ll be able to earn.
          </p>
          <h3>Get paid</h3>
          <p className="text-lg">Earn money when:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>
              <span>
                your bot brings a user to TEN - Everything AI for the first time and they
                subscribe
              </span>
            </li>
            <li style={{ marginBottom: '8px' }}>your bot brings a user back to TEN - Everything AI and they subscribe</li>
            <li style={{ marginBottom: '8px' }}>your bot's paywall is seen just before a user subscribes</li>
            <li style={{ marginBottom: '8px' }}>users send messages to your bot</li>
          </ul>
          <p className="text-lg">Check the Creator page to see earnings per bot.</p>
         </section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Who is eligible to be monetized?
          </h2>
          <p className="text-lg">
            Bot creators must agree to the TEN - Everything AI Creator Monetization program{" "}
            <a href="https://TEN - Everything AI.com/earnings_tos">terms and conditions</a> and
            must be based in an eligible region to earn per subscription or set
            a price per message. Below are the regions where the&nbsp;TEN - Everything AI
            Creator Monetization program is currently available:
          </p>
          <table class="w-full border-collapse">
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">​</td>
                <td class="px-8 py-6 text-left text-gray-700">
                  <strong>Eligible for</strong>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">
                  <strong>Region</strong>
                </td>
                <td class="px-8 py-6 text-left text-gray-700">
                  <strong>Earn per subscription</strong>
                </td>
                <td class="px-8 py-6 text-left text-gray-700">
                  <strong>Price per message</strong>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Argentina</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Australia</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Belgium</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Canada</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Colombia</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Denmark</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Finland</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Germany</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Hong Kong</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">India</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Ireland</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Italy</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Japan</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Mexico</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Netherlands</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Norway</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Portugal</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Singapore</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Spain</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Sweden</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Switzerland</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">United Kingdom</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">United States of America</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
                <td class="px-8 py-6 text-left text-gray-700">Yes</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How are message earnings calculated?
          </h2>
          <p className="text-lg">
            For every message sent to you that your bot responds to, you earn
            the price you set. Total message earnings are the sum of all those
            creator prices earned during a pay period.
          </p>
          <p className="text-lg">
            For example, the below table illustrates how changes to your
            per-message price can affect your earnings. For the full month,
            total earnings from messages would be $65:
          </p>
          <table class="w-full border-collapse">
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">Day</td>
                <td class="px-8 py-6 text-left text-gray-700">Creator price in USD$per 1000 messages</td>
                <td class="px-8 py-6 text-left text-gray-700">Total messages responded to(in 1000s)</td>
                <td class="px-8 py-6 text-left text-gray-700">Total messages responded to(in 1000s)</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">1 → 10</td>
                <td class="px-8 py-6 text-left text-gray-700">$0.00</td>
                <td class="px-8 py-6 text-left text-gray-700">100</td>
                <td class="px-8 py-6 text-left text-gray-700">$0</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">11 → 20</td>
                <td class="px-8 py-6 text-left text-gray-700">$3.00</td>
                <td class="px-8 py-6 text-left text-gray-700">10</td>
                <td class="px-8 py-6 text-left text-gray-700">$30</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-8 py-6 text-left text-gray-700">21 → 30</td>
                <td class="px-8 py-6 text-left text-gray-700">$0.50</td>
                <td class="px-8 py-6 text-left text-gray-700">70</td>
                <td class="px-8 py-6 text-left text-gray-700">$35</td>
              </tr>
            </tbody>
          </table>
          <p className="text-lg">
            You can view your total monetized messages and total earnings
            accumulated per-bot on the{" "}
            <a href="https://TEN - Everything AI.com/creators">Creators page</a> on TEN - Everything AI.com’s
            desktop website. These message counts or total earnings may be
            adjusted in accordance with the{" "}
            <a href="https://TEN - Everything AI.com/earnings_tos">Terms of Service</a> (e.g.
            policy violating behaviors).
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How should I decide on a price?
          </h2>
          <p className="text-lg">
            The cost to users will be displayed in compute points which are an
            aggregate of the price you set and our costs (e.g. base bots,
            compute costs, etc). So balance is important. We recommend starting
            with lower prices and making infrequent adjustments. If you have
            your own server costs, set a price that covers those costs. Higher
            prices and frequent price changes could affect your distribution on
            TEN - Everything AI and result in fewer users messaging your bot.
          </p>
          <p className="text-lg">
            The system will allow you to change the per-message price as often
            as you would like and view the current user-facing points price from
            your bot’s edit page. It may take up to 24 hours for a price to
            update. The maximum price per 1,000 messages is 100 USD, meant to
            cover API bots that are expensive to run or contain highly
            specialized knowledge bases. On TEN - Everything AI, prices and earnings are in
            United States Dollars (USD).
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How are subscription earnings calculated?
          </h2>
          <p className="text-lg">
            Subscription earnings come from each successfully converting
            "activation" or successfully converting "paywall."
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>
              An activation is when your bot brings a user to TEN - Everything AI. That
              activation successfully converts when that same user subscribes
              within a set period of time. There are two ways this can occur:
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>
                  Your bot brings the user to TEN - Everything AI the first time they log in,
                  and they subscribe within 14 days of that first visit.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  Your bot brings the user back to TEN - Everything AI after they were inactive
                  for 14+ days, and they subscribe within 14 days of returning.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  We use a variety of mechanisms, including cookies and IP
                  addresses, to track conversion of a user from first landing on
                  TEN - Everything AI to sign up and ultimately subscription.
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: '8px' }}>
              A paywall is when a TEN - Everything AI user sees one of your bot’s paywalls. That
              paywall successfully converts when that same user subscribes
              within a set period of time after seeing one of your bot's
              paywalls. Specifically:
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>
                  A successful paywall occurs when your bot's paywall was the
                  last one a user saw within 1 hour of subscribing.
                </li>
              </ul>
            </li>
          </ul>
          <p className="text-lg">
            Every time a person subscribes to TEN - Everything AI, the potential earnings are a
            percentage of the first payment: 100% for monthly subscriptions or
            50% for annual subscriptions. That full amount is split between any
            monetizing creators with successfully converting activations and
            successfully converting paywalls for that subscription. Bots that
            TEN - Everything AI creates or supports itself - rather than bots made by creators
            on the platform - do not count for this purpose.
          </p>
          <p className="text-lg">
            For example, let's assume a user pays for a monthly subscription. As
            a result, TEN - Everything AI sets aside $20. We then check if a successful
            activation or a successful paywall led to that subscription.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>
              If creators’ bots had a successful activation (e.g., the user
              followed your social media post to TEN - Everything AI) but not a successful
              paywall (e.g., the user signed up in TEN - Everything AI Settings un-prompted),
              then the activating bot's developer would earn the full $20.
            </li>
            <li style={{ marginBottom: '8px' }}>
              If creators’ bots had both a successful activation and a
              successful paywall, then each bot's developer would earn $10 ($20
              divided by the two successes).
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>
                  If one developer made both bots (or it's the same bot), then
                  that developer would earn the full $20.
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: '8px' }}>
              If no creators’ bots had successfully converting activations or
              paywalls, then the $20 is not paid out.
            </li>
          </ul>
          <p className="text-lg">
            Earnings are displayed in the Bot Analytics section of the Creators
            page. Actual earnings paid out under the program may differ based on
            adjustments described in the creator monetization program terms and
            conditions (e.g., a subscriber ultimately not paying). Refer to your
            payout reports and Stripe account for accurate actual earnings data.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How do I receive payments?
          </h2>
          <p className="text-lg">
            Complete your account setup on Stripe to receive payouts. After
            joining creator monetization, navigate to the Creators page and
            follow the instructions to connect to our payment processor. Fill in
            your taxpayer information within 90 days of joining the program to
            be eligible for payments. You will receive payments through your
            Stripe account. TEN - Everything AI will send payments in USD to Stripe, and Stripe
            will transfer payments to you. If needed, Stripe&nbsp;will convert
            to the currency set in&nbsp;your Stripe account based on their
            available conversion rate at that time.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              When will I receive payments?
          </h2>
          <p className="text-lg">
            Assuming you are eligible, have joined creator monetization,
            completed all required information, and remain in good standing, you
            will become eligible for a payment when you have earnings of $10+ to
            be paid. Payments are made within 30–45 days of the end of a month.
            For example, if your bot has earnings January 1st and January 28th,
            the end of the month is January 31st; 30-45 days later- February
            28th to March 15th- you would be paid those earnings. See the{" "}
            <a
              href="https://TEN - Everything AI.com/earnings_tos"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms and conditions
            </a>{" "}
            for full details.&nbsp;
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              What can I do to have more successful activations?
          </h2>
          <p className="text-lg">
            First, create bots that people love using and want to share, and
            enroll in creator monetization. Then, share your bots with friends
            and anyone else who will appreciate them. Social media can be an
            effective channel to reach a large audience, or you can experiment
            with any other marketing technique.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              What can I do to have more successful paywalls?
          </h2>
          <p className="text-lg">
            After joining creator monetization, every one of your bots will have
            a monetization control. That control sets the maximum number of
            messages a user can send to your bot before seeing a paywall. To
            maximize revenue, you will likely want to find a balance between
            giving users the ability to try your bot out for free and making
            sure your bot's heavier users end up seeing a paywall from your bot.
            Test different maximum message limits to find what works best.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How do I edit the message limit of my bots so they show paywalls?
          </h2>
          <p className="text-lg">
            You can edit the message limit during new bot creation or bot
            editing. This feature is currently only available on TEN - Everything AI.com via a
            desktop web browser. You will not be able to customize bot message
            limits on your mobile device.
          </p>
          <p className="text-lg">New bot message limits:</p>
          <ol class="list-decimal pl-6 mb-4">
            <li style={{ marginBottom: '8px' }}>
              <span>
                Visit{" "}
                <a
                  href="https://TEN - Everything AI.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEN - Everything AI.com
                </a>{" "}
                via a desktop web browser.
              </span>
            </li>
            <li style={{ marginBottom: '8px' }}>Click "Create bot" in the menu.</li>
            <li style={{ marginBottom: '8px' }}>Scroll down to monetization tools.</li>
            <li style={{ marginBottom: '8px' }}>Customize your bot's message limit.</li>
          </ol>
          <p className="text-lg">Existing bot message limits:</p>
          <ol class="list-decimal pl-6 mb-4">
            <li style={{ marginBottom: '8px' }}>
              <span>
                Visit{" "}
                <a
                  href="https://TEN - Everything AI.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TEN - Everything AI.com
                </a>{" "}
                via a desktop web browser.
              </span>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <span>
                Navigate to your profile to view your bot list.
              </span>
            </li>
            <li style={{ marginBottom: '8px' }}>
              Click on the bot you wish to edit. This will open a chat page with
              that bot.
            </li>
            <li style={{ marginBottom: '8px' }}>
              In the bot details on the right of the page, click the overflow
              button.
            </li>
            <li style={{ marginBottom: '8px' }}>Click "Edit bot".</li>
            <li style={{ marginBottom: '8px' }}>Scroll down to monetization tools.</li>
            <li style={{ marginBottom: '8px' }}>Customize your bot's message limit.</li>
          </ol>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How do I set a price for my bot?
          </h2>
          <p className="text-lg">
            You can set a bot’s price when you create or edit one of your bots.
          </p>
          <p className="text-lg">New bot price setting:</p>
          <ol class="list-decimal pl-6 mb-4">
            <li style={{ marginBottom: '8px' }}>Visit TEN - Everything AI.com or the TEN - Everything AI app.</li>
            <li style={{ marginBottom: '8px' }}>Click "Create bot" in the menu.</li>
            <li style={{ marginBottom: '8px' }}>Scroll down to Monetization tools.</li>
            <li style={{ marginBottom: '8px' }}>Customize your bot's price.</li>
          </ol>
          <p className="text-lg">Existing bot price setting:</p>
          <ol class="list-decimal pl-6 mb-4">
            <li style={{ marginBottom: '8px' }}>Visit TEN - Everything AI.com or the TEN - Everything AI app.</li>
            <li style={{ marginBottom: '8px' }}>
              Navigate to your <a href="https://TEN - Everything AI.com/profile">profile</a> to
              view your bot list.
            </li>
            <li style={{ marginBottom: '8px' }}>
              Click on the bot you wish to edit. This will open a chat page with
              that bot.
            </li>
            <li style={{ marginBottom: '8px' }}>
              In the bot details on the right of the page, or on the bot info
              card at the top of the chat thread, click the overflow button (ie
              “...”).
            </li>
            <li style={{ marginBottom: '8px' }}>Click "Edit bot".</li>
            <li style={{ marginBottom: '8px' }}>Scroll down to Monetization tools.</li>
            <li style={{ marginBottom: '8px' }}>Customize your bot's price.</li>
          </ol>
        </div>

        {/* Have more questions */}
        <div className="mt-12 text-center">
          <span className="text-gray-800">Have more questions? </span>
          <Link
            to="/submit-request"
            className="text-blue-600 hover:text-blue-700"
          >
            Submit a request
          </Link>
        </div>
      </div>
    </HelpCenterLayout>
  );
};

export default FaqCreator;
