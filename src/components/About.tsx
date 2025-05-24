const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative Art Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-20 w-40 h-48 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-2xl transform rotate-6"></div>
        <div className="absolute bottom-16 left-16 w-36 h-44 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-36 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl transform rotate-45 opacity-30"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {" "}
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-black mb-6">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Here are some things about me."
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {" "}
            {/* Left Column - Profile */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border-2 border-gray-200">
                <h3 className="text-3xl font-serif text-black mb-6">
                  Just A Developer...
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    As a student at the{" "}
                    <strong className="text-black">
                      Posts and Telecommunications Institute of Technology
                    </strong>
                    , I am passionate about programming and developing websites
                    and applications.
                  </p>

                  <p>
                    I specialize in{" "}
                    <strong className="text-black">
                      React, TypeScript, and Node.js
                    </strong>
                    , always striving for precision and elegance in every line
                    of code — just like Renaissance artists perfecting every
                    brushstroke.
                  </p>

                  <p>
                    My philosophy is to combine{" "}
                    <strong className="text-black">refined aesthetics</strong>{" "}
                    with{" "}
                    <strong className="text-black">
                      powerful functionality
                    </strong>
                    , creating software that not only runs smoothly but also
                    embodies timeless beauty.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-xl font-serif text-black mb-4">
                    Certificates & Achievements
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                      CS50 Certified
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                      DEVOPSEDU.VN Certified
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right Column - Skills Visualization */}
            <div className="order-1 lg:order-2">
              {" "}
              <div className="relative">
                {/* Main Portrait Frame */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg shadow-2xl border-4 border-gray-700">
                  <div className="bg-white/90 p-6 rounded-lg">
                    <h4 className="text-2xl font-serif text-black text-center mb-6">
                      Professional Skills
                    </h4>

                    <div className="space-y-4">
                      {[
                        { skill: "React & TypeScript", level: 95 },
                        { skill: "Node.js & Express", level: 90 },
                        { skill: "Database Design", level: 85 },
                        { skill: "UI/UX Design", level: 40 },
                        { skill: "Cloud Architecture", level: 50 },
                        { skill: "DevOps & CI/CD", level: 50 },
                      ].map((item, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700 font-medium">
                              {item.skill}
                            </span>
                            <span className="text-black font-bold">
                              {item.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-gray-600 to-black h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>{" "}
                {/* Decorative Corner Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-700 transform rotate-45"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-700 transform rotate-45"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-700 transform rotate-45"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-700 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-300 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-serif text-black italic mb-4 leading-relaxed">
              "Try your best and make the most of your time"
            </blockquote>
            <cite className="text-gray-600 font-medium">
              - My Development Philosophy
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
