import ProjectCard from "@/components/project-card";

const getData = async()=>{
    const response = await fetch('https://pouria-resume.vercel.app/api/works');

    return response.json();
}

const WorksPage = async() => {
    const data = await getData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {data.map((project, index)=>(
                <ProjectCard key={index} id={project.id} color={project.color} imgUrl={project.cover} index={index}/>
            ))}
        </div>
    );
}

export default WorksPage;