import ExperienceCard from "@/components/experience-card";
import SkillsBox from "@/components/skills-box";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="flex flex-col py-4">
            <div className="flex items-center">
                <Image src={"/images/profile.jpg"} alt="Pouria" width={120} height={120} className="rounded-full"/>
                <div className="flex flex-col pl-6">
                    <h1 className="font-bold text-3xl">Pouria jafarzadeh</h1>
                    <h2 className="font-medium text-lg text-gray-500 pt-2">Web & Mobile app developer</h2>
                    <p className="font-thin text-lg text-gray-500">Qom, Iran</p>
                </div>
            </div>
            <p className="pt-10">
        I am a highly skilled and results-driven Senior Dart/Flutter Developer with over 5 years of hands-on experience in designing, developing, and deploying high-quality frontend and backend applications. My expertise lies in creating robust, scalable, and maintainable solutions that align with business goals and user needs.
      </p>
      <p>
        Throughout my career, I have successfully delivered a wide range of applications, from dynamic mobile apps to complex backend systems, leveraging the power of Dart and Flutter to ensure seamless performance across multiple platforms. I am passionate about writing clean, efficient, and well-documented code, and I thrive in collaborative environments where innovation and problem-solving are key.
      </p>
      <h2 className="font-bold pt-4">Key Strengths:</h2>
      <ul>
        <li>- Proficient in building cross-platform mobile applications using Flutter, ensuring a consistent and engaging user experience.</li>
        <li>- Strong background in backend development, including API integration, database management, and cloud services.</li>
        <li>- Expertise in state management solutions to create scalable and maintainable codebases.</li>
        <li>- Skilled in optimizing app performance, reducing load times, and enhancing overall user satisfaction.</li>
        <li>- Experienced in Agile methodologies, version control systems (Git), and CI/CD pipelines for efficient project delivery.</li>
        <li>- Adept at collaborating with cross-functional teams, including designers, product managers, and QA engineers, to deliver projects on time and within scope.</li>
      </ul>
      <p className="pt-4">
        I am committed to staying updated with the latest industry trends and best practices, ensuring that my work remains at the cutting edge of technology. Whether it’s a startup or an enterprise-level project, I bring a proactive mindset, attention to detail, and a dedication to excellence to every task I undertake.
      </p>
      <p>
        Let’s work together to bring your vision to life with a high-performing, scalable, and user-friendly application!
      </p>
      <ExperienceCard/>
      <SkillsBox/>
        </div>
    );
}

export default AboutPage;