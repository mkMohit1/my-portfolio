import React from 'react'

const Projects = () => {
    const projectList = [
        {
          title: "Stopwatch",
          description:
            "Built a fully functional stopwatch with clear time tracking features. Users can start, stop, and reset the timer with dedicated buttons, while the display dynamically updates in real-time.",
          link: "#", // Replace with actual GitHub link
        },
        {
          title: "Placement Cell Web Application",
          description:
            "Developed a Placement Cell application to maintain a database of student interviews. Implemented secure authentication using Passport.js and followed the MVC architecture to ensure scalability and maintainability.",
          link: "#", // Replace with actual GitHub link
        },
        {
          title: "IMDB Clone App",
          description:
            "Designed a clone of the IMDB website with features such as movie search, filtering, and favorites. Integrated APIs to provide detailed information like movie title, year, and description. Dynamic updates ensure a smooth user experience.",
          link: "#", // Replace with actual GitHub link
        },
        {
          title: "Habit Tracker",
          description:
            "Created a habit tracker to help users monitor their daily habits. Integrated motivational quotes via APIs and used Redux for state management. Focused on delivering a robust and scalable solution through rigorous testing and debugging.",
          link: "#", // Replace with actual GitHub link
        },
      ];
  return (
    <section id="projects" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-bold text-center mb-12">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                projectList.map((project,index)=>(
                    <div className="by-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Projects