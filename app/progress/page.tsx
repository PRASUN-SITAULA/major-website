import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
// import Link from "next/link";

const worksCompleted = [
  {
    title: "Basic fabric mesh generation",
    description: "Created a system to generate a basic fabric mesh structure",
  },
  {
    title: "Simple physics simulation",
    description: "Implemented basic physics for fabric movement",
  },
  {
    title: "User interface for fabric manipulation",
    description: "Developed a basic UI for users to interact with the fabric",
  },
];

const worksRemaining = [
  {
    title: "Advanced fabric properties",
    description:
      "Implement more realistic fabric properties like stretching and tearing",
  },
  {
    title: "Texture mapping",
    description: "Add the ability to apply textures to the fabric",
  },
  {
    title: "Performance optimization",
    description:
      "Optimize the simulation for better performance with complex fabrics",
  },
  {
    title: "Multi-layer fabric support",
    description: "Add support for simulating multi-layered fabrics",
  },
];

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-background mt-12 ">
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Project Progress</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-2xl font-semibold mb-4">Works Completed</h3>
            <div className="space-y-4">
              {worksCompleted.map((work, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {work.title}
                      <Badge variant="success">Completed</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{work.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">Works Remaining</h3>
            <div className="space-y-4">
              {worksRemaining.map((work, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {work.title}
                      <Badge variant="default">Pending</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{work.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Project Completion</p>
          <p className="text-3xl font-bold">
            {Math.round(
              (worksCompleted.length /
                (worksCompleted.length + worksRemaining.length)) *
                100,
            )}
            %
          </p>
        </div>
      </main>
    </div>
  );
}
