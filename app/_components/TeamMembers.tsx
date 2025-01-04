import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Nayan Pandey", role: "Lead Developer", avatar: "/user.png" },
  {
    name: "Nirmal Rana",
    role: "Graphics Engineer",
    avatar: "/user.png",
  },
  {
    name: "Prasun Sitaula",
    role: "Physics Programmer",
    avatar: "/user.png",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="py-20 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl font-semibold">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {/* <p className="text-gray-600">{member.role}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
