import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ProjectOverview from "./_components/ProjectOverview";
import TeamMembers from "./_components/TeamMembers";
import Technologies from "./_components/Technologies";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <ProjectOverview />
        <TeamMembers />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
