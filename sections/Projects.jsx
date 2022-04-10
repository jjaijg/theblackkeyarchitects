import { ProjectCard } from "@components";
import React, { useEffect, useState } from "react";

function Projects({ categories }) {
  //   const { data, isError } = useGetCategoriesWithProjects();

  const [currentCategory, setCurrentCategory] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (categories.length > 0) {
      setCurrentCategory(categories[0].attributes.Name);
    }
  }, []);

  useEffect(() => {
    if (currentCategory) {
      const [relatedCategory] = categories.filter(
        (category) => category.attributes.Name === currentCategory
      );
      console.log("related : ", relatedCategory);
      setProjects(relatedCategory.attributes.projects.data);
    }
  }, [currentCategory]);

  return (
    <section className="bg-white">
      <div className="w-full mx-2">
        <div className="flex justify-center">
          {/* Project title */}
          <header className="inline-block p-2 my-5 bg-gray-200 bg-opacity-50 border">
            <h3 className="text-4xl md:text-6xl font-bold">All Projects</h3>
          </header>
        </div>
      </div>
      {/* Project ctegory tab */}
      {/* Related project slider */}
      {/* {JSON.stringify(data)} */}
      {projects.length > 0 &&
        projects.map(({ attributes }) => (
          <ProjectCard key={attributes.Name} {...attributes} />
        ))}
    </section>
  );
}

export default Projects;
