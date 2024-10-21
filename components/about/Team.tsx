import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Kwame Asante",
    role: "Founder & CEO",
    image: "/images/team-member-1.jpg",
  },
  {
    name: "Ama Mensah",
    role: "Operations Manager",
    image: "/images/team-member-2.jpg",
  },
  {
    name: "Kofi Boateng",
    role: "Head of Agriculture",
    image: "/images/team-member-3.jpg",
  },
  {
    name: "Akua Darko",
    role: "Quality Control Specialist",
    image: "/images/team-member-4.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
