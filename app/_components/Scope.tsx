import { Card } from "@/components/ui/card";

export default function ProjectScopeCards() {
  return (
    <div className="justify-center items-center flex flex-col bg-blue-100">
      <h2 className="text-5xl text-purple-700 py-8 font-bold">Scope</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-auto container">
        {/* Simulation Core */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">🌐</div>
            <h3 className="text-lg font-semibold">Simulation Core</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time cloth physics simulation with gravity, wind, and collision
            detection using position-based dynamics
          </p>
        </Card>

        {/* Material Properties */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-3 rounded-full">👕</div>
            <h3 className="text-lg font-semibold">Material Variants</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Support for different fabric types (cotton, silk, denim) with unique
            drape/stiffness properties
          </p>
        </Card>

        {/* Interactive Elements */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">✋</div>
            <h3 className="text-lg font-semibold">Interaction</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Mouse/touch manipulation with real-time deformation and force
            feedback visualization
          </p>
        </Card>

        {/* Visualization */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-3 rounded-full">📊</div>
            <h3 className="text-lg font-semibold">Visualization</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Stress/strain heatmaps, force vectors, and real-time simulation
            metrics overlay
          </p>
        </Card>

        {/* API Integration */}
        {/* <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">🔌</div>
            <h3 className="text-lg font-semibold">Integration</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            REST API for parameter adjustment and simulation state monitoring
          </p>
        </Card> */}

        {/* Cross-Platform */}
        {/* <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 p-3 rounded-full">📱</div>
            <h3 className="text-lg font-semibold">Cross-Platform</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Web-based implementation with Three.js/react-three-fiber for broad
            accessibility
          </p>
        </Card> */}
      </div>
    </div>
  );
}
