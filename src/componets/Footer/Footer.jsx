import React from "react";

import FooterBg from "../../assets/website/coffee-footer.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    Link: "/#",
  },
  {
    title: "About",
    Link: "/#about",
  },
  {
    title: "Contact",
    Link: "/#contact",
  },
  {
    title: "Blog",
    Link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/*company detaile */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cae
            </a>
            <p className="pt-4">
              {""}
              Crafted Coffee, Cozy Vibes, Unforgettable Moments- Your perfect
              Espresso Escape
            </p>
            <a
              href="#"
              className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our YT Channel
            </a>
          </div>
          {/*Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/*first col link */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Footer links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.Link}
                      className="inline-block hover:scale-105
                            duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/*second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.Link}
                      className="inline-block hover:scale-105duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/*Company Address section */}
            <div className="py-8 px-4 col-span-2 sm:col-auto ">
                <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
                <div>
                    <p className="mb-3">Gujrat,india</p>
                    <p>+91 5296971971</p>

                    {/*social links */}
                    <div className="space-x-3 mt-6">
                        <a href="#">
                            <FaFacebook className="text-3xl inline-block hover:scale-105 
                            duration-200"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl inline-block hover:scale-105 
                            duration-200"/>
                        </a>
                        <a href="#">
                            <FaInstagram className="text-3xl inline-block hover:scale-105 
                            duration-200"/>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
