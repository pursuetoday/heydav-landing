import Container from "@/layouts/container";
import Link from "next/link";

export default function TermsContent() {
  return (
    <Container>
      <div className="pb-[2rem] pt-[4rem] lg:pt-[5rem] px-5">
        <br />
        <div className="other-header flex justify-between">
          <div>
            <h1 className="text-[22px]" style={{ lineHeight: 1.2 }}>
              TERMS AND CONDITIONS
            </h1>
            <p className="text-sm">Last updated Sep. 05, 2023</p>
            <br />
          </div>
        </div>
        <br />
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          1. Introduction
        </h2>
        <p className="text-[18px] leading-[29px]">
            Welcome to HeyDev.ai ("we", "our", or "us"). By using our platform, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our services.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          2. Definitions
        </h2>
        <ul className="text-[18px] leading-[29px] list-disc md:pl-12">
            <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
              <span className="font-bold">Services</span>:{" "}Refers to all products and features offered by HeyDev.ai.
            </li>
            <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
              <span className="font-bold">User</span>:{" "} Refers to the individual or entity that has registered with HeyDev.ai to use our Services.
            </li>
        </ul>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          3. User Accounts
        </h2>
        <ul className="text-[18px] leading-[29px] list-disc md:pl-12">
            <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
                <span className="font-bold">Account Creation</span>:{" "}To use our services, you may need to create an account providing accurate and up-to-date information.                
            </li>
            <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
                <span className="font-bold">
                Account Security</span>:{" "}Users are responsible for maintaining the confidentiality of their account credentials.
            </li>
            <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
                <span className="font-bold">
                Account Termination</span>:{" "}We reserve the right to terminate or suspend any user account at our discretion.
            </li>
        </ul>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
          4. Intellectual Property Rights
        </h2>
        <p className="text-[18px] leading-[29px]">
            All intellectual property rights in the services and the website belong to HeyDev.ai, including but not limited to copyrights, trademarks, and patents.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            5. Usage Restrictions
        </h2>
        <p className="text-[18px] leading-[29px]">
            Users agree not to use the services in any way that:
        </p>
        <br />
        <ul className="list-disc md:pl-12">
          <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
            Violates any applicable law or regulation.
          </li>
          <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
            Infringes upon the rights of any third party.
          </li>
          <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
            Is intended to harm or exploit any individual or group.
          </li>
          <li className="text-[18px] leading-[33px] ml-[1.5rem] md:ml-0">
            Interferes with the operation of our services or infrastructure.
          </li>
        </ul>
        <br />

        
        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            6. Payment and Fees
        </h2>
        <p className="text-[18px] leading-[29px]">
            Users agree to pay any fees associated with the services as described on our website. All sales are final, and no refunds will be provided except in cases where required by law.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            7. Third-Party Integrations
        </h2>
        <p className="text-[18px] leading-[29px]">
            Our services may integrate with third-party platforms. We are not responsible for the content or policies of these third-party platforms.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            8. Dispute Resolution
        </h2>
        <p className="text-[18px] leading-[29px]">
            Any disputes arising out of the use of our services will be governed by the laws of [Specify jurisdiction] and shall be resolved through amicable negotiation or appropriate legal channels.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            9. Liability Limitation
        </h2>
        <p className="text-[18px] leading-[29px]">
            HeyDev.ai shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the services.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            10. Changes to the Terms
        </h2>
        <p className="text-[18px] leading-[29px]">
            We reserve the right to modify these terms at any time. Users are encouraged to review this page regularly to be aware of any changes.
        </p>
        <br />

        <h2 className="text-[22px]" style={{ lineHeight: 1.2 }}>
            11. Contact Us
        </h2>
        <p className="text-[18px] leading-[29px]">
            For any queries or concerns regarding these terms, please contact us at{" "}
            <Link href="mailto:admin@heydev.ai" className="text-teal-500">
              admin@heydev.ai
            </Link>.
        </p>
        <br />
      </div>
    </Container>
  )
}
