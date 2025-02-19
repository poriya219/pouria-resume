"use client"

import {Divider} from "@heroui/divider";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import Image from "next/image";
import { useTranslations } from "use-intl";

const ExperienceCard = () => {
  const t = useTranslations();
    const experiences = [
      {
        company: 'experience_company1',
        title: 'experience_title1',
        description: 'experience_description1',
        image: '/images/beeaab.jpg'
      },
      {
        company: 'experience_company2',
        title: 'experience_title2',
        description: 'experience_description2',
        image: '/images/beeaab.jpg'
      },
      {
        company: 'experience_company3',
        title: 'experience_title3',
        description: 'experience_description3',
        image: '/images/licotab.png'
      },
      {
        company: 'experience_company4',
        title: 'experience_title4',
        description: 'experience_description4',
        image: '/images/licotab.png'
      },
      {
        company: 'experience_company5',
        title: 'experience_title5',
        description: 'experience_description5',
        image: '/images/crop.jpg'
      },
      {
        company: 'experience_company6',
        title: 'experience_title6',
        description: 'experience_description6',
        image: '/images/hf.png'
      }
    ];
    return (
        <div>
            <p className="font-bold pt-10 text-xl">Experiences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-center justify-center">
            {experiences.map((experience, index)=> (
                <Card key={index} className="max-w-[900px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt={t(experience.company)}
                    height={40}
                    radius="sm"
                    src={experience.image}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{t(experience.company)}</p>
                    <p className="text-small text-default-500">{t(experience.title)}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody className="text-start">
                  <p>{t(experience.description)}</p>
                </CardBody>
              </Card>
            ))}
        </div>
        </div>
      );
}

export default ExperienceCard;