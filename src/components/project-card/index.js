export default function ProjectCard({ title, description, imgUrl }) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <img src={imgUrl} alt={title} className="rounded" />
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }