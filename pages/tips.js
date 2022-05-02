import React from "react";

const About = () => {
  return (
    <div className="p-2 w-full md:max-w-3xl md:mx-auto space-y-8 mt-20">
      <div className="mt-5">
        <h1 className="text-center text-xl text-bellefuOrange underline tracking-wider mb-5">
          Customer's Safety Tips
        </h1>


        <p className='text-center'>
          <ul className=' flex flex-col  space-y-6'>
            <li>  1. Read the site's rules and regulations before embarking on your transactions</li>

            <li>2. Choose strong password during registration</li>
            <li> 3. Do not share your password with anyone</li>
            <li> 4. Do not click on links without verification</li>
            <li> 5. Understand the communication tool you are using</li>
            <li>  6. Make your purchase from a registered farmer or seller of bellefu.com</li>
            <li>7. Verify the authenticity of the seller/buyer before placing order or making payment</li>
            <div>
              <strong> Verification Badges Explained</strong>
              <p>  Below are the different levels of Verification and the corresponding badge colors with their meaning</p>
              <li>a. Black Badge: Phone Verified User</li>
              <li>b. Orange Badge: ID Verified User</li>
              <li>c. Green Badge: KYC Verified User</li>
            </div>

            <li> 8. Beware of scams and frauds, Bellefu.com does not offer any form of payment scheme or protection outside the site and is not responsible for any harm resulting from such.</li>
            <li> 9. Payment and delivery is for negotiation between the parties</li>
            <li> 10. Bellefu.com recommends that you do NOT send money over the Internet and bellefu is not involved in any business transactions between sellers and buyers</li>
            <li>11. Bellefu.com does not ask or request for users personal details outside the website.</li>
            <li> 12. Be safe; never give out financial information and other information that could be misused unless 100% sure is authentic.</li>
            <li>13. All meetings should be in public location.</li>
            <li>  14 Please report or contact us on any fraudulent, suspicious and illegal activity.</li>
            <li>15. The best way to protect your purchase is to carefully check the seller's feedback from his buyers and product description before ordering.</li>
          </ul>
        </p>

      </div>

    </div>
  );
};

export default About;
