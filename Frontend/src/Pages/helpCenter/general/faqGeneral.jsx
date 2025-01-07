import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import HelpCenterLayout from "../HelpCenterLayout";

const FaqGeneral = () => {
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
                to="/help-center/general"
                className="text-blue-600 dark:text-purple-600 hover:text-blue-700 dark:text-purple-600 dark:hover:text-purple-700"
              >
                General
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
        <h1 className="text-4xl font-bold mb-4 dark:text-[#a5acac]">TEN - Everything AI FAQs</h1>

        <div className="text-sm text-gray-600 mb-8 dark:text-[#a5acac]">12 days ago · Updated</div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How do the bots work?
            </h2>
            <p className="text-lg dark:text-white">
              The bots on TEN - Everything AI are powered by third-party companies that use
              large language models (LLMs). LLMs are machine learning systems
              that have been trained on vast quantities of text data in order to
              process and generate text,{" "}
              <span
                className="notion-enable-hover text-gray-900"
                data-token-index="0"
              >
                images, audio, video, and more.
              </span>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What are the differences between the bots?
            </h2>
            <p className="text-lg dark:text-white">
              At TEN - Everything AI, we offer access to a wide-variety of the best AI products
              in one place:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                State-of-the-art bots including OpenAI's o1-preview and GPT-4o,
                Anthropic's Claude 3.5 Sonnet, Google's Gemini 1.5 Pro and
                Flash, Meta's Llama 3.1 and 3.2, and many more bots from leading
                AI organizations.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Cutting-edge image generators like FLUX1.1, Ideogram 2.0,
                Playground v3, Recraft v3, Imagen3, DALL-E 3, and Stable
                Diffusion 3.5.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Powerful video models from Runway, Luma Labs, Hailuo, and Pika.
              </li>
              <li style={{ marginBottom: '8px' }}>Millions of unique user-created bots.</li>
            </ul>
            <p className="text-lg dark:text-white">
              We are continuously adding the latest and most-advanced bots
              available. We encourage you to explore our growing list of
              official and user-created bots at{" "}
              <a href="http://TEN - Everything AI.com/explore">TEN - Everything AI.com/explore</a>, where you
              can easily search or browse by topic to discover the right bots
              for you.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What are compute points?
            </h2>
            <p className="text-lg dark:text-white">
              <span
                className="notion-enable-hover text-gray-900"
                data-token-index="0"
              >
                Compute points give users flexibility and control when
                communicating with bots on TEN - Everything AI. Each user has a maximum number
                of compute points they can use over a set period of time. Each
                message deducts points based on the bot: some bots use a fixed
                point cost, while other bots require variable costs depending on
                the message (e.g. length of the message sent, size of
                attachments, what it produces, etc). Each bot displays
                information about the number of points required to send a
                message. This means you have the freedom to choose how you
                allocate your points: you can send many longer messages to
                higher compute point bots, far more shorter messages to less
                resource-intensive bots, or balance your usage across a range of
                bots.{" "}
              </span>
            </p>
            <p className="text-lg dark:text-white">
              Non-paying users receive compute points daily, which reset at the
              end of each 24-hour period. Points do not roll over. If you need
              more compute points, you can wait for them to renew tomorrow, or
              subscribe to receive a higher number of compute points.
            </p>
            <p className="text-lg dark:text-white">
              Subscribers receive a higher number of compute points than
              non-paying users receive. They also gain access to the most
              cutting-edge bots on TEN - Everything AI. See all the&nbsp; benefits of
              subscribing &nbsp;in the Subscription FAQ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How many compute points will/did my message use?
            </h2>
            <p className="text-lg dark:text-white">
              There are a few ways to evaluate how many points a message uses:
            </p>
            <p className="text-lg dark:text-white">
              <strong>
                Check the bot’s information about the number of points required
                to send a message.
              </strong>{" "}
              If you select an existing chat or create a new chat, the very top
              has a bot description which includes the number of points and a
              ‘view details’ link.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                The number of points is either ‘per message’ (meaning it is an
                exact point price for every message) or ‘per standard message’
                (meaning it is the point price for a standard length message so
                you can compare between bots).
              </li>
              <li style={{ marginBottom: '8px' }}>
                In ‘view details’, you will see any additional details on how
                point prices are calculated.
              </li>
            </ul>
            <p className="text-lg dark:text-white">
              <strong>Set a per-message budget.</strong> To help you budget
              points, we will notify you when a message exceeds your per-message
              budget. Then you can choose between raising the chat’s per-message
              budget or not. You will never spend more than the budget on a
              single message unless you explicitly agree first.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                In the general Settings menu, you can set a global per-message
                budget for all chats. In each individual chat, you can tap the
                bot’s name to open the chat settings, where you can set that
                specific chat’s per-message budget.
              </li>
            </ul>
            <p className="text-lg dark:text-white">
              <strong>Look at the points used by a past message.</strong> On a
              message, open its menu (the three dots that appear when hovering
              your mouse over a message, or the menu that appears when
              long-pressing a message on a phone). Select ‘info’ to see the
              point cost, including any breakout of what led to that number of
              points.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How can I make sure the bot remembers our entire conversation?
              Sometimes it seems to forget things.
            </h2>
            <p className="text-lg dark:text-white">
              First, choose a bot that can handle the type of content and size
              of memory you want it to remember. Every AI model powering the
              bots has a maximum context length. Read bot descriptions for
              details. If your conversation length exceeds that amount, TEN - Everything AI will
              notify you.
            </p>
            <p className="text-lg dark:text-white">
              Second, turn off the ‘Auto-manage context’ setting in your chat
              thread. By turning it off, you will include all chat history up to
              the bot’s maximum, rather than balancing quality results with
              reducing your compute point usage. Note: Including everything may
              use up a lot more points, and often does not improve the results.
              To turn off ‘Auto-manage context’:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                On your specific chat, tap the bot’s name to open the chat
                settings page.
              </li>
              <li style={{ marginBottom: '8px' }}>Next to 'Auto-manage context’, set the toggle to off.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What can I use the bots for?
            </h2>
            <p className="text-lg dark:text-white">
              You can use the bots for learning, writing help, translation,
              programming help, summarization, entertainment, or many other
              things. We encourage you to explore and discover what TEN - Everything AI is most
              helpful for in your case.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Should I trust what a bot says?
            </h2>
            <p className="text-lg dark:text-white">
              The bots are usually correct, but may make incorrect statements,
              so if you are making an important decision based on information
              from a bot, you will want to verify the information elsewhere. The
              bots also should not be solely relied upon for medical, legal or
              investing advice – please consult a professional. And the bots may
              not have knowledge of current events, so some information may be
              out of date. We expect all of these issues to improve considerably
              as AI research continues.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Can other people using TEN - Everything AI see my conversations with the bots?
            </h2>
            <p className="text-lg dark:text-white">
              No. Conversations with bots are private and are not visible to
              other users of TEN - Everything AI.{" "}
            </p>
            <p className="text-lg dark:text-white">
              If you tap the Share button, you will be prompted to choose any
              messages you want to share with others, and the messages you
              select will then be copied to a new share object, which will be
              visible to whoever you share it with.{" "}
            </p>
            <p className="text-lg dark:text-white">
              If you choose “Share on TEN - Everything AI” as part of the share flow, the
              messages you have chosen to share will be copied to a post that
              will be visible to other TEN - Everything AI users.{" "}
            </p>
            <p className="text-lg dark:text-white">
              You can see all of your posts on TEN - Everything AI on your profile, which you
              can access via the left side menu (accessible from the button in
              the top left of the screen in the bot conversation view). You can
              delete any of your posts from the “...” menu, accessible in the
              top right of the post view.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Was the AI used for the bots trained on Quora answers?
            </h2>
            <p className="text-lg dark:text-white">
              Not currently. If we do this in the future, we will allow Quora
              writers to opt out if they want. See{" "}
              <a href="https://quorablog.quora.com/TEN - Everything AI-1">this blog post</a> for
              more detail.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Who can see what I’ve liked or posts that other TEN - Everything AI users have
              shared?
            </h2>
            <p className="text-lg dark:text-white">
              Similar to social media platforms, if you like a post from another
              user on TEN - Everything AI, other users will be able to see that you liked it.
              And just like “stories” products on other social media platforms,
              if you are following the creator of a post, they will be able to
              see that you have viewed it. You can see who you are following by
              visiting your profile, accessible from the menu on the left.
            </p>
            <p className="text-lg dark:text-white">
              Other users can’t see when you like or dislike messages in a chat.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Do you support dark mode?
            </h2>
            <p className="text-lg dark:text-white">
              TEN - Everything AI supports Dark Mode, which can be easier on your eyes and more
              comfortable to use in low-light environments. Here's how to enable
              Dark Mode in TEN - Everything AI:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Open TEN - Everything AI and go to “Settings”, located in the sidebar.</li>
              <li style={{ marginBottom: '8px' }}>
                Under "Appearance," choose "Dark theme," "Light theme," or
                "System" (which will automatically switch between light and dark
                mode based on your device's settings).
              </li>
            </ul>
            <p className="text-lg dark:text-white">
              TEN - Everything AI will now be displayed in the selected mode. You can change
              this again at any time. Enjoy using TEN - Everything AI in the mode that's most
              comfortable for you!
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              What languages do you support?
            </h2>
            <p className="text-lg dark:text-white">
              TEN - Everything AI's user interface is currently available in English, Japanese,
              Chinese - Simplified, Chinese - Traditional, Korean, Spanish,
              Portuguese, French, Italian and German. It will reflect your
              device language settings.
            </p>
            <p className="text-lg dark:text-white">
              You can still use TEN - Everything AI to chat in other languages. Just start a
              chat with one of the bots in your preferred language. The bot will
              respond in the same language you used to initiate the chat. If a
              bot doesn't work for the language you want, you can send us
              feedback{" "}
              <a href="https://help.TEN - Everything AI.com/hc/en-us/requests/new?ticket_form_id=16988793943060">
                here
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Can I customize my default bot?
            </h2>
            <p className="text-lg dark:text-white">
              The default bot is the bot that appears pre-selected when you
              start a new chat on TEN - Everything AI. You can choose any bot to be your default
              by going to the “Settings” page and selecting the bot you want
              under “Default bot”. This can help you quickly access your
              preferred bot without having to search for it every time you open
              TEN - Everything AI.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How can I create a bot on TEN - Everything AI?
            </h2>
            <p className="text-lg dark:text-white">
              There are two types of bots you can create on TEN - Everything AI: Prompt bots and
              API bots.
            </p>
            <p className="text-lg dark:text-white">
              <strong>Prompt bots</strong> allow you to create a chatbot on top
              of GPT-3.5-Turbo or Claude-instant by providing plain-text
              instructions that the bot will stick to during conversation with
              users.
            </p>
            <p className="text-lg dark:text-white">
              <strong>API bots</strong> are aimed at more tech-savvy developers
              who want to run custom code in response to every user message. API
              bots are more work to set up but offer a lot more flexibility in
              terms of what you can achieve with them.
            </p>
            <p className="text-lg dark:text-white">Here's how to create each type of bot:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                To create a prompt bot, open a web browser and go to{" "}
                <a href="https://TEN - Everything AI.com/create_bot">
                  https://TEN - Everything AI.com/create_bot
                </a>
                . Alternatively, click the “Create a bot” button in the sidebar.
                To see more detailed steps, see{" "}
                <a href="https://developer.TEN - Everything AI.com/prompt-bots/how-to-create-a-prompt-bot">
                  How to create a prompt bot
                </a>{" "}
                and{" "}
                <a href="https://developer.TEN - Everything AI.com/prompt-bots/best-practices-for-prompts">
                  Best practices for prompts
                </a>{" "}
                in our{" "}
                <a href="https://developer.TEN - Everything AI.com/overview/readme">
                  TEN - Everything AI for Developers GitBook
                </a>
                .
              </li>
              <li style={{ marginBottom: '8px' }}>
                To create an API bot, which requires an LLM or code that uses
                one, visit{" "}
                <a href="https://TEN - Everything AI.com/create_bot?api=1">
                  https://TEN - Everything AI.com/create_bot?api=1
                </a>
                . For more information on API bots, check out{" "}
                <a href="https://developer.TEN - Everything AI.com/api-bots/quick-start">
                  https://developer.TEN - Everything AI.com/api-bots/quick-start
                </a>
                .
              </li>
            </ul>
            <p className="text-lg dark:text-white">
              Once you've created your bot, you can customize it further by
              clicking on the Bot name at the top, then clicking on “Edit bot”
              from the menu.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How can I share a bot?
            </h2>
            <p className="text-lg dark:text-white">
              After you create your bot, we encourage you to share it with
              others! To share your bot, follow these steps:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Select your bot, then click on the bot's name at the top.</li>
              <li style={{ marginBottom: '8px' }}>
                Click on “Share bot“ to copy the bot's URL to your clipboard.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Share the link with friends, family, on social media, etc.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How can I delete my TEN - Everything AI account?
            </h2>
            <p className="text-lg dark:text-white">
              We're sorry to see you go! If you're certain about deleting your
              account, you may do so by following these steps:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                Open the TEN - Everything AI app or visit{" "}
                <a href="http://TEN - Everything AI.com/" className="mr-1">
                  TEN - Everything AI.com
                </a>
                and log into your account
              </li>
              <li style={{ marginBottom: '8px' }}>
                Go to “Settings”, located towards the bottom of the sidebar menu
              </li>
              <li style={{ marginBottom: '8px' }}>Scroll down to the bottom and tap on “Delete account”</li>
            </ul>
            <p className="text-lg dark:text-white">
              Keep in mind that deletion is <strong>permanent.</strong> Once
              you’ve selected this option, it cannot be undone. Please note: if
              you have a Quora account linked to your TEN - Everything AI account,{" "}
              <strong>
                <em>
                  deleting your TEN - Everything AI account will also delete your Quora account
                </em>
              </strong>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              Which company’s technology is behind the bots?
            </h2>
            <p className="text-lg dark:text-white">
              You can tap on the name of each bot at the top of the chat view to
              learn more about it:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>
                Assistant, GPT-4, DALL-E-3, and GPT-3.5-Turbo are powered by
                OpenAI. Use of these bots is subject to OpenAI’s policies, which
                are available{" "}
                <a href="https://beta.openai.com/docs/usage-policies">here</a>.
                Assistant and GPT-3.5-Turbo use the <code>gpt-3.5-turbo</code>{" "}
                model.
              </li>
              <li style={{ marginBottom: '8px' }}>
                Claude-instant and Claude-2 are powered by Anthropic. Use of
                these bots is subject to Anthropic’s policies, which are
                available <a href="https://www.anthropic.com/aup">here</a>.
              </li>
              <li style={{ marginBottom: '8px' }}>
                PaLM and Gemini-Pro are powered by Google. Use of these bots is
                subject to Google's policies, which are available{" "}
                <a href="https://policies.google.com/terms/generative-ai/use-policy">
                  here
                </a>
                .
              </li>
              <li style={{ marginBottom: '8px' }}>
                Llama 2 is an open source model developed by Meta and hosted by
                TEN - Everything AI. Llama 2 is licensed under the LLAMA 2 Community License,
                Copyright © Meta Platforms, Inc. All Rights Reserved. (License:{" "}
                <a href="https://ai.meta.com/resources/models-and-libraries/llama-downloads/">
                  https://ai.meta.com/resources/models-and-libraries/llama-downloads/)
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                StableDiffusionXL is an open source model developed by Stability
                AI and hosted by TEN - Everything AI. (License:{" "}
                <a href="https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/LICENSE.md">
                  https://huggingface.co/stability...
                </a>
                )
              </li>
              <li style={{ marginBottom: '8px' }}>
                Playground-v2 is an open source model from Playground AI.&nbsp;
              </li>
              <li style={{ marginBottom: '8px' }}>
                <p className="text-lg dark:text-white">
                  Mistral-Medium, Mixtral-8x7B-Chat, fw-mistral-7b and
                  Qwen-72b-Chat are hosted by Fireworks.ai:
                  https://app.fireworks.ai/models/fireworks/qwen-72b-chat
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-purple-600 mb-4">
              How should I capitalize TEN - Everything AI if I am writing about it?
            </h2>
            <p className="text-lg dark:text-white">
              You should capitalize it as “TEN - Everything AI”, like any proper noun. We don’t
              capitalize it as “TEN - Everything AI” or “TEN - Everything AI”.
            </p>
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

export default FaqGeneral;