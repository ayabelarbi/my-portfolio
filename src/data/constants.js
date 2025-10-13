import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import theme from "../themes/default";

function getLogo(theme) {
  return theme === "dark" ? logoWhite : logoBlack;
}

export const Bio = {
  name: "Aya B.",
  roles: [
    "Full Stack Developer",
    "Blockchain Engineer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "I'm a self-learner, passionate and curious to dig deeper and expand my knowledge. With a positive attitude and a growth mindset, I am ready to make meaningful contributions and achieve great things.",
  github: "https://github.com/ayabelarbi",
  resume:
    "https://drive.google.com/file/d/11YmBjZf3b_WZLMege7bzyqtwRwbPXGYa/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/aya-belarbi/",
  twitter: "https://twitter.com/0xaya_",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Java",
        image: "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg",
      },

      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "C",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg",
      },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      {
        name: "Solidity",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
      },
      {
        name: "Cairo",
        image:
          "https://www.cairo-lang.org/wp-content/uploads/2024/04/cropped-cairo-favicon-32x32.png",
      },
      {
        name: "Foundry",
        image: "https://getfoundry.sh/logo.png",
      },
      {
        name: "Hardhat",
        image:
          "https://101blockchains.com/wp-content/uploads/2022/08/hardhat-1-150x150.png",
      },
      {
        name: "Algorand",
        image:
          "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/MWQZMIW4HVGGXDG7EIWZV7NOMY.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },

      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://community.chocolatey.org/content/packageimages/postman.10.24.16.png",
      },

      {
        name: "Figma",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
    ],
  },
];

