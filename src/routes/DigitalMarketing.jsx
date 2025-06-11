import bannerImage from "../assets/4.png";

const DigitalMarketing = () => {
  return (
    <div className="flex flex-col ">

      {/* Banner section */}
      <div className="w-full relative mb-0 pt-20">
        <img
          src={bannerImage}
          alt="DigitalMarketing Banner"
          className="w-full aspect-[3/1] object-cover rounded-xl shadow-lg"
        />
      </div>

       {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Digital Strategy Planning</h2>
          <p className="text-gray-700 mb-2">
            Navigating the digital space can be overwhelming without a clear roadmap. Our approach ensures you stay focused and aligned with your business goals.
          </p>
          <p className="text-gray-700 mb-4">
            We help you design customized digital strategies that reflect your industry landscape, audience behavior, and budget.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Business-focused digital roadmap</li>
            <li>Defined KPIs and metrics</li>
            <li>Insights tailored to your niche</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">All-in-One Digital Approach</h2>
          <p className="text-gray-700 mb-2">
            An integrated marketing strategy ensures that every digital effort complements the other. Together, they deliver superior results.
          </p>
          <p className="text-gray-700 mb-4">
            From SEO to social, we use the right tools in the right measure to create an effective marketing blend.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Holistic marketing mix</li>
            <li>Cross-platform consistency</li>
            <li>Sequential strategy building</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">SEO Services</h2>
          <p className="text-gray-700 mb-2">
            Ranking high on search engines demands more than just keywords. We optimize your website structure, user experience, and authority.
          </p>
          <p className="text-gray-700 mb-4">
            Our team ensures your site gains visibility, improves traffic quality, and builds lasting search presence.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Technical and on-page SEO</li>
            <li>Backlink and citation strategy</li>
            <li>User experience enhancements</li>
            <li>Mobile-first SEO practices</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Paid Ads Optimization</h2>
          <p className="text-gray-700 mb-2">
            Make the most of your ad budget with our optimized PPC campaigns. We help you target the right audience with persuasive messaging.
          </p>
          <p className="text-gray-700 mb-4">
            From research to conversion tracking, we cover it all to ensure maximum ROI from your paid ads.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Keyword and competitor research</li>
            <li>Landing page optimization</li>
            <li>Creative and ad copy creation</li>
            <li>Conversion rate improvement</li>
            <li>Continuous performance tuning</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">App Store Visibility</h2>
          <p className="text-gray-700 mb-2">
            Creating a great app is just the start. We help it reach the right audience through app store optimization techniques.
          </p>
          <p className="text-gray-700 mb-4">
            Improve your rankings on iTunes and Play Store by fine-tuning your app’s visibility and presentation.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Keyword-rich app descriptions</li>
            <li>Optimized titles and visuals</li>
            <li>Review and rating strategies</li>
            <li>Platform-specific ASO best practices</li>
          </ul>
        </div>

        {/* Card 6 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Social Media Campaigns</h2>
          <p className="text-gray-700 mb-2">
            Build real engagement with your audience on platforms they use daily. We strategize and execute meaningful social interactions.
          </p>
          <p className="text-gray-700 mb-4">
            Our campaigns are crafted to reflect your brand, drive action, and create community-driven growth.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Platform-specific strategy</li>
            <li>Interactive content ideas</li>
            <li>Paid and organic campaigns</li>
            <li>Audience analytics & insights</li>
          </ul>
        </div>

        {/* Card 7 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Interactive Facebook Engagements</h2>
          <p className="text-gray-700 mb-2">
            Capture your audience's attention with engaging Facebook apps. We build interactive experiences that drive shares and participation.
          </p>
          <p className="text-gray-700 mb-4">
            Our team handles the full lifecycle of these campaigns from design to launch.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Quizzes, polls, and games</li>
            <li>Lead generation integrations</li>
            <li>Branded storytelling formats</li>
            <li>Analytics and campaign reporting</li>
          </ul>
        </div>
                {/* Card 8 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Engaging Facebook Campaigns</h2>
          <p className="text-gray-700 mb-2">
            We design interactive Facebook applications that help brands connect with their audience in a creative way. These campaigns are tailored to boost user engagement and brand recall.
          </p>
          <p className="text-gray-700 mb-4">
            From concept to launch, we manage end-to-end execution to deliver measurable results.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Interactive contests and quizzes</li>
            <li>Game-based engagement tools</li>
            <li>Brand-centric app development</li>
            <li>Real-time performance tracking</li>
          </ul>
        </div>

        {/* Card 9 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Strategic Media Buying</h2>
          <p className="text-gray-700 mb-2">
            Maximize your ad spend through intelligent media planning and purchasing. We make sure your message reaches the right audience at the right time through effective channel selection.
          </p>
          <p className="text-gray-700 mb-4">
            Our team adapts strategies in real-time for higher conversions and optimal returns.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Campaign planning and budgeting</li>
            <li>Real-time optimization</li>
            <li>Audience segmentation</li>
            <li>Performance-driven media strategies</li>
          </ul>
        </div>

        {/* Card 10 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Boosting Conversion Rates</h2>
          <p className="text-gray-700 mb-2">
            We analyze and refine your digital assets to improve lead-to-customer conversion rates. With testing and optimization, we turn traffic into tangible business results.
          </p>
          <p className="text-gray-700 mb-4">
            Our testing strategies are designed to enhance every visitor’s journey on your site.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>A/B and multivariate testing</li>
            <li>UX and layout improvement</li>
            <li>Call-to-action optimization</li>
            <li>Better ROI from existing traffic</li>
          </ul>
        </div>

        {/* Card 11 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">High-Converting Landing Pages</h2>
          <p className="text-gray-700 mb-2">
            We create focused mini-sites and landing pages that support your marketing campaigns. Each page is designed to capture leads and drive conversions with clarity and impact.
          </p>
          <p className="text-gray-700 mb-4">
            Our goal is to craft visually appealing and functional pages that align with your campaign objectives.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom design for each campaign</li>
            <li>Mobile-optimized layouts</li>
            <li>Conversion-focused structure</li>
            <li>Speed and SEO optimization</li>
          </ul>
        </div>

        {/* Card 12 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Strategic Content Planning</h2>
          <p className="text-gray-700 mb-2">
            We help you build trust and authority with a consistent and engaging content marketing strategy. Valuable content keeps your brand visible and relevant to your audience.
          </p>
          <p className="text-gray-700 mb-4">
            From blog posts to whitepapers, we ensure your content drives both awareness and conversions.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Editorial calendar setup</li>
            <li>SEO-optimized articles</li>
            <li>Visual content and infographics</li>
            <li>Content performance tracking</li>
          </ul>
        </div>

        {/* Card 13 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Email Campaign Management</h2>
          <p className="text-gray-700 mb-2">
            Email remains one of the most powerful digital marketing tools. We help you set up, design, and manage email campaigns that convert readers into loyal customers.
          </p>
          <p className="text-gray-700 mb-4">
            Our campaigns are targeted, personalized, and measurable to ensure strong ROI.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>List segmentation and targeting</li>
            <li>Responsive email design</li>
            <li>Performance analytics and testing</li>
          </ul>
        </div>

        {/* Card 14 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Brand Reputation Management</h2>
          <p className="text-gray-700 mb-2">
            In today’s digital world, your online reputation matters. We proactively manage your brand image through story-driven content, reviews, and public relations strategies.
          </p>
          <p className="text-gray-700 mb-4">
            Let us help you stay in control of your brand narrative across all platforms.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Online monitoring and alerts</li>
            <li>Positive content amplification</li>
            <li>Crisis response strategies</li>
            <li>Review management</li>
          </ul>
        </div>

        {/* Card 15 */}
        <div className="border rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Automated Marketing Solutions</h2>
          <p className="text-gray-700 mb-2">
            Maximize efficiency with our marketing automation services. We design workflows, scoring models, and trigger-based actions that respond to your customer’s journey.
          </p>
          <p className="text-gray-700 mb-4">
            Integrate your marketing tools and campaigns for smooth, automated execution.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Behavior-based targeting</li>
            <li>Email, SMS, and lead automation</li>
            <li>Popular tools: Marketo, HubSpot, Mautic</li>
            <li>Integrated lead scoring systems</li>
          </ul>
        </div>


      </div>

    </div>
  );
};

export default DigitalMarketing;
