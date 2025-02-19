import ProjectPageComponent from "@/components/project-page";

const getData = async(slug)=>{
    const response = await fetch(`https://pouria-resume.vercel.app/api/works?index=${slug}`, {cache:"no-store"});
    return response.json();
}


const ProjectPage = async({params}) => {
    const param = await params;
    const slug = param.slug;
    const data = await getData(slug);

    return (
        <ProjectPageComponent data={data}/>
    );
}

export default ProjectPage;