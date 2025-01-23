import React from "react";
import "./userGuidelines.css";
import Guidelines from "../../assets/guideline-la-gi.jpg";

const UserGuidelines = () => {
  return (
    <div className="guidelines-container">
      <header className="guidelines-header">User Guidelines</header>

      <div className="image-container">
        <img
          src={Guidelines}
          alt="Guidelines Illustration"
          className="guidelines-image"
        />
      </div>

      <div className="guidelines-content">
        <section className="guidelines-section">
          <h2 className="guidelines-title">Introduction</h2>
          <p className="guidelines-text">
            You can explore and engage with a variety of bots and AI models on
            the TEN-Everything AI platform. Your use of TEN-Everything AI,
            including the development of bots on the platform, is subject to
            these usage rules.
          </p>
        </section>

        <section className="guidelines-section">
          <h2 className="guidelines-title">Prohibited Uses</h2>
          <ul className="guidelines-list">
            <li className="guidelines-list-item">
              <strong>High-risk and unlawful activities</strong>: taking part in
              activities involving explosives, weapons, or hazardous materials,
              among other things.
            </li>
            <li className="guidelines-list-item">
              <strong>Icons and names for profiles and bots</strong>: using
              slurs, profanities, and other rude or inappropriate imagery.
            </li>
            <li className="guidelines-list-item">
              <strong>Violation of intellectual property</strong>: impersonating
              official bots is one instance of intellectual property rights
              violations.
            </li>
            <li className="guidelines-list-item">
              <strong>Violations of security and privacy</strong>: requesting
              private information or getting over security safeguards.
            </li>
            <li className="guidelines-list-item">
              <strong>Bullying, violence, and hate speech</strong>: creating
              violent or hateful content, harassing others, or bullying them.
            </li>
            <li className="guidelines-list-item">
              <strong>A discriminatory practice</strong>: supporting unlawful
              discrimination in contexts like employment, lending, and housing.
            </li>
            <li className="guidelines-list-item">
              <strong>Engaging in political activities</strong>: use the bots to
              produce campaign materials in bulk.
            </li>
            <li className="guidelines-list-item">
              <strong>Misrepresentation and deception</strong>: asserting
              fictitious bot features or passing off responses produced by a bot
              as human responses.
            </li>
            <li className="guidelines-list-item">
              <strong>Abuse of keywords</strong>: overuse of keywords that
              degrades the quality of the material.
            </li>
            <li className="guidelines-list-item">
              <strong>Phishing, spam, or malware</strong>: actions that are
              illegal or safty protocols.
            </li>
          </ul>
        </section>

        <section className="guidelines-section">
          <h2 className="guidelines-title">Third-Party Policies</h2>
          <p className="guidelines-text">
            Your construction and usage of bots powered by third-party LLMs are
            governed by their individual policies. Please take a close look at
            them.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UserGuidelines;
