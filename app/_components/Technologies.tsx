import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technologies = [
  {
    name: "OpenGL",
    description: "High-performance graphics rendering",
    color: "blue",
  },
  {
    name: "C++",
    description: "Efficient and powerful programming language",
    color: "purple",
  },
  {
    name: "GLSL",
    description: "Shader programming for realistic fabric rendering",
    color: "blue",
  },
  {
    name: "GLFW",
    description: "Cross-platform window and input management",
    color: "purple",
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Technologies Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className={`bg-${tech.color}-50 shadow-md hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl font-semibold text-${tech.color}-600`}
                >
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
