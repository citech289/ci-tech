import bannerImage from "../assets/3.png";
import nftImage from "../assets/bc1.jpeg";
import walletImage from "../assets/bc2.jpeg";
import smartContractImage from "../assets/bc3.jpeg";
import hyperledgerImage from "../assets/bc4.jpeg";

const BlockchainDevelopment = () => {
  const sections = [
    {
      title: "NFT Development & Marketplace",
      description:
        "Non-fungible tokens (NFTs) offer a unique identity to digital assets, making them secure and impossible to duplicate. We provide full-cycle NFT marketplace development, enabling cryptocurrency transactions and integration with platforms like OpenSea, Rarible, and SuperRare.",
      services: [
        "Minting NFT",
        "Buy or Sell NFT",
        "Cross Chain Trading",
        "Wallet Integration",
        "Marketplace Integration",
      ],
      image: nftImage,
    },
    {
      title: "Cryptocurrency Wallet Development",
      description:
        "We build secure and scalable cryptocurrency wallets that support a wide range of transactions and digital currencies. Our wallets include both mobile and web solutions tailored to business needs.",
      services: [
        "Crypto Coin Mining",
        "Cryptocurrency Wallet Transactions",
        "Multi-Cryptocurrency Wallet",
        "Peer-to-Peer Cryptocurrency Transactions",
      ],
      image: walletImage,
    },
    {
      title: "Smart Contract Development",
      description:
        "We help businesses define and implement secure digital contracts on the blockchain. Our smart contracts ensure accuracy, transparency, and efficiency using technologies like Solidity, Rust, JavaScript, and Vyper.",
      services: [],
      image: smartContractImage,

      techIcons: ["Solidity", "Vyper", "JavaScript", "Rust"],
    },
    {
      title: "Hyperledger",
      description:
        "Hyperledger blockchain solutions act as an intermediary for decentralized databases in enterprise applications. We build and manage Hyperledger Fabric frameworks, ensuring data transparency, security, and intellectual property protection.",
      services: [],
      image: hyperledgerImage,
    },
  ];

  return (
    <div className=" mx-auto ">

      {/* Banner section */}
      <div className="w-full relative mb-0 pt-20">
        <img
          src={bannerImage}
          alt="Blockchain Banner"
          className="w-full aspect-[3/1] object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">

      {/* Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          } items-center gap-8`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="rounded-xl w-full lg:w-1/2 object-cover shadow-lg"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">
              {section.title}
            </h2>
            <p className="text-gray-700 text-lg">{section.description}</p>

            {section.services.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mt-4 mb-2">
                  Services we provide:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {section.services.map((service, idx) => (
                    <li key={idx} className="font-medium">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.techIcons && section.techIcons.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {section.techIcons.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      </div>

    </div>
  );
};

export default BlockchainDevelopment;
