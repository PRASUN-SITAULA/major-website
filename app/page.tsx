import Hero from "./_components/Hero";
import ProjectOverview from "./_components/ProjectOverview";
import TeamMembers from "./_components/TeamMembers";
import Technologies from "./_components/Technologies";
import Footer from "./_components/Footer";
import ProjectScopeCards from "./_components/Scope";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <main>
        <Hero />
        <ProjectOverview />
        <ProjectScopeCards />
        <TeamMembers />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
