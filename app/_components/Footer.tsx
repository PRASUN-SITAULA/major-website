export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-purple-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Fabric Simulation Project. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
