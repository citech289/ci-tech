
import bannerImage from "../assets/2.png";
const MobileDevelopment = () => {
  return (
    <div className="flex flex-col ">

      {/* Banner section */}
      <div className="w-full relative mb-0 pt-20">
        <img
          src={bannerImage}
          alt="MobileDev Banner"
          className="w-full aspect-[3/1] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Mobile Enterprise Integration</h2>
          <p className="text-gray-700">
            Empower your workforce with enterprise apps on the go. We help integrate core business functionalities into mobile devices to boost agility and real-time decision-making.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom enterprise mobile applications</li>
            <li>Workflow automation via mobile platforms</li>
            <li>Field force and operations enablement</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Business Mobility Apps</h2>
          <p className="text-gray-700">
            We design mobile apps for customers, employees, and partners to ensure seamless access to your business processes across various platforms including iOS, Android, and hybrid frameworks.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Platforms: iOS, Android, Windows</li>
            <li>Tech: Xamarin, PhoneGap, Ionic, Titanium</li>
            <li>Tools: HTML5, IBM Worklight, Kony</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">HTML5 Interactive Interfaces</h2>
          <p className="text-gray-700">
            Using HTML5, we craft responsive and dynamic mobile interfaces. These enhance user experiences by delivering smooth, cross-device compatibility for apps and websites.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cross-platform web & mobile compatibility</li>
            <li>Interactive UI/UX capabilities</li>
            <li>Seamless performance across devices</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Smartphone Game Solutions</h2>
          <p className="text-gray-700">
            Our team creates interactive mobile games that enhance brand engagement and can generate additional revenue streams through compelling gaming experiences.
          </p>
          <ul className="list-disc list-inside text-gray-700">
          <li>Multi-level game design & development</li>
          <li>In-game branding & monetization strategies</li>
          <li>Playable ads & AR-based game features</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Immersive Reality Applications</h2>
          <p className="text-gray-700">
            We develop mobile apps using AR/VR/MR technologies, allowing your brand to deliver immersive user experiences across education, retail, healthcare, and more.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>3D modeling and immersive storytelling</li>
            <li>Mixed Reality (MR) solutions for training & simulation</li>
            <li>Cross-platform development (ARKit, ARCore, Unity)</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Connected Device Interfaces</h2>
          <p className="text-gray-700">
            Build mobile apps that interface with IoT devices like wearables, smart homes, and industrial systems. We help you stay ahead in the connected tech ecosystem.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Smart home & health tracking apps</li>
            <li>IIoT for manufacturing & logistics</li>
            <li>Smart city & connected car technologies</li>
            <li>Analytics and remote monitoring</li>
          </ul>
        </div>

        {/* Card 7 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Cross-Platform UI with Qt</h2>
          <p className="text-gray-700">
            We use Qt to build mobile applications that work seamlessly across platforms while maintaining high performance, native speed, and rich user experiences.
          </p>
          <ul className="list-disc list-inside text-gray-700">
          <li>Apps for kiosks, terminals, embedded systems</li>
          <li>Code-once, run-anywhere model</li>
          <li>Custom UI for specialized hardware</li>
        </ul>
        </div>

      </div>

    </div>
  );
};

export default MobileDevelopment;
