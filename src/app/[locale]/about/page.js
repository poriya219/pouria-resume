import ExperienceCard from "@/components/experience-card";
import SkillsBox from "@/components/skills-box";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutPage = () => {
  const t = useTranslations();
    return (
        <div className="flex flex-col py-4">
            <div className="flex items-center">
                <Image src={"/images/profile.jpg"} alt="Pouria" width={120} height={120} className="rounded-full"/>
                <div className="flex flex-col pl-6 pr-6">
                    <h1 className="font-bold text-3xl">{t("in")}</h1>
                    <h2 className="font-medium text-lg text-gray-500 pt-2">Web & Mobile app developer</h2>
                    <p className="font-thin text-lg text-gray-500">Qom, Iran</p>
                </div>
            </div>
            <p className="pt-10">{t('about_description1')}</p>
      <p>{t('about_description2')}</p>

      <h2 className="font-bold pt-4">{t('about_keyStrengths')}</h2>
      <ul>
        <li>- {t('about_strength1')}</li>
        <li>- {t('about_strength2')}</li>
        <li>- {t('about_strength3')}</li>
        <li>- {t('about_strength4')}</li>
        <li>- {t('about_strength5')}</li>
        <li>- {t('about_strength6')}</li>
      </ul>

      <p className="pt-4">{t('about_description3')}</p>
      <p>{t('about_description4')}</p>
      <ExperienceCard/>
      <SkillsBox/>
        </div>
    );
}

export default AboutPage;