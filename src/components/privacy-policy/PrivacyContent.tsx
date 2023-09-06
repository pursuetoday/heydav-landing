import Container from "@/layouts/container";
import Link from "next/link";

export default function PrivacyContent() {
  return (
    <Container>
      <div className="pb-[2rem] pt-[4rem] lg:pt-[5rem] px-5">
        <br />
        <div className="other-header flex justify-between">
          <div>
            <h1 className="text-[22px]" style={{ lineHeight: 1.2 }}>
              Privacy Policy for HeyDev.ai
            </h1>
            <p className="text-sm">Last updated Sep 05, 2023</p>
          </div>
        </div>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          1. Introduction
        </h2>
        <p className="text-[18px] leading-[29px]">
          Welcome to HeyDev.ai. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at{" "}          
          <Link href="mailto:admin@heydev.ai" className="text-teal-500">
            admin@heydev.ai
          </Link>
          .
        </p>
        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          2. Information We Collect
        </h2>
        <p className="text-[18px] leading-[29px]">
          We collect personal information that you voluntarily provide to us when you register on HeyDev.ai. The personal information that we collect depends on the context of your interactions with us and the products or services you use, but can include the following:
        </p>
        <br />
        <ul className="text-[18px] leading-[29px] list-disc pl-12">
            <li><span className="font-bold">Personal Information</span>:{" "}Name, email address, phone number, company name, and location.</li>
            <li><span className="font-bold">Billing Information</span>:{" "}We use Stripe to handle billing details which includes your credit card information.</li>
        </ul>
        <br />
        <p className="text-[18px] leading-[29px]">
          We also obtain information from third-party platforms such as GitHub. The information we collect from these platforms includes name, email address, organization information, and location.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          3. Use of Your Information
        </h2>
        <p className="text-[18px] leading-[29px]">
          We use personal information collected via HeyDev.ai for various purposes, including to:
        </p>
        <br />
        <ul className="text-[18px] leading-[29px] list-disc pl-12">
            <li>Offer a personalized user experience</li>
            <li>Improve the platform</li>
            <li>Conduct marketing activities</li>
        </ul>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          4. Sharing Your Information
        </h2>
        <p className="text-[18px] leading-[29px]">
          We do not share your personal information with third parties.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          5. Data Security
        </h2>
        <p className="text-[18px] leading-[29px]">
          We prioritize the protection of your data and use highly secure cloud storage solutions, adhering to best practices to prevent unauthorized access.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          6. Cookies and Other Tracking Technologies
        </h2>
        <p className="text-[18px] leading-[29px]">
          We use cookies and tokens to enhance the user experience on our platform, and to help us understand and improve our service offerings.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          7. User Rights
        </h2>
        <p className="text-[18px] leading-[29px]">
          You have the right to access, correct, or delete your personal information held by HeyDev.ai. To exercise these rights, please contact us at {" "}
          <Link href="mailto:admin@heydev.ai" className="text-teal-500">
            admin@heydev.ai
          </Link>
          .
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          8. Policy Updates
        </h2>
        <p className="text-[18px] leading-[29px]">
          Please note that we may update this policy periodically. We recommend that users routinely check this page to stay informed about any changes.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          9. Age Restrictions
        </h2>
        <p className="text-[18px] leading-[29px]">
          Currently, we do not impose any age restrictions on users accessing HeyDev.ai.
        </p>

        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          10. Contact Us
        </h2>
        <p className="text-[18px] leading-[29px]">
          For any concerns or questions regarding this policy, you can contact us via email at {" "}
          <Link href="mailto:admin@heydev.ai" className="text-teal-500">
            admin@heydev.ai
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
