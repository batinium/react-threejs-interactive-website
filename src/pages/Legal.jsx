import React from "react";

import CTA from "../components/CTA";

const Legal = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Credits</h1>
      <div className="mt-5 mb-5 flex flex-col gap-3 text-slate 500">
        <p>
          I am deeply grateful to the following individuals and their
          contributions, which have been instrumental in the development of this
          website:
        </p>
        <ul>
          <li>Quiet Oasis by Vigudo</li>
          <li>Nekomori Frog Statue - Kojim</li>
          <li>Stylized desk - shadowkillering</li>
          <li>Bunny Detective - bird</li>
          <li>Forest House - peachyroyalty</li>
          <li>Telephone on a Table - 321Blender</li>
          <li>Rocco The Goon Raccoon | Endboss - Jarne.Dirkx</li>
          <li>phoenix bird - NORBERTO-3D</li>
        </ul>
        <p>
          Their exceptional 3D assets have significantly enhanced the visual
          experience of this project.
        </p>
      </div>
      <h1 className="head-text">Disclaimer</h1>
      <div className="mt-5 mb-5 flex flex-col gap-3 text-slate 500">
        <p>
          If you require further information or have any questions about our
          site's disclaimer, please feel free to contact us by email at
          batinorene@gmail.com. The information provided by Batin Orene on [Your
          Website URL] is for general informational purposes only. All
          information on the site is provided in good faith, however, we make no
          representation or warranty of any kind, express or implied, regarding
          the accuracy, adequacy, validity, reliability, availability, or
          completeness of any information on the site. Under no circumstance
          shall we have any liability to you for any loss or damage of any kind
          incurred as a result of the use of the site or reliance on any
          information provided on the site. Your use of the site and your
          reliance on any information on the site is solely at your own risk.
          This website may contain (or you may be sent through the site) links
          to other websites or content belonging to or originating from third
          parties or links to websites and features. Such external links are not
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability, or completeness by us. We do not warrant,
          endorse, guarantee, or assume responsibility for the accuracy or
          reliability of any information offered by third-party websites linked
          through the site or any website or feature linked in any banner or
          other advertising. We will not be a party to or in any way be
          responsible for monitoring any transaction between you and third-party
          providers of products or services.
        </p>
      </div>
      <h1 className="head-text">Consent</h1>
      <div className="mt-5 mb-5 flex flex-col gap-3 text-slate 500">
        <p>
          By using our website, batinorene.com, you hereby consent to our
          disclaimer and agree to its terms. The use of information provided on
          Batin Orene is at your own discretion and risk, and you will be solely
          responsible for any consequences that result from such use. We reserve
          the right to make amendments or updates to our disclaimer at any time.
          It is your responsibility to periodically review our disclaimer to
          stay informed of updates. Your continued use of our website following
          the posting of any changes to our disclaimer constitutes your
          acknowledgment of such changes and agreement to abide and be bound by
          the modified disclaimer. If you do not agree to our disclaimer, please
          do not use our website.
        </p>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Legal;
