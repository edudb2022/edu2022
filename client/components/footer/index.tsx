import Link from "next/link"
import React from "react"
import InstagramIcon from "../common/icons/instagram"
import GoodTurtleIcon from "../common/icons/logo"

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="w-full bg-theme-two-500 mt-8">
      <div
        id="footer-upper"
        className="md:container md:mx-auto w-full py-4 flex flex-col sm:flex-row p-6"
      >
        <div id="intro" className="w-full sm:w-2/5 mr-12 mb-3 sm:mb-1">
          <GoodTurtleIcon className="text-theme-one-500 font-black text-2xl" />
          <p>為求升學資訊透明，令大家可以為未來做好打算。祝大家前程似錦！</p>
        </div>
        <div className="w-full sm:w-3/5 flex flex-col sm:flex-row justify-end">
          <div id="uni-strategy" className="w-full sm:w-1/3 mr-10 mb-3 sm:mb-1">
            <h3 className="sm:mb-3">快速導航</h3>
            <div className="w-full flex flex-wrap gap-x-2 md:flex-col">
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
            <h3 className="sm:mb-3 ">關於我們</h3>
            <div className="w-full flex flex-wrap  gap-x-2  md:flex-col">
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
              <Link href={"http://www.instagram.com"}>
                <a className="text-3xl">
                  <InstagramIcon />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-4 mt-4">
        <GoodTurtleIcon className="text-md text-theme-one-500 font-black" />
        <div className="text-xs mt-4">
          Copyright ©2022, GoodTurtle.fyi. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
