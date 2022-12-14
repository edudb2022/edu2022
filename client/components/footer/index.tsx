import Link from "next/link"
import React from "react"
import DiscordIcon from "../common/icons/discord"
import FaceBookIcon from "../common/icons/facebook"
import InstagramIcon from "../common/icons/instagram"

const Footer: React.FunctionComponent = () => {
  return (
    <footer className=" w-full bg-theme-two-500 p-6">
      <div
        id="footer-upper"
        className="md:container md:mx-auto w-full py-4 flex flex-col sm:flex-row"
      >
        <div id="intro" className="w-full sm:w-2/5 mr-12 mb-3 sm:mb-1">
          Icon
          <p>
            This is a place for self introduction. Maybe Slogan. Maybe some on9
            stuff. This is a place for self introduction. Maybe Slogan.
          </p>
        </div>
        <div className="w-full sm:w-3/5 flex flex-col sm:flex-row justify-end">
          <div id="uni-strategy" className="w-full sm:w-1/3 mr-10 mb-3 sm:mb-1">
            <h3 className="sm:mb-3">快速導航</h3>
            <div className="w-full flex flex-col">
              <Link href={"/"}>
                <a>School</a>
              </Link>
              <Link href={"/school/tertiary/1"}>
                <a>Programme</a>
              </Link>
              <Link href={"/"}>
                <a>Intern</a>
              </Link>
              <Link href={"/"}>
                <a>Grad Job</a>
              </Link>
            </div>
          </div>
          <div id="about-us" className="w-full sm:w-1/3 mr-10 mb-3 sm:mb-1">
            <h3 className="sm:mb-3">關於我們</h3>
            <div className="w-full flex flex-col">
              <Link href={"/"}>
                <a>Our team</a>
              </Link>
              <Link href={"/"}>
                <a>Help center</a>
              </Link>
              <Link href={"/TNC"}>
                <a>Terms and Conditions</a>
              </Link>
              <Link href={"/PP"}>
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div id="contact-us" className="w-full sm:w-1/3 mr-10 mb-3 sm:mb-1">
            <h3 className="sm:mb-3">聯絡我們</h3>
            <Link href={"mailto:abc@abc.com"}>Email: abc@abc.com</Link>
            <div className="w-24 sm:w-3/4 flex justify-between mt-3">
              <Link href={"http://www.facebook.com"}>
                <a className="text-3xl">
                  <FaceBookIcon />
                </a>
              </Link>
              <Link href={"http://www.instagram.com"}>
                <a className="text-3xl">
                  <InstagramIcon />
                </a>
              </Link>
              <Link href={"http://www.discord.com"}>
                <a className="text-indigo-600 text-3xl">
                  <DiscordIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
