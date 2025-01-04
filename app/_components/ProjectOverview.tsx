export default function ProjectOverview() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Project Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              About Fabric Simulation
            </h3>
            <p className="text-gray-600">
              Our Fabric Simulation project leverages the power of OpenGL and
              C++ to create highly realistic and interactive textile
              visualizations. By combining advanced physics algorithms with
              cutting-edge graphics technology, we&apos;re pushing the
              boundaries of what&apos;s possible in digital fabric
              representation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Real-time physics-based fabric simulation</li>
              <li>High-performance C++ implementation</li>
              <li>Stunning visuals powered by OpenGL</li>
              <li>Customizable material properties</li>
              <li>Interactive user interface for real-time adjustments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
