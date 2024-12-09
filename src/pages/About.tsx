const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          About iGlam
        </h1>
        <p className="text-lg text-gray-600">A Demo E-commerce Project</p>
      </div>

      <div className="bg-white  p-8 mb-8">
        <p className="text-gray-700 mb-6">
          Welcome to iGlam! This website is a demonstration project showcasing
          my frontend development skills. While iGlam appears to be a luxurious
          skincare e-commerce platform, it's important to note that this is a
          fictional business created solely for portfolio purposes.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Technical Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Frontend Stack
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• React.js</li>
                <li>• Mongo DB</li>
                <li>• Redux for state management</li>
                <li>• Tailwind CSS for responsive styling</li>
                <li>• Modern ES6+ JavaScript</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Responsive design</li>
                <li>• Shopping cart functionality</li>
                <li>• Product filtering and search</li>
                <li>• User authentication flow</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-orange-900 mb-3">
            Portfolio Note
          </h2>
          <p className="text-orange-800">
            This site demonstrates my ability to create modern, responsive web
            applications using React and Redux. While the products and business
            are fictional, the code implementation showcases real-world
            e-commerce functionality and best practices in frontend development.
          </p>
        </div>

        <div className="text-gray-700">
          <p className="mb-4">
            Feel free to explore the site to see examples of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complex state management with Redux</li>
            <li>Responsive UI components built with React</li>
            <li>Modern shopping cart implementation</li>
            <li>Clean, maintainable code architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
