export const teamMembers = [
  {
    name: "Steph Khaguli",
    role: "Founder & Project Lead",
    description: "Passionate about community-driven solutions to food insecurity",
    email: "steph.kha.10@gmail.com"
  },
  {
    name: "Tim Kiarie", 
    role: "Technology Lead",
    description: "Ensuring our digital platforms serve community needs",
    email: "tim.kiarie@example.com"
  },
  {
    name: "Winnie D'Souza",
    role: "Partnerships Manager", 
    description: "Building strategic alliances with corporates and communities",
    email: "winnie.dsouza@example.com"
  },
  {
    name: "Jonte Fresh",
    role: "Supply Chain Expert",
    description: "Optimizing food distribution networks across Nairobi",
    email: "j.fresh@example.com"
  }
];

//data for project gantt chart
export const projectTimeline = [
  {
    month: "Phase 1: Foundation & Partnerships",
    months: [1, 2], // This phase spans months 1 and 2
    tasks: [
      "Launch Web Application and begin drive for volunteers",
      "Finalize USSD system development",
      "Secure partnerships with 3 pilot locations in Nairobi",
      "Onboard first 50 users via USSD"
    ]
  },
  {
    month: "Phase 2: Pilot Launch & Testing",
    months: [2, 3],
    tasks: [
      "Launch pilot program",
      "Install first 3 storage banks", 
      "Begin volunteer recruitment drive",
      "Analyze pilot data on usage"
    ]
  },
  {
    month: "Phase 3: Donor Engagement & Scaling",
    months: [3, 4, 5],
    tasks: [
      "Secure first corporate food donor",
      "Run first local food drive", 
      "Refine model based on pilot feedback",
      "Begin outreach for Phase 4 expansion"
    ]
  },
  {
    month: "Phase 4: Strategic Partnerships",
    months: [4, 5],
    tasks: [
      "Formalize partnerships with appliance retailers",
      "Partner with telecom provider for USSD support",
      "Develop expansion strategy to 10+ locations",
      "Begin conducting research for potential expansion counties outside Nairobi"

    ]
  }
];
