import { Card } from "@/components/ui/card";

export default function MethodologySection() {
  return (
    <div className="flex justify-center items-center bg-purple-100 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 container  ">
        {/* Feasibility Study */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-full">📊</div>
            <h3 className="text-lg font-semibold">Feasibility Study</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">🛠️ Technical</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>C++/OpenGL core with Verlet Integration</li>
                <li>GPU-accelerated yarn dynamics</li>
                <li>GLFW/GLM/Assimp integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">💰 Economic</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>Open-source toolchain</li>
                <li>Minimal hardware requirements</li>
                <li>Academic development context</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Simulation Core */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">⚙️</div>
            <h3 className="text-lg font-semibold">Physics Engine</h3>
          </div>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <h4 className="font-medium">📐 Yarn Discretization</h4>
              <p>5-DoF nodes with sliding constraints</p>
            </div>
            <div>
              <h4 className="font-medium">🔗 Force Models</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Stretching (Hooke&apos;s Law)</li>
                <li>Bending (Angular stiffness)</li>
                <li>Friction (Coulomb model)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">⏲️ Verlet Integration</h4>
              <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded text-xs">
                x(t+Δt) = 2x(t) - x(t-Δt) + aΔt²
              </code>
            </div>
          </div>
        </Card>

        {/* Collision Handling */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-3 rounded-full">💥</div>
            <h3 className="text-lg font-semibold">Collision System</h3>
          </div>
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <h4 className="font-medium">🔍 Detection</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>BVH broad-phase culling</li>
                <li>Point-plane narrow phase</li>
                <li>Continuous collision detection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">⚡ Response</h4>
              <p>Impulse-based resolution with normal force projection</p>
              <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded text-xs block mt-2">
                δ = (r - |x-P|) * (x-P)/|x-P|
              </code>
            </div>
          </div>
        </Card>

        {/* Rendering Pipeline */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-3 rounded-full">🖥️</div>
            <h3 className="text-lg font-semibold">Rendering System</h3>
          </div>
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>Real-time OpenGL visualization</li>
            <li>PBR material workflows</li>
            <li>Dynamic normal mapping</li>
            <li>Stress/strain heatmaps</li>
            <li>Interactive camera controls</li>
          </ul>
        </Card>

        {/* UI System */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">🖱️</div>
            <h3 className="text-lg font-semibold">User Interface</h3>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <p>ImGui-based interface with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Real-time parameter controls</li>
              <li>Simulation state management</li>
              <li>Interactive 3D viewport</li>
              <li>Diagnostic overlays</li>
            </ul>
          </div>
        </Card>

        {/* Optimization */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 p-3 rounded-full">🚀</div>
            <h3 className="text-lg font-semibold">Optimization</h3>
          </div>
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>GPU parallel computing</li>
            <li>SIMD vectorization</li>
            <li>BVH acceleration structures</li>
            <li>Adaptive LOD rendering</li>
          </ul>
        </Card>

        {/* Testing */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-full">🐞</div>
            <h3 className="text-lg font-semibold">Validation</h3>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <p>Continuous verification through:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Unit testing (Catch2 framework)</li>
              <li>Energy conservation checks</li>
              <li>Visual inspection workflows</li>
              <li>Performance benchmarking</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}
