import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
            Interested in working together or have any questions? Feel free to reach out!
            </p>
            <a href="mailto:mohityoga.2016@gmail.com"
            className='px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'>
                Say Hello
            </a>
        </div>
    </section>
  )
}

export default Contact;