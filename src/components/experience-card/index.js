import {Divider} from "@heroui/divider";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import Image from "next/image";

const ExperienceCard = () => {
    const experiences = [
        {'company': 'BeeaaB', 'title': 'Flutter developer', 'description': 'Developing mobile app and web app with Flutter', 'image': '/images/beeaab.jpg'},
        {'company': 'BeeaaB', 'title': 'Web developer', 'description': 'Developing some web pages with Next.js', 'image': '/images/beeaab.jpg'},
        {'company': 'Licotab', 'title': 'Mentor', 'description': 'Mentor at 3 Flutter bootcamp and review exercises', 'image': '/images/licotab.png'},
        {'company': 'Licotab', 'title': 'Advertising manager', 'description': 'Advertising manager for Flutter bootcamps', 'image': '/images/licotab.png'},
        {'company': 'CROP Team', 'title': 'CO-Funder', 'description': 'CO-Funder of CROP Cultural and Artistic Group', 'image': '/images/crop.jpg'},
        {'company': 'Hekmat Faraz Publication', 'title': 'Graphic designer', 'description': 'Graphic designer at Hekmat Faraz Publication', 'image': '/images/hf.png'},
    ];
    return (
        <div>
            <p className="font-bold pt-10 text-xl">Experiences</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-center justify-center">
            {experiences.map((experience, index)=> (
                <Card key={index} className="max-w-[900px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt={experience.company}
                    height={40}
                    radius="sm"
                    src={experience.image}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{experience.company}</p>
                    <p className="text-small text-default-500">{experience.title}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{experience.description}</p>
                </CardBody>
              </Card>
            ))}
        </div>
        </div>
      );
}

export default ExperienceCard;