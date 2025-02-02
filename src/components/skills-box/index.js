import { Progress } from "@heroui/progress";

const SkillsBox = () => {
    const skils = [
        {'title': 'Flutter', 'amount': 100},
        {'title': 'Git', 'amount': 90},
        {'title': 'Dart', 'amount': 100},
        {'title': 'Firebase', 'amount': 90},
        {'title': 'JavaScript', 'amount': 50},
        {'title': 'Next.js', 'amount': 50},
        {'title': 'C, C++', 'amount': 20},
        {'title': 'Html', 'amount': 80},
        {'title': 'CSS', 'amount': 60},
        {'title': 'Java', 'amount': 20},
    ];
    return (
        <div>
            <p className="font-bold pt-10 text-xl">Skills</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {skils.map((skill, index)=>(
                <div key={index} className="flex items-center justify-between">
                    <p className="font-bold text-sm">{skill.title}</p>
                    <Progress aria-label={skill.title} className="max-w-md" value={skill.amount} />
                </div>
            ))}
        </div>
        </div>
    );
}

export default SkillsBox;