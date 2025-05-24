const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Realtime-Voting",
      description:
        "This repository contains the source code for a real-time election voting system, designed to handle live vote updates efficiently and accurately.",
      technologies: [
        "Python",
        "Kafka",
        "Spark Streaming",
        "Postgres",
        "Streamlit",
      ],
      image: "📑",
      category: "Data Engineering",
      year: "2024",
      disableDemo: true,
      disableSource: false,
      github: "https://github.com/HaiAnhDuy/Realtime-Voting",
      demo: "",
    },
    {
      id: 2,
      title: "Realtime-Stock",
      description:
        "This repository contains the source code for a real-time stock analysis system, designed to monitor, process, and visualize live stock market data.",
      technologies: [
        "Python",
        "Kafka",
        "Spark Streaming",
        "Postgres",
        "Apache Grafana",
      ],
      image: "📑",
      category: "Data Engineering",
      year: "2024",
      disableDemo: true,
      disableSource: false,
      github: "https://github.com/HaiAnhDuy/Realtime-Stock",
      demo: "",
    },
    {
      id: 3,
      title: "Chatbot for Bank Transfer Information Lookup",
      description:
        "This project involves building a chatbot designed to retrieve transfer details — including the sender's name, amount, and transaction content — using a transaction ID.",
      technologies: ["Python", "AWS", "Facebook developed"],
      image: "🤖",
      category: "Chatbot",
      year: "2024",
      disableDemo: false,
      disableSource: false,
      github: "https://github.com/HaiAnhDuy/ETL_By_Python_Chatbot_Project",
      demo: "https://www.facebook.com/profile.php?id=61565706104968",
    },
    {
      id: 4,
      title: "ETL Using SSIS",
      description:
        "ETL (SSIS) is a project focused on implementing an ETL pipeline using the SSIS tool. This project supports and addresses the needs of a data warehouse (DWH) solution, built to answer business-oriented reporting questions for a retail store.",
      technologies: [
        "SQL Server Integration Services (SSIS)",
        "SQL Server",
        "Power BI",
      ],
      image: "📑",
      category: "Data Engineering",
      year: "2024",
      disableDemo: true,
      disableSource: false,
      github: "https://github.com/HaiAnhDuy/Final-Project",
      demo: "",
    },
    {
      id: 5,
      title: "Simple online store website",
      description:
        "This is a project to build a simple online store website, where I took on the role of a full-stack developer.",
      technologies: ["Reactjs", "Nodejs", "ExpressJs", "MySQL"],
      image: "💻",
      category: "Web Development",
      year: "2024",
      disableDemo: true,
      disableSource: false,
      github: "https://github.com/HaiAnhDuy/LESAC",
      demo: "",
    },
    {
      id: 6,
      title: "App Hacker Lovin",
      description:
        "This is my latest project — an app designed to deepen the connection between couples. Basically, your partner answers your security questions, and if they answer correctly, they “unlock” (or successfully “hack”) your secret vault. Once unlocked, they can see what you’ve stored inside, which includes four main types of content: text, images, videos, and voice chats that you want to share with them.",
      technologies: [
        "React Native",
        "Nodejs",
        "Express",
        "Socketio",
        "and more...",
      ],
      image: "📱",
      category: "Application Development",
      year: "2025",
      disableDemo: true,
      disableSource: true,
      github: "",
      demo: "",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl transform rotate-12"></div>
        <div className="absolute top-40 right-16 w-28 h-36 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-2xl transform -rotate-6"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-28 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {" "}
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-black mb-6">My Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Here are some of the projects I’ve developed in recent months. "
          </p>
        </div>
        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 text-center border-b border-gray-300">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <div className="text-sm text-black font-medium">
                    {project.category}
                  </div>
                  <div className="text-xs text-gray-500">{project.year}</div>
                </div>{" "}
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-black mb-3 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-black mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-black text-xs rounded-full border border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>{" "}
                  {/* Action Buttons */}
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        if (project.demo !== "") {
                          window.open(project.demo, "_blank");
                        }
                      }}
                      disabled={project.disableDemo}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                        project.disableDemo
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                          : "bg-gradient-to-r from-gray-700 to-black text-white hover:from-black hover:to-gray-900 hover:scale-105"
                      }`}
                    >
                      {project.disableDemo ? "Demo N/A" : "View Demo"}
                    </button>
                    <button
                      onClick={() => {
                        if (project.github !== "") {
                          window.open(project.github, "_blank");
                        }
                      }}
                      disabled={project.disableSource}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                        project.disableSource
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                          : "bg-gradient-to-r from-yellow-700 to-yellow-500 text-white hover:from-yellow-200 hover:to-yellow-900 hover:scale-105 hover:border-none"
                      }`}
                    >
                      {project.disableSource ? "Private" : "Source Code"}
                    </button>
                  </div>
                </div>
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-gray-700 opacity-80"></div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Portfolio;
