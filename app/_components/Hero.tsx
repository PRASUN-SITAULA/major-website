import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white"
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={`/fabric.jpg`}
          alt="Fabric Simulation Logo"
          objectFit="cover" // Ensures the image scales correctly within the container
          className="backdrop-blur-lg"
          fill={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Fabric Simulation</h1>
        <p className="text-xl mb-8">
          Revolutionizing textile visualization with OpenGL and C++
        </p>
        <a
          href="#overview"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
