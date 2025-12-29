interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Quantum-Dermo-AI",
    description:
      "Quantum-resistant healthcare platform combining multimodal QCNN deep learning with post-quantum cryptography for secure skin-cancer detection and patient data management.",
    image: "/projects/quantum_derm0_ai.png",
    technologies: [
      "PyTorch",
      "TensorFlow",
      "Next.js",
      "FastAPI",
      "Post-Quantum Cryptography",
      "QCNN",
      "Computer Vision",
      "TypeScript",
      "TailwindCSS",
    ],
    category: "AI & Healthcare",
    links: {
      github: "https://github.com/sakethksg/Quantum-dermo-ai",
      live: "https://quantum-dermo-ai.vercel.app/",
    },
    featured: true,
  },
  {
    id: "2",
    title: "PPE-YOLO",
    description:
      "Real-time workplace safety monitoring using YOLOv10 to detect PPE compliance and prevent accidents. Features live detection, safety alerts, and comprehensive analytics dashboard.",
    image: "/projects/ppe_yolo.png",
    technologies: [
      "YOLOv10",
      "PyTorch",
      "OpenCV",
      "Next.js",
      "FastAPI",
      "Computer Vision",
      "TypeScript",
      "TailwindCSS",
    ],
    category: "AI & Safety",
    links: {
      github: "https://github.com/sakethksg/ppe_yolo",
      live: "https://ppe-yolo.vercel.app/",
    },
    featured: true,
  },
  {
    id: "3",
    title: "LinearLab",
    description:
      "Modern Next.js tool for advanced linear-algebra operations — matrices, eigenanalysis, decompositions, and system solving with a sleek UI.",
    image: "/projects/linearlab.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "NumPy",
      "Python",
      "Linear Algebra",
      "Mathematics",
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/sakethksg/LinearLab",
      live: "https://linearlab-six.vercel.app/",
    },
    featured: true,
  },
  {
    id: "4",
    title: "ChatHub",
    description:
      "Real-time chat app using MERN + Socket.io, JWT auth, Cloudinary uploads — containerized with Docker and Kubernetes.",
    image: "/projects/chathub.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Docker",
      "Kubernetes",
      "Cloudinary",
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/sakethksg/ChatHub",
      live: "https://chat-hub-tawny.vercel.app/",
    },
    featured: false,
  },
  {
    id: "5",
    title: "OminiMed",
    description:
      "Autonomous robotic medical platform integrating swerve-drive hardware and deep reinforcement learning for precision surgical assistance.",
    image: "/projects/omnimed.png",
    technologies: [
      "PyTorch",
      "Deep Reinforcement Learning",
      "Robotics",
      "Next.js",
      "Computer Vision",
      "Python",
      "TypeScript",
    ],
    category: "AI & Robotics",
    links: {
      github: "https://github.com/sakethksg/ominimed",
      live: "https://ominimed.vercel.app/",
    },
    featured: false,
  },
  {
    id: "6",
    title: "RINL VRS Calculator",
    description:
      "Calculator implementing RINL's Gujarat-Pattern VRS formula with tax estimation and investment projection.",
    image: "/projects/vrs-rinl.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Financial Calculations",
      "React",
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/sakethksg/VRS_RINL",
      live: "https://rinl-vrs-calculator.vercel.app/",
    },
    featured: false,
  },
  {
    id: "7",
    title: "ClimeScope",
    description:
      "ESP32-based IoT dashboard using DHT11 + MQ-135 + LCD for live environmental monitoring.",
    image: "/projects/climescope.png",
    technologies: [
      "ESP32",
      "Arduino",
      "IoT",
      "DHT11",
      "MQ-135",
      "C++",
      "Environmental Monitoring",
    ],
    category: "IoT",
    links: {
      github: "https://github.com/sakethksg/ClimeScope",
    },
    featured: false,
  },
  {
    id: "8",
    title: "PeerCrypt",
    description:
      "Secure Python-based file transfer app with end-to-end encryption, decentralized peer discovery, multiple transfer modes, and adaptive congestion control.",
    image: "/projects/peercrypt.png",
    technologies: [
      "Python",
      "P2P",
      "AES Encryption",
      "SHA-256",
      "Socket Programming",
      "TCP/IP",
      "WebRTC",
    ],
    category: "Networking & Security",
    links: {
      github: "https://github.com/sakethksg/Peercrypt",
    },
    featured: false,
  },
];
