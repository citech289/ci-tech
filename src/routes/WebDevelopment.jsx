import bannerImage from "../assets/1.png";

const WebDevelopment = () => {
  return (
    <div className="flex flex-col">

      {/* Banner section */}
      <div className="w-full relative mb-0 pt-20">
        <img
          src={bannerImage}
          alt="Web Banner"
          className="w-full aspect-[3/1] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Business Website / Mobile Site</h2>
          <p className="text-gray-700 mb-4">
            Your website serves as the digital face of your brand. It's vital to make a great first impression.
          </p>
          <p className="text-gray-700">
            We collaborate with you to create an engaging experience, covering site structure, user interface design,
            content strategy, SEO optimization, and third-party integrations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Tailored Software Development</h2>
          <p className="text-gray-700 mb-4">
            We engineer custom software that helps businesses operate smarter, automate workflows, and stay competitive.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Technologies: Python, Java, Node.js, .NET, PHP</li>
            <li>Frameworks: Django, Laravel, Spring Boot, Express.js</li>
            <li>Databases: MySQL, PostgreSQL, MongoDB, Oracle</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Content Management Solutions</h2>
          <p className="text-gray-700 mb-4">
            Every business is unique — we provide CMS solutions that adapt to your content and marketing needs.
          </p>
          <p className="text-gray-700 mb-2">
            Our team integrates CMS with marketing platforms and analytics tools for optimal performance.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>WordPress</li>
            <li>Drupal</li>
            <li>Headless CMS (Contentful, Strapi)</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">E-commerce Development</h2>
          <p className="text-gray-700">
            {/* Add your content here */}
            Building an online store is just the beginning. To truly scale your business, seamless integration with CRM systems, Business Intelligence (BI) tools, marketing automation, A/B testing, retargeting, accounting/ERP solutions, and third-party APIs (covering inventory, POS, payment gateways, and shipping services) is essential.
          </p>
          <p className="text-gray-700">
            We adopt a comprehensive approach, helping you develop a robust technology and marketing ecosystem to drive sustainable growth.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Magento 1 & 2</li>
            <li>PrestaShop</li>
            <li>nopCommerce</li>
            <li>Volusion</li>
            <li>Shopify</li>
          </ul>
        </div>

         {/* Card 5 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Client Relationship Solutions</h2>
          <p className="text-gray-700">
            We help businesses build stronger relationships with their customers through intelligent CRM systems.
            From automating interactions to providing actionable insights, our solutions ensure seamless customer engagement
            across all touchpoints — increasing loyalty and driving growth.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>CRM setup and customization (vTiger, Salesforce, Zoho CRM)</li>
            <li>Customer data management and segmentation</li>
            <li>Automated marketing campaigns</li>
            <li>Integration with existing business systems</li>
            <li>Analytics and reporting for informed decisions</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Internal Portals & Collaborative Platforms</h2>
          <p className="text-gray-700">
            We create secure intranet and extranet platforms to foster better collaboration between employees, partners,
            and clients. Our solutions streamline internal communication, knowledge sharing, and workflows — helping
            your organization operate more efficiently.
          </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Corporate intranet portals</li>
          <li>Partner and vendor extranets</li>
          <li>Document management and sharing</li>
          <li>Employee self-service tools</li>
          <li>Discussion forums and knowledge bases</li>
          <li>Secure access and role-based permissions</li>
        </ul>
        </div>

        {/* Card 7 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Application Support & Enhancement</h2>
          <p className="text-gray-700">
            Ensure your applications remain reliable and up-to-date with our ongoing maintenance services.
            We provide proactive monitoring, performance optimization, bug fixes, and feature enhancements —
            helping you deliver a seamless experience to your users.
          </p>
        </div>

        {/* Card 8 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Extended Product Engineering</h2>
          <p className="text-gray-700">
            We partner with businesses to develop innovative products through outsourced engineering.
            From concept to deployment, our dedicated teams help accelerate product delivery, reduce time to market,
            and provide ongoing support throughout the product lifecycle.
          </p>
        </div>

        {/* Card 9 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Modernizing Legacy Systems</h2>
          <p className="text-gray-700">
            Unlock the full potential of your legacy applications by migrating them to modern architectures.
            We help businesses upgrade outdated systems to enhance scalability, performance, and security — enabling
            you to better serve today’s digital needs.
          </p>
        </div>

        {/* Card 10 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Custom API Design & Integration</h2>
          <p className="text-gray-700">
            Seamlessly connect your applications with third-party services using custom-built APIs.
            We design, develop, and integrate robust APIs that enable smooth data exchange and
            enhance the functionality of your digital ecosystem.
          </p>
        </div>


      </div>

    </div>
  );
};

export default WebDevelopment;
