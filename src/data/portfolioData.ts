export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    description?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  field: string;
  status: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Karthik K S",
    title: "College Student | Aspiring Software Developer",
    status: "Actively Learning & Building Projects",
    bio: "I am a dedicated student with a strong passion for software development and problem-solving. Currently learning core programming, web technologies, and full-stack development, I enjoy transforming ideas into functional, structured software solutions.",
    aboutDetails: [
      {
        title: "Aspiring Developer",
        description:
          "Focused on building clean, reliable software with a strong foundation in core computer science concepts and web engineering."
      },
      {
        title: "Hands-on Learning",
        description:
          "Actively applying programming concepts by building practical projects, from command-line tools to full-stack management systems."
      },
      {
        title: "Continuous Growth",
        description:
          "Constantly practicing algorithms, problem-solving, and modern frameworks to expand my developer skill set step by step."
      }
    ]
  },

  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: "Foundational" },
        { name: "C++", level: "Foundational" },
        { name: "Java", level: "Intermediate / Academic" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", level: "Intermediate" },
        { name: "CSS3", level: "Intermediate" },
        { name: "React.js", level: "Learner / Intermediate" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", level: "Version Control" },
        { name: "GitHub", level: "Collaboration & Repos" },
        { name: "VS Code", level: "Primary Development Editor" }
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Problem Solving", level: "Practicing regularly" },
        { name: "Data Structures Basics", level: "Academic & Practice" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "applitrack",
      title: "AppliTrack",
      subtitle: "Electric Appliance Management System",
      description:
        "AppliTrack is an Electric Appliance Management System designed to help manage and organize electric appliances efficiently with multi-role access.",
      longDescription:
        "AppliTrack simplifies electrical appliance tracking and maintenance through a structured, multi-role workflow. It allows general users to report appliance issues, enables technicians to inspect and resolve tickets, and provides administrators with oversight over appliance inventories, personnel, and service records.",
      features: [
        "Multi-role user authentication & authorization (Admin, Technician, User)",
        "Appliance inventory registration, categorization, and tracking",
        "Complaint and maintenance ticket logging with status updates",
        "Technician assignment and service progress monitoring",
        "Clean RESTful API architecture connecting frontend and backend"
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "CSS / Tailwind"
      ],
      githubUrl: "https://github.com/your-username/Electrical_management",
      liveUrl: "",
      status: "Academic / Capstone Project"
    }
  ] as Project[],

  education: [
    {
      id: "diploma-degree",
      degree: "Technical Education / Diploma",
      field: "Computer Science & Engineering",
      institution: "JSS Polytechnic / Technical Institute [Placeholder: Update in portfolioData.ts]",
      status: "Currently Pursuing",
      highlights: [
        "Core coursework in C, Java, Data Structures, and Object-Oriented Programming",
        "Web development fundamentals and database concepts",
        "Active participation in coding activities and practical project development"
      ]
    }
  ] as EducationItem[],

  contact: {
    email: "karthikshaiva56@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthik-k-s-729023395",
    github: "https://github.com/your-username",
    location: "Karnataka, India"
  },

  resume: {
    fileName: "resume.pdf",
    filePath: "/resume.pdf",
    exists: false
  }
};
