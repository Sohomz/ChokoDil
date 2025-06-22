import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Privacy Policy
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Last updated: June 21, 2025
          </p>
        </div>

        <div className="text-gray-700 text-base leading-relaxed space-y-6 text-justify">
          <p>
            Welcome to ChokoDil. We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website
            [https://Sohomz.github.io/ChokoDil/] and use our services. Please
            read this Privacy Policy carefully. If you do not agree with the
            terms of this Privacy Policy, please do not access the site.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            1. Information We Collect
          </h3>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, and contact
              preferences, that you voluntarily give to us when you interact
              with our forms (e.g., contact form, newsletter signup) or create
              an account.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site. This data is typically used for analytics and
              to improve our service.
            </li>
            <li>
              <strong>Financial Data:</strong> If we process payments directly
              (which is unlikely for a simple GitHub Pages site), financial
              information related to your payment method would be collected.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            2. How We Use Your Information
          </h3>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Understand and analyze how you use our services.</li>
            <li>
              Develop new products, services, features, and functionality.
            </li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the service, and for
              marketing and promotional purposes.
            </li>
            <li>Process your transactions and send you related information.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            3. Disclosure of Your Information
          </h3>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us or on
              our behalf, including data analysis, email delivery, hosting
              services, customer service, and marketing assistance. We do not
              share your Personal Information with third parties for their
              direct marketing purposes.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            4. Data Security
          </h3>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            5. Your Privacy Rights
          </h3>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as the right to access, correct,
            update, or delete your data. To exercise these rights, please
            contact us using the information provided below.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            6. Third-Party Websites
          </h3>
          <p>
            The Site may contain links to third-party websites and applications
            of interest that are not affiliated with us. Once you have used
            these links to leave the Site, any information you provide to these
            third parties is not covered by this Privacy Policy, and we cannot
            guarantee the safety and privacy of your information. We encourage
            you to review the privacy policies of any third-party websites you
            visit.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            7. Children's Privacy
          </h3>
          <p>
            Our services are not directed to anyone under the age of 13. We do
            not knowingly collect personally identifiable information from
            children under 13. If you are a parent or guardian and you believe
            your child has provided us with personal information, please contact
            us, and we will take steps to remove that information from our
            servers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            8. Changes to This Privacy Policy
          </h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date at the top. You are advised to
            review this Privacy Policy periodically for any changes. Changes to
            this Privacy Policy are effective when they are posted on this page.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            9. Contact Us
          </h3>
          <p>
            If you have any questions or comments about this Privacy Policy,
            please contact us at:
          </p>
          <p>
            Email:{" "}
            <Link href="#" className="text-indigo-600 hover:underline">
              privacy@yourcompany.com
            </Link>
          </p>
          <p>Address: [for personal project]</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
