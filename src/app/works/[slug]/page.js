import ImageCarousel from "@/components/carousel";

const getData = async(slug)=>{
    const response = await fetch(`https://pouria-resume.vercel.app/api/works?index=${slug}`, {cache:"no-store"});
    return response.json();
}


const ProjectPage = async({params}) => {
    const param = await params;
    const slug = param.slug;
    const data = await getData(slug);
    console.log('images:', data.images);
    

    return (
        <div>
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} className="font-medium pt-8">
                {data.description}
            </div>
            <ImageCarousel images={data.images}/>

        </div>
    );
}

export default ProjectPage;