import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

const PrivacyPolicy = () => {
  const appName = "Text Layer";
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 2024-07-15

Privacy Policy

Effective Date: 2024-07-15

1. Introduction

Welcome to Text Layer! At Text Layer, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our website (https://textlayer.pages.dev).

2. Information We Collect

User Data: The only personal information we collect is the images you upload to our website for processing.
Non-Personal Data: We do not collect any non-personal data.
3. Purpose of Data Collection

We collect and use your uploaded images solely for the purpose of processing them into claymation style art, as requested by you.

4. Data Sharing

We do not share your data with any third parties. Your uploaded images are used exclusively for the purpose of processing your request and are not shared or sold to any other parties.

5. Children's Privacy

We do not knowingly collect any data from children under the age of 13. If we become aware that we have inadvertently received personal information from a child under the age of 13, we will delete such information from our records.

6. Data Security

We take appropriate measures to ensure the security of your personal information. We implement various security measures to protect your images from unauthorized access, alteration, or destruction.

7. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.

8. Contact Us

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

Email: hello@a1d.ai

For all other inquiries, please visit our Contact Us page on the Website.

By using Text Layer, you consent to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;