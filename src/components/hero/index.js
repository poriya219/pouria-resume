import Image from "next/image";
import IconButton from "../icon-button";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";
import EmailButton from "../email-button";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row gap-6 mt-8">
      <div className="bg-gradient-to-r from-yellow-200 to-pink-200 p-10 rounded-lg shadow-lg flex flex-col justify-between h-[500px] w-full">
        <div>
        <h2 className="text-5xl font-bold text-black">Hey, I’m Pouria, a Developer with 5 years of experience</h2>
        <p className="mt-4 text-black font-medium text-xl">I’m a senior Dart/Flutter developer with over 5 years of experience building high-quality frontend and backend applications. I specialize in delivering clean, scalable, and maintainable code, ensuring your project’s success.</p>
        </div>
        <div className="flex items-center gap-6">
        <EmailButton/>
        <IconButton icon={<FaGithub size={25} color="0a0a0a"/>} href={"https://github.com/poriya219"}/>
        <IconButton icon={<FaLinkedin size={25} color="0a0a0a"/>} href={"https://www.linkedin.com/in/pouria-jafarzadeh-a23208211/"}/>
        <IconButton icon={<FaTelegram size={25} color="0a0a0a"/>} href={"https://telegram.me/poriya219"}/>
        <IconButton icon={<FaInstagram size={25} color="0a0a0a"/>} href={"https://www.instagram.com/poriya.219/"}/>
        </div>
      </div>
      <div className="h-[500px] flex items-center">
        <Image src="/images/profile.jpg" alt="Pouria" className="rounded-lg shadow-lg object-cover h-full" width={900} height={500}/>
      </div>
    </section>
    );
  }