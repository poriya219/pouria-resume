import ImageCarousel from "@/components/carousel";
import { useTranslations } from "next-intl";

const ProjectPageComponent = ({data}) => {
    const t = useTranslations('projects');
    const id = data.id;
    return (
        <div>
            <h1 className="font-bold text-2xl">{t(`${id}.title`)}</h1>
            <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} className="font-medium pt-8">
                {t(`${id}.description`)}
            </div>
            <ImageCarousel images={data.images} alt={t(`${id}.title`)}/>
        </div>
    );
}

export default ProjectPageComponent;