const indexXP = 6;
export const experiences = [
  {
    id: indexXP,
    img: "https://vechain.org/wp-content/uploads/2023/09/01-LogoVerticale_VShape_Colori_RGB-1.png",
    role: "Full-stack blockchain engineer",
    company: "VeChain",
    date: "September 2024 - September 2025",
  desc: ["Working across smart contracts, frontend applications, and developer tooling within the VeChain ecosystem. Building upgradeable contracts, integrating authentication frameworks, and delivering scalable dApps."],
    skills: [
      "DAOs",
      "Smart Contracts",
      "Frontend Development",
      "Developer Tooling",
      "Upgradeable Contracts",
      "Authentication Frameworks",
      "Scalable dApps",
      "Blockchain",
      "Smart Contracts",
    ],
  },
  {
    id: indexXP + 1,
    img: "https://images.mirror-media.xyz/publication-images/avONu0b7FO0sj8jcs7xzM.png?height=4283&width=4283",
    role: "Full-stack engineer",
    company: "DUSA Labs",
    date: "September 2023 - September 2024",
  desc: [
      "Integrating front-end and enhancing user interaction. Participating in and architecting internal projects to enhance user incentives. Creating content on social media and on the protocol documentation. Integrating Dusa on Defi Llama.",
    ],   
    skills: [
      "Blockchain",
      "Smart Contracts",
      "DeFi",
      "Technical Content Creation",
      "Social Media Creation",
    ],
  },
  {
    id: indexXP + 2,
    img: logoBlack,
    role: "Full-stack blockchain engineer",
    company: "Freelancing",
    date: "July 2021 - Present",
    desc: "Engineered and optimized smart contracts in Solidity. Executed front-end development with JavaScript libraries. Managed AWS infrastructure, and integrated MPC wallet APIs. Developed full-stack DApps, specialized in ECDSA cryptography for security, and enhanced user interfaces with Vue.js for increased application performance.",
    skills: [
      "Solidity",
      "JavaScript",
      "AWS",
      "MPC Wallet APIs",
      "DApps",
      "ECDSA Cryptography",
      "Vue.js",
      "Communication ",
      "Problem-solving",
      "Teamwork",
    ],
  },
  {
    id: indexXP + 3,
    img: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmeTZshxrdR2p5znL1J4rFkHVeQA4u8Bn1ZZzRpmoJDHKz",
    role: "Lead of H.E.R DAO France",
    company: "H.E.R DAO",
    date: "October 2022 - December 2024",
    desc: "Curated and delivered comprehensive workshops on blockchain technologies, including Algorand and Python, to boost proficiency and adoption. Fostered a community of women through top-tier blockchain events and hackathons. Established a scholarship program to encourage women's participation in these activities.",
    skills: [
      "Developer Relations",
      "Blockchain",
      "Python",
      "Algorand",
      "Hackathons",
      "Workshops",
      "Scholarships",
      "Leadership",
      "Teamwork",
      "Problem-solving",
      "Communication",
      "Teaching",
      "Figma/Canva",
    ],
  },
  {
    id: indexXP + 4,
    img: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmPvFeAKQXDSYQxqmwsrtFnGjpLRVE3vxjy96UPut4prok",
    role: "Vice President of Kryptosphere at Sorbonne University  ",
    company: "KRYPTOSPHERE",
    date: "May 2023 - May 2024",
    desc: "Spearheaded blockchain initiatives at the university by establishing Kryptosphere at Sorbonne University. Led educational conference about blockchain and cryptocurrencies.",
    doc: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmdGoZsx6JQ2MKs7RqU3Kwx5BYNPJaPqQyveBb9vS1KTns",
  },
  {
  id: indexXP + 5,
    img: "https://yt3.googleusercontent.com/E3udg1lM1O8d-n1XXl0kNW47PIO-PKUL7yYHnDFQhd4ol2HDWkD40_iXIXOfiQRgC-4mal3NNrg=s160-c-k-c0x00ffffff-no-rj",
    role: "Solidity Educator",
    company: "Leadership and Community Engagement",
    date: "July 2022 - August 2022",
    desc: "Crafted and conducted specialized workshops for refugee women, equipping them for the Women Connect bootcamp and advancing women's employment in technology.",
    skills: ["Solidity", "Education", "Workshop Conducting"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Logo_esilv_png_blanc.png",
    school: "ESILV Engineering School Leonard De Vinci, La Defense, Paris",

    desc: "Relevant Coursework : Mastering machine learning and data analysis algorithms , Designing, developing and administering blockchain solutions,Bitcoin, Cryptography",
    degree:
      "Master's degree in Computer Science and Engineering with a specialization in Blockchain Technology ",
  },
  {
    id: 1,
    img: "https://logosandtypes.com/wp-content/uploads/2023/02/sorbonne-university.svg",
    school: "Sorbonne University's Faculty of Science & Engineering, Paris",
    date: "Sept 2019 - June 2023",
    desc: " Acquired foundational knowledge in network architecture and software engineering paradigms. Honed skills in complex problem analysis, leading to the formulation of robust software solutions. Integrated ethical philosophy with computing principles, scrutinizing the societal impacts of science and technology..",
    degree: "Bachelor degree in Computer Science & Philosophy 2022",
  },
];

export const projects = [
  {
    id: 0,
    title: "Inflow",
    date: "Nov 2024 - Nov 2024",
    description:
      "Inflow is design to make the payment for web2 users of web3 product easier and seamless to provide a simpler, frictionless and intent first onboarding.This project combine, On ramp technology, the standard ERC-4337, NFC ship technology and 1inch fusion SDK to provide a conditioned payment infrastructure for (Tokenized) high value assets. ",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmTCCNAaS9mUj9dtKpNbgpDJFVeSjst7QMbsw4xaeysQUs",
    tags: ["DeFi", "ReactJS", "OnRamp", "API", "Smart contract", "Ethereum"],
    category: ["hackathons", "decentralized app"],
    github: "https://github.com/inflowhack",
    webapp: "",
    member: [
      {
        name: "Aya B.",
        img: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/Qmdg62Ksu4D6veLkPLPtiaj7HbD1Fcjo7yHstcyGNv4Vy6",
        linkedin: "https://www.linkedin.com/in/aya-belarbi/",
        github: "https://github.com/ayabelarbi",
      },
      {
        name: "Danny B.",
        img: "https://avatars.githubusercontent.com/u/47109543?v=4",
        linkedin: "https://www.linkedin.com/in/danny-ba-aa38771b7/",
        github: "https://github.com/dannpr",
      },
    ],
  },
  {
    id: 1,
    title: "Birdy",
    date: "Apr 2023 - Jun 2023",
    description:
      "Birdy is a social media application. Users of the app can interact with each other, add other users, like posts, and comment.",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmezyMicU5dsM3L6ATGo7Ewq7dvHGDqWr2XekqbSk1pMfc",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Javascript"],
    category: "web app",
    github: "https://github.com/ayabelarbi/BirdyApp",
    webapp: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmNk5PMvaLsR2rsgtgELtqjVEXn7gvPW4eMjR7zr6ptswG",
    member: [
      {
        name: "Aya B.",
        img: "https://violet-competitive-emu-409.mypinata.cloud/ipfs/Qmdg62Ksu4D6veLkPLPtiaj7HbD1Fcjo7yHstcyGNv4Vy6",
        linkedin: "https://www.linkedin.com/in/danny-ba-aa38771b7/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Ammar",
        img: "https://avatars.githubusercontent.com/u/50246683?v=4",
        linkedin: "https://www.linkedin.com/in/raoul-ammar-houssenbay/",
        github: "https://github.com/Ammar434",
      },
    ],
  },
  {
    id: 5,
    title: "LoyalT",
    date: "Mar 2024 - Mar 2024",
    description:
      "LoyalT is reinventing loyalty programs with an evolving NFT and daily quests that gamify the user experience.",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmSWMvF41W9rU4WhtMSrTGzGZZ8u1SFJkzHwWxasNbL1kN",
    tags: [
      "Solidity",
      "Tezos",
      "NFT",
      "Blockchain",
      "ReactJS",
      "Smart contract",
    ],
    category: ["hackathons", "decentralized app"],
    github: "https://github.com/ayabelarbi/H-W3B",
    webapp: "",
  },
  {
    id: 2,
    title: "CleanSwap",
    date: "Jan 2024 - Apr 2024",
    description:
      "CleanSwap is a service that allows converting small cryptocurrency amounts into native gas tokens of the current blockchain with a single transaction, simplifying portfolio management.",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmZoZFhdE4t7ZjgnLVDMN61DXbCQGKmg8hMDhqZxWH21sM",
    tags: ["React Js", "Node Js", "Express Js", "TyperScript"],
    category: "decentralized app",
    github: "",
    webapp: "https://www.cleanswap.xyz/",
  },
  {
    id: 5,
    title: "AtomiK",
    date: "Jul 2023 - Jul 2023",
    description:
      "Build at ETHDam, Atomik is a decentralized application that Atomik connect DeFi values of open finance and Cyberphunk ideology of human right to Privacy. The first is cross-chain atomic swaps, which enable secure bridging of assets across different blockchain networks. This functionality allows users to seamlessly transfer assets between chains while ensuring the integrity and security of the transactions",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/Qma1Ha5PkQf6zFDF2xnDaaF39dibr6ZREhFEwXq8FdHRHT",
    tags: ["Solidity", "ReactJS", "NodeJS", "ExpressJs"],
    category: ["hackathons", "decentralized app"],
    github: "https://github.com/ayabelarbi/atomiK",
    webapp: "https://atomik-protocol.vercel.app/",
  },

  {
    id: 5,
    title: "Parity",
    date: "Jul 2023 - Jul 2023",
    description:
      "Build at ETHParis, Parity is a decentralised platform addressing the lack of job market transparency across web2 and web3 through zk-verified insights and optimistic oracles, empowering professionals to make confident career choices. ",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmPLk6UuL4U9oPbyCeVfF7CugFTQvYJQ21N1LoUHopP6Z3",
    tags: ["Solidity", "ReactJS", "ZK-Proof", "ExpressJs"],
    category: ["hackathons", "decentralized app"],
    github: "",
    webapp:
      "https://www.figma.com/proto/KcD1bxvePfVcXvo0tUDrkc/Parity-Website-UI?type=design&node-id=80-98&t=DQJCOp15NleI3wIh-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=80%3A98",
  },
  {
    id: 3,
    title: "Grinding Grans ",
    date: "Jul 2022 - Aug 2022",
    description:
      "Grinding grans is a minting dApp realized in my first intership as a full stack blockchain developer in a motion design agency",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmUQWeamoSMTwRd7hJs2kBawbfAqcAxEh31sbppZ7Hjwqe",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Javascript"],
    category: "decentralized app",
    github: "https://github.com/ayabelarbi/internship2022_1703",
    webapp: "https://youtu.be/-avpz00Oavc",
  },

  {
    id: 4,
    title: "Network traffic vizualisation",
    date: "May 2023 - Jun 2023",
    description:
      "The project relates to the development of a network traffic visualizer, inspired by the Wireshark application. The visualizer processes a text-format trace file containing bytes captured from an Ethernet network. The output is displayed through a graphical Python interface",
    image:
      "https://violet-competitive-emu-409.mypinata.cloud/ipfs/QmNbJ7PoaBFrSePLUYMdZtX3fRggp8dsbmuevPFyR6Ps69",
    tags: ["Python", "Network", "TCP/IP"],
    category: "program",
    github: "https://github.com/ayabelarbi/NetworkVisualisation.",
    webapp: "",
  },

  {
    id: 6,
    title: "Kitchen of The World",
    date: "Oct 2022 - Nov 2022",
    description:
      "Kitchen of the world is Java program that allows users to search for recipes from all over the world. Users can search for recipes by country, category, or ingredients. Users can also add their own recipes to the database.",
    image:
      "https://t4.ftcdn.net/jpg/03/16/15/47/360_F_316154790_pnHGQkERUumMbzAjkgQuRvDgzjAHkFaQ.jpg",
    tags: ["Java", "UML", "Database"],
    category: "program",
    github: "https://github.com/ayabelarbi/KitchenOfTheWorld.",
    webapp: "",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
