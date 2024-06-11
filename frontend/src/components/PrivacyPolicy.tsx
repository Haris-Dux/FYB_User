import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy - For Your Beauty</title>
      </Helmet>

      <section className="bg-[#FDEDF5]">
        <div className="max-w-5xl px-4 sm:px-6 py-28 mx-auto min-h-screen">
          <h2 className="poppin text-3xl lg:text-4xl font-bold tracking-wide">
            Privacy Policy - For Your Beauty
          </h2>
          <p className="mb-4 mt-3">
            At For Your Beauty, we are committed to protecting your privacy. We
            understand that your personal information is important to you, and
            we take our responsibility to safeguard it seriously. This Privacy
            Policy outlines how we collect, use, and protect your information.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            What Information Do We Collect?
          </h2>
          <p className="mb-4">
            We collect information from our customers and users to provide and
            improve our services. This information may include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Contact Information:</strong> Your name, email address,
              and phone number. This helps us communicate with you about your
              account and provide support.
            </li>
            <li>
              <strong>Billing Information:</strong> Your credit card or bank
              account details to process payments for our products and services.
            </li>
            <li>
              <strong>Technical Information:</strong> Your IP address, device
              type, and operating system. We use this information to improve our
              website and troubleshoot any issues.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about the pages you visit
              and the services you use on our website. This helps us understand
              how our services are being used and enhance your user experience.
            </li>
          </ul>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            How Do We Use Your Information?
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide and manage our services</li>
            <li>
              Process transactions and send you related information, including
              purchase confirmations and invoices
            </li>
            <li>
              Send you technical notices, updates, security alerts, and support
              messages
            </li>
            <li>Improve our website, services, and customer experience</li>
            <li>Protect our users from fraud and abuse</li>
          </ul>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Do We Share Your Information with Third Parties?
          </h2>
          <p className="mb-4">
            We do not share your information with third parties except in the
            following cases:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>With Your Consent:</strong> We will share your information
              with third parties if you give us explicit consent to do so.
            </li>
            <li>
              <strong>Compliance with Legal Requirements:</strong> We may
              disclose your information if required to do so by law or in
              response to a legal request, such as a subpoena or court order.
            </li>
            <li>
              <strong>Protection Against Fraud:</strong> We may share
              information to protect our users from fraud and abuse, such as
              reporting fraudulent activities to law enforcement.
            </li>
          </ul>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            How Do We Protect Your Information?
          </h2>
          <p className="mb-4">
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, please be aware
            that no security measures are perfect, and we cannot guarantee the
            absolute security of your information.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. If we make
            changes, we will notify you by posting the updated policy on our
            website. We encourage you to review this Privacy Policy periodically
            to stay informed about how we are protecting your information.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a href="mailto:support@foryourbeauty.shop" target="_blank">
              support@foryourbeauty.shop.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
