import React from 'react'

export default function SecondSection() {
  const experiences = [
    {
      company: "CYBOTRONICS",
      role: "SENIOR FRONTEND DEVELOPER",
      period: "2024 - 2025",
      technologies: ["REACTJS", "JAVASCRIPT", "TAILWINDCSS", "MATERIAL UI"],
      achievements: [
        "Developed MDM Studio for managing integrations such as Google Analytics, Salesforce, HubSpot, and QuickBooks",
        "Designed and developed the company website with responsive layouts and animations",
        "Improved UI/UX and data visualization for seamless account monitoring"
      ],
      current: true
    },
    {
      company: "THINKPALM TECHNOLOGIES",
      role: "SOFTWARE ENGINEER",
      period: "2022 - 2024",
      technologies: ["REACTJS", "TAILWINDCSS", "JAVASCRIPT"],
      achievements: [
        "Developed web applications for seafarer details management",
        "Implemented responsive UI using Tailwind CSS and React.js",
        "Worked closely with UX teams to convert designs into functional interfaces",
        "Participated in code reviews and Agile ceremonies"
      ]
    },
    {
      company: "TECHFULLY",
      role: "REACTJS DEVELOPER",
      period: "2021 - 2022",
      technologies: ["REACTJS", "JAVASCRIPT", "CSS"],
      achievements: [
        "Developed educational platform 'Terv' with interactive learning features",
        "Built responsive and accessible pages for multiple devices",
        "Implemented quizzes and multimedia-based engagement features"
      ]
    },
    {
      company: "PADINK ENGINEERING SERVICES",
      role: "FRONTEND DEVELOPER",
      period: "2019 - 2021",
      technologies: ["REACTJS", "JAVASCRIPT", "CSS"],
      achievements: [
        "Built Employee Tracker Application using React.js",
        "Collaborated with design teams to deliver user-friendly interfaces",
        "Contributed to digital transformation solutions for enterprise clients"
      ]
    }
  ];

  return (
    <div id='Projects' className='mx-3 sm:mx-6 mb-6 sm:mb-8'>
      <div className='backdrop-blur-md bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-8'>
        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
          Professional Experience
        </h2>
        
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Timeline line - hidden on mobile */}
            <div className='hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-purple-500'></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className='relative mb-6 sm:mb-12 last:mb-0'>
                {/* Timeline dot - hidden on mobile */}
                <div className={`hidden sm:block absolute left-6 w-4 h-4 rounded-full border-4 border-white/20 ${
                  exp.current ? 'bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse' : 'bg-white/30'
                } z-10`}></div>
                
                {/* Content card */}
                <div className='sm:ml-16 w-full'>
                  <div className='backdrop-blur-sm bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 group'>
                    {/* Header */}
                    <div className='mb-3 sm:mb-4'>
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                        <div className='mb-2 sm:mb-0'>
                          <h3 className='text-lg sm:text-xl font-bold text-white mb-1 leading-tight'>{exp.company}</h3>
                          <p className='text-pink-300 font-semibold text-sm sm:text-base'>{exp.role}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          {exp.current && (
                            <span className='bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium'>
                              Current
                            </span>
                          )}
                          <span className='text-white/70 text-xs sm:text-sm font-medium bg-white/10 px-2 sm:px-3 py-1 rounded-full'>
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 text-xs px-2 sm:px-3 py-1 rounded-full border border-purple-400/30'>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <ul className='space-y-1.5 sm:space-y-2'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className='flex items-start space-x-2 sm:space-x-3 text-white/80'>
                          <div className='w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0'></div>
                          <span className='text-xs sm:text-sm leading-relaxed'>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className='mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6'>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>4+</div>
            <div className='text-white/70 text-xs sm:text-sm'>Years Experience</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>4</div>
            <div className='text-white/70 text-xs sm:text-sm'>Companies</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>5+</div>
            <div className='text-white/70 text-xs sm:text-sm'>Projects</div>
          </div>
          <div className='text-center backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20'>
            <div className='text-xl sm:text-2xl font-bold text-white mb-1'>100%</div>
            <div className='text-white/70 text-xs sm:text-sm'>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  )
}
