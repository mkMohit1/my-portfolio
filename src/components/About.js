import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16">
        <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-bold text-center mb-8">
                About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                    src="https://via.placeholder.com/400"
                    alt="Profile"
                    className="rounded-lg shadow-lg"
                />
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <p className="text-lg mb-4">
                        Hi, I’m Mohit, a frontend developer with a passion for creating
                        beautiful and functional web applications. I specialize in React
                        and enjoy working with modern web technologies like Tailwind CSS.
                    </p>
                    <p className="text-lg">
                        I love learning new skills, solving challenging problems, and building
                        projects that make an impact. Let’s create something amazing together!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About