import Link from "next/link"
import React from "react"

const Footer: React.FunctionComponent = () => {
  return <footer className="border-2 w-full bg-theme-two-500 p-6">
    <div id="footer-upper" className="md:container md:mx-auto w-full py-4 flex flex-row">
      <div id="intro" className="w-80 mr-12">
        Icon
        <p>This is a place for self introduction. Maybe Slogan. Maybe some on9 stuff. This is a place for self introduction. Maybe Slogan. </p>
      </div>
      <div className="w-2/3 flex flex-row justify-end">
      <div id="uni-strategy" className="w-60 mr-10">
        <h3 className="mb-3">快速導航</h3>
        <div className="w-full flex flex-col">
          <Link href={"/"}>School</Link>
          <Link href={"/"}>Programme</Link>
          <Link href={"/"}>Intern</Link>
          <Link href={"/"}>Grad Job</Link>
        </div>
      </div>
      <div id="about-us" className="w-60 mr-10">
        <h3 className="mb-3">關於我們</h3>
        <div className="w-full flex flex-col">
          <Link href={"/"}>Our team</Link>
          <Link href={"/"}>Help center</Link>
          <Link href={"/"}>Terms and Privacy</Link>
        </div>
      </div>
      <div id="contact-us" className="w-60 mr-10">
        <h3 className="mb-3">聯絡我們</h3>
        <div className="w-full flex flex-col">
          <Link href={"mailto:abc@abc.com"}>abc@abc.com</Link>
          <Link href={"http://www.facebook.com"}>Facebook</Link>
          <Link href={"http://www.instagram.com"}>Instagram</Link>
          <Link href={"http://www.discord.com"}>Discord</Link>
        </div>
      </div>
      </div>
    </div>
  
  
  </footer>
}

export default Footer
