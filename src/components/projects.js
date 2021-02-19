function Projects() {
  const projects = [
    "project1",
    "project2",
    "project3",
    "project4",
    "project5",
    "project6",
  ];
  return (
    <div id="projects">
      <h2>My projects</h2>
      {projects.map((project) => {
        return <p>{project}</p>;
      })}
    </div>
  );
}

export default Projects;
