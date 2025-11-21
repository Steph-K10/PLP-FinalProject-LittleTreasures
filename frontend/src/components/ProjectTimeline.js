import React from 'react';
import { projectTimeline } from '../data/teamData';
/*
Project Gantt Chart table with responsive fnctionality and enhanced mobile device support
makes use of hidden lg:block / lg:hidden breakpoints to transform the gantt chart to stacked cards
for mobile first responsive design
*/
const ProjectTimeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4"> {/* Increased to max-w-7xl */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Project Traction & Timeline
        </h2>
        
        {/* Desktop/Tablet View */}
        <div className="hidden lg:block bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          {/* Header - Adjusted spacing */}
          <div className="grid grid-cols-8 gap-2 mb-8 pb-4 border-b border-gray-200"> {/* 8 columns now */}
            <div className="col-span-3"> {/* Milestone column */}
              <h3 className="font-bold text-gray-900 text-xl">Milestones</h3>
            </div>
            {[1, 2, 3, 4, 5].map((month) => (
              <div key={month} className="text-center">
                <div className="bg-green-100 text-green-700 font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto text-lg">
                  {month}
                </div>
                <p className="text-sm text-gray-600 mt-1">Month</p>
              </div>
            ))}
          </div>

          {/* Content - Adjusted spacing */}
          <div className="space-y-8">
            {projectTimeline.map((phase, index) => (
              <div key={index} className="grid grid-cols-8 gap-2 items-start"> {/* 8 columns now */}
                {/* Milestone column - wider to prevent wrapping issue*/}
                <div className="col-span-3">
                  <h4 className="font-bold text-green-700 text-lg mb-3">{phase.month}</h4>
                  <ul className="text-gray-600 space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm flex items-start">
                        <span className="text-green-500 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Month columns - evenly spaced */}
                {[1, 2, 3, 4, 5].map((monthNum) => (
                  <div key={monthNum} className="flex justify-center items-start pt-2">
                    {phase.months.includes(monthNum) ? (
                      <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                    ) : (
                      <div className="w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-6">
          {projectTimeline.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h4 className="font-bold text-green-700 text-lg mb-4">{phase.month}</h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="text-sm flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600 font-medium">Timeline:</span>
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((monthNum) => (
                    <div key={monthNum} className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">M{monthNum}</span>
                      <div className={`w-3 h-3 rounded-full border-2 border-white ${phase.months.includes(monthNum) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;