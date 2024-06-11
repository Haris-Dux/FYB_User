import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Term & Conditions - For Your Beauty</title>
      </Helmet>

      <section className="bg-[#FDEDF5]">
        <div className="max-w-5xl px-4 sm:px-6 py-28 mx-auto min-h-screen">
          <h2 className="poppin text-3xl lg:text-4xl font-bold tracking-wide">
            Terms & Conditions - For Your Beauty
          </h2>
          <p className="mb-4 mt-3">
            Welcome to For Your Beauty. These terms and conditions outline the
            rules and regulations for the use of our website and services. By
            accessing this website, you accept these terms and conditions in
            full. If you disagree with any part of these terms and conditions,
            do not use our website.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">Use of Our Website</h2>
          <p className="mb-4">
            By using our website, you agree to use it for lawful purposes only.
            You must not use our website in any way that causes or may cause
            damage to the website or impairs the availability or accessibility
            of the website. You must not use our website in any way that is
            unlawful, illegal, fraudulent, or harmful.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Intellectual Property Rights
          </h2>
          <p className="mb-4">
            Unless otherwise stated, For Your Beauty owns the intellectual
            property rights for all material on this website. All intellectual
            property rights are reserved.
          </p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent, or sub-license material from this website</li>
            <li>Reproduce, duplicate, or copy material from this website</li>
            <li>
              Redistribute content from For Your Beauty (unless content is
              specifically made for redistribution)
            </li>
          </ul>
          <h2 className="mt-6 text-2xl font-bold mb-2">User Comments</h2>
          <p className="mb-4">
            Certain parts of this website offer the opportunity for users to
            post and exchange opinions, information, material, and data
            ('Comments'). For Your Beauty does not screen, edit, publish, or
            review Comments prior to their appearance on the website and
            Comments do not reflect the views or opinions of For Your Beauty,
            its agents, or affiliates. Comments reflect the view and opinion of
            the person who posts such view or opinion. To the extent permitted
            by applicable laws, For Your Beauty shall not be responsible or
            liable for the Comments or for any loss, liability, damages, or
            expenses caused and or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </p>
          <p className="mb-4">
            For Your Beauty reserves the right to monitor all Comments and to
            remove any Comments which it considers in its absolute discretion to
            be inappropriate, offensive, or otherwise in breach of these Terms
            and Conditions.
          </p>
          <p className="mb-4">You warrant and represent that:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not infringe any intellectual property right,
              including without limitation copyright, patent, or trademark, or
              other proprietary right of any third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent, or otherwise unlawful material or material which is an
              invasion of privacy;
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            In no event shall For Your Beauty, nor any of its officers,
            directors, and employees, be liable to you for anything arising out
            of or in any way connected with your use of this website, whether
            such liability is under contract, tort, or otherwise, and For Your
            Beauty, including its officers, directors, and employees shall not
            be liable for any indirect, consequential, or special liability
            arising out of or in any way related to your use of this website.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Changes to These Terms
          </h2>
          <p className="mb-4">
            For Your Beauty reserves the right to revise these Terms at any time
            as it sees fit, and by using this website, you are expected to
            review these Terms on a regular basis to ensure you understand all
            terms and conditions governing the use of this website.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">
            Governing Law & Jurisdiction
          </h2>
          <p className="mb-4">
            These Terms will be governed by and construed in accordance with the
            laws of the State in which For Your Beauty operates, and you submit
            to the non-exclusive jurisdiction of the state and federal courts
            located in that State for the resolution of any disputes.
          </p>
          <h2 className="mt-6 text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@foryourbeauty.shop" target="_blank">
              support@foryourbeauty.shop.
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
