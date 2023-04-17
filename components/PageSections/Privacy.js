import React from "react";
import { IoLockClosed } from "react-icons/io5";
import parse from "html-react-parser";

const Privacy = ({ data }) => {
  return (
    <div>
      <div className="mt-32">
        <div className="flex">
          <IoLockClosed className="text-7xl" />
          <div className="ml-4">
            <h1 className="text-6xl">Privacy Policy</h1>
            <p className="text-dark text-opacity-80">
              Last Updated: Jul 9, 2021
            </p>
          </div>
        </div>
        <hr className="border-gdlGrey border-opacity-30 w-full mt-5" />
      </div>
      {parse(data?.privacy_policy || "")}
      {/* <div className="py-6 px-6">
        <section className="mt-5 mb-10">
          <p>
            Your privacy is important to us. We respect your privacy and are
            committed to protecting your personal information. This Privacy
            Statement clarifies how we collect, transfer, process, use and
            disclose your data and sets out GDL security practices. By providing
            us with your personal information, you agree and consent to its
            transfer, processing, use and disclosure as outlined in this Privacy
            Statement.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            What We Collect
          </h3>
          <p>
            We collect personally identifiable information that you provide to
            us, which is information that identifies you as an individual. We
            only do this when you have agreed to our request for that
            information. This may include but not limited to your name, address,
            telephone number, e-mail address, gender and other information that
            you may consider personal.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            T&Cs Updates
          </h3>
          <p>
            GDL reserves the right, at its sole discretion, to change or modify
            portions of these T&Cs at any time. We will post the changes to
            these T&Cs on the site and will indicate at the top of this page the
            date these terms were last revised. It is your responsibility to
            check the T&Cs periodically for changes. Your continued use of the
            site and content after the date any such changes become effective
            constitutes your acceptance of the new or revised T&Cs.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            How we use your data
          </h3>
          <p>
            By providing us with your information, you agree that, where it is
            permitted by local law or by your consent as stated in this privacy
            policy, we may use the information as described below:
          </p>
          <ul className="my-2">
            <li className="my-2 list-inside">to respond to your requests</li>
            <li className="my-2 list-inside">
              to improve our level of service
            </li>
            <li className="my-2 list-inside">to improve user experience</li>
            <li className="my-2 list-inside">
              to improve the content of our communications
            </li>
            <li className="my-2 list-inside">
              to provide you with tips, helpful information, product news and
              updates
            </li>
            <li className="my-2 list-inside">
              to notify you of our new products and services
            </li>
            <li className="my-2 list-inside">
              to seek your views on our products and services
            </li>
            <li className="my-2 list-inside">
              for our own administrative and quality assurance purposes for
              other purposes that may be detailed on the website, mobile
              application and product and service documents
            </li>
          </ul>
          <p>
            We also automatically collect information about your computer
            browser type and operating system, websites you visited before and
            after visiting our websites, standard server log information,
            Internet Protocol (IP) addresses, GPS location data, mobile phone
            service provider, and mobile phone operating system. We aggregate
            this information to understand how our visitors use our websites and
            mobile applications so that we can improve their experience and the
            services we offer.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            How we protect your information
          </h3>
          <p>
            GDL will take appropriate legal, organizational, and technical
            measures to protect your personal information consistent with
            applicable privacy and data security laws. When GDL uses a
            third-party service provider, that provider will be carefully
            selected and required to use appropriate measures to protect the
            confidentiality and security of personal information. We use a
            variety of security technologies and procedures to help protect your
            information from unauthorised access, use or disclosure.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            Sharing information with third parties
          </h3>
          <p>
            We do not sell, trade, or rent users personal information to others.
            We may share your information with our affiliates, contractors and
            agents in the normal course of business for delivery of the
            activities to which you have agreed. Sometimes we use selected third
            parties to provide support services in connection with our websites,
            mobile applications, products, services or in the normal course of
            business. These parties may, from time to time, have access to your
            information to enable them to provide those services to us. We
            require all companies providing such support services to meet the
            same standards of data protection as our own. They are prohibited
            from using the information for their own purposes. We do not allow
            service providers to use your information for their own marketing
            activities.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            When we may disclose your information
          </h3>
          <p>
            We may disclose information if required to do so by law or in the
            good faith belief that such action is necessary to conform with the
            requirements of the law or comply with legal process served on us,
            or act in urgent circumstances to protect the personal safety of
            users of our service or members of the public. To the extent
            practicable and legally permitted, we will attempt to advise you
            prior to any such disclosure, so that you may seek a protective
            order or other relief limiting such disclosure.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            Use of IP Address
          </h3>
          <p>
            An IP address is a set of numbers that is automatically assigned to
            your computer whenever you log on to your Internet service provider
            or through your organisation&apos;s local area network (LAN) or wide
            area network (WAN). Web servers automatically identify your computer
            by the IP address assigned to it during your session online. GDL or
            third-party companies acting on our behalf, may collect IP addresses
            for the purposes of systems administration and to audit the use of
            our websites. We also may use IP addresses to identify users of our
            websites when we feel it is necessary to enforce compliance with the
            websites’ terms of use or to protect our service, products, websites
            or other users.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">Cookies</h3>
          <p>
            Our websites and mobile applications may use &quot;cookies&quot;.
            Cookies allow our websites and mobile applications to respond to you
            as an individual. The website or mobile application can tailor its
            operations to your needs, likes and dislikes by gathering and
            remembering information about your preferences. You can choose to
            accept or decline cookies. Most web browsers automatically accept
            cookies, but you can usually modify your browser setting to decline
            cookies or receive a warning before a cookie is stored if you
            prefer. Please refer to your Internet browser’s instructions or help
            screen to learn more about these functions and to specify your
            cookie preferences. If you choose to decline cookies, you may not be
            able to fully experience the interactive features of our websites or
            any other websites that you visit.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            Information from outside sources
          </h3>
          <p>
            Where permitted by local law, we may also collect legally obtained
            information from third parties to add to our existing user
            databases. Some of this information may be personally identifiable
            information. We do this to better target information offerings,
            promotional campaigns, products and services in which we think you
            would be interested. Such information will only be collected and
            used by us in accordance with the basis on which it was originally
            provided by the subject, or as otherwise permitted by local law.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">Access</h3>
          <p>
            We will retain your information only for the period necessary to
            fulfil the purposes outlined in this Privacy Statement unless a
            longer retention period is required or permitted by law. You may
            contact us in writing to request the updating, correcting or removal
            of information that you have provided to us at any time using the
            contact information provided at the end of this Privacy Statement.
            Your local laws may also give you the right to access information
            that you have provided to us.
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">
            Links to Other Websites
          </h3>
          <p>
            Our website may from time to time provide links to or embed third
            party websites. This Privacy Statement does not apply to those
            websites. If you choose to enter such a linked site, you agree that
            we are not responsible for the availability of such websites and do
            not review or endorse and shall not be liable, directly or
            indirectly, for how these websites treat your information, the
            content of such websites, the use that others make of these
            websites. Please ensure you check the legal and privacy statements
            posted on each website or mobile application you access before
            entering any personal information
          </p>
        </section>
        <section className="mt-5 mb-10">
          <h3 className="font-medium text-2xl mb-2 text-[#a2a6a8]">Changes</h3>
          <p>
            We may occasionally update this Privacy Statement. If the changes we
            make are material, we also may post a notice regarding the changes
            on our websites or mobile applications and related licensing
            agreements. We encourage you to periodically review this Privacy
            Statement to stay informed about how we are helping to protect the
            information we collect. Your continued use of our websites and
            mobile applications constitutes your agreement to the Privacy
            Statement and any updates. Subsequent changes in this Privacy
            Statement will not apply to data that were collected before the
            change is made.
          </p>
        </section>
      </div> */}
    </div>
  );
};

export default Privacy;
