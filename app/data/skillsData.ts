import { LucideIcon } from "lucide-react";
import { Code, MonitorSmartphone, Brain, Settings } from "lucide-react";

interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    icon: MonitorSmartphone,
    title: "Web & App Development",
    skills: [
      "HTML & CSS",
      "React",
      "TailwindCSS",
      "Node.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Docker",
      "NGINX",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML / DL",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "Hugging Face Transformers",
      "Computer Vision",
      "Deep Learning",
      "ONNX Runtime",
    ],
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Linux (Arch, Ubuntu)",
      "Docker & Docker Compose",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "Kaggle",
      "Google Cloud",
    ],
  },
];


