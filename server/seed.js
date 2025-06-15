import mongoose from "mongoose";
import { Job } from "./models/job.model.js";
import dotenv from "dotenv";
dotenv.config();

await mongoose.connect(process.env.MONGODB_URL);
console.log("✅ MongoDB connected");

const jobs = [
  // 5 Jobs - Google
  {
    title: "Frontend Engineer",
    description:
      "We're looking for a passionate Frontend Engineer to build scalable UI for billions of users. \n\n**Key Responsibilities:**\n- Build and maintain web apps using React and TypeScript.\n- Collaborate with designers and backend engineers.\n\n**Skills Required:** React, TypeScript, HTML, CSS, Git.",
    salary: 1800000,
    experience: "Mid",
    location: "Bangalore",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d2088206",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend Developer",
    description:
      "Join Google's cloud team as a Backend Developer.\n\n**Key Responsibilities:**\n- Design REST APIs, ensure performance and scalability.\n- Work on Go/Node.js microservices.\n\n**Skills Required:** Node.js, Go, MongoDB, Docker, Kubernetes.",
    salary: 2000000,
    experience: "Senior",
    location: "Hyderabad",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088206",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Software Engineering Intern",
    description:
      "**Internship Opportunity** at Google for undergrads passionate about tech.\n\n**Responsibilities:**\n- Assist in building scalable tools.\n- Contribute to real production projects.\n\n**Skills:** JavaScript, Java, Git, eagerness to learn.",
    salary: 45000,
    experience: "Intern",
    location: "Mumbai",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088206",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Cloud Infrastructure Engineer",
    description:
      "Work with Google Cloud team to deploy and maintain cloud-native systems.\n\n**Responsibilities:**\n- Setup CI/CD pipelines.\n- Automate deployments.\n\n**Skills:** AWS/GCP, Docker, Jenkins, Linux.",
    salary: 2200000,
    experience: "Senior",
    location: "Delhi NCR",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088206",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Full Stack Developer",
    description:
      "Work with Google's internal tools team on full-stack projects.\n\n**Skills:** React, Node.js, PostgreSQL, GraphQL.",
    salary: 1600000,
    experience: "Mid",
    location: "Pune",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088206",
    created_by: "67ed2976199c114283a6b316",
  },

  // 5 Jobs - Apple
  {
    title: "iOS Developer",
    description:
      "Join Apple’s mobile team to create world-class iOS applications.\n\n**Skills:** Swift, UIKit, Xcode, REST APIs.",
    salary: 1900000,
    experience: "Mid",
    location: "Bangalore",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d2088207",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend API Engineer",
    description:
      "Build scalable APIs that power Apple services.\n\n**Skills:** Node.js, Express, SQL, Redis.",
    salary: 1700000,
    experience: "Junior",
    location: "Hyderabad",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088207",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "AI Intern",
    description:
      "Work with Apple ML research team.\n\n**Skills:** Python, TensorFlow, NLP basics.",
    salary: 50000,
    experience: "Intern",
    location: "Delhi NCR",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088207",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "DevOps Engineer",
    description:
      "Maintain Apple’s CI/CD pipelines and infrastructure.\n\n**Skills:** Jenkins, Docker, Ansible, AWS.",
    salary: 1850000,
    experience: "Senior",
    location: "Pune",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088207",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Junior Frontend Engineer",
    description:
      "Assist UI teams on Apple Music web version.\n\n**Skills:** HTML, CSS, React, Git.",
    salary: 1200000,
    experience: "Junior",
    location: "Mumbai",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d2088207",
    created_by: "67ed2976199c114283a6b316",
  },

  // 5 Jobs - Meta
  {
    title: "React Developer",
    description:
      "Develop next-gen UI for Meta platforms.\n\n**Skills:** React, Redux, TypeScript.",
    salary: 1800000,
    experience: "Mid",
    location: "Bangalore",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d2088208",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Data Engineer",
    description:
      "Maintain data pipelines for Facebook Ads.\n\n**Skills:** Python, Spark, SQL.",
    salary: 2100000,
    experience: "Senior",
    location: "Hyderabad",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088208",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Web Dev Intern",
    description:
      "Join Meta for 6-month internship on Messenger team.\n\n**Skills:** JavaScript, React, Node.js.",
    salary: 40000,
    experience: "Intern",
    location: "Pune",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088208",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend Developer",
    description:
      "Work on Reels video backend service.\n\n**Skills:** Node.js, MongoDB, Redis.",
    salary: 1700000,
    experience: "Mid",
    location: "Mumbai",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088208",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Full Stack Developer",
    description:
      "Create collaboration tools for Meta employees.\n\n**Skills:** React, Node, PostgreSQL.",
    salary: 1600000,
    experience: "Junior",
    location: "Delhi NCR",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088208",
    created_by: "67ed2976199c114283a6b316",
  },

  // 5 Jobs - Amazon
  {
    title: "Backend Engineer",
    description:
      "Join Amazon’s logistics tech team.\n\n**Skills:** Java, Spring Boot, MongoDB.",
    salary: 2000000,
    experience: "Senior",
    location: "Hyderabad",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088209",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "SDE Intern",
    description:
      "Amazon SDE internship for undergrads.\n\n**Skills:** Java, Git, OOP concepts.",
    salary: 45000,
    experience: "Intern",
    location: "Pune",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088209",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Frontend Dev",
    description:
      "Work on Amazon’s web checkout experience.\n\n**Skills:** React, HTML, SCSS.",
    salary: 1600000,
    experience: "Mid",
    location: "Delhi NCR",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d2088209",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend API Developer",
    description:
      "Develop scalable APIs for Amazon Prime Video.\n\n**Skills:** Node, Express, SQL.",
    salary: 1900000,
    experience: "Senior",
    location: "Bangalore",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d2088209",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Full Stack Engineer",
    description:
      "Amazon Alexa team hiring Full Stack devs.\n\n**Skills:** React, Node, AWS.",
    salary: 1750000,
    experience: "Mid",
    location: "Mumbai",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d2088209",
    created_by: "67ed2976199c114283a6b316",
  },

  // 5 Jobs - Netflix
  {
    title: "React UI Engineer",
    description:
      "Help design Netflix’s playback experience.\n\n**Skills:** React, Redux, GraphQL.",
    salary: 1900000,
    experience: "Mid",
    location: "Delhi NCR",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d208820a",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Platform Engineer",
    description:
      "Manage Netflix backend platforms.\n\n**Skills:** Golang, AWS, Docker.",
    salary: 2200000,
    experience: "Senior",
    location: "Bangalore",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d208820a",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Intern - Engineering",
    description:
      "Internship at Netflix core tech.\n\n**Skills:** JavaScript, React, Basic AWS.",
    salary: 55000,
    experience: "Intern",
    location: "Hyderabad",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d208820a",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend Dev",
    description:
      "Work on Netflix search and recommendation engine.\n\n**Skills:** Python, Elasticsearch, MongoDB.",
    salary: 2000000,
    experience: "Senior",
    location: "Pune",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d208820a",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Full Stack Web Engineer",
    description:
      "Work on UI tools for Netflix admins.\n\n**Skills:** React, Node, MySQL.",
    salary: 1650000,
    experience: "Junior",
    location: "Mumbai",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d208820a",
    created_by: "67ed2976199c114283a6b316",
  },

  // 5 Jobs - Microsoft
  {
    title: "Frontend Developer",
    description:
      "Join Microsoft Office team for web apps.\n\n**Skills:** React, CSS Modules, TypeScript.",
    salary: 1850000,
    experience: "Mid",
    location: "Bangalore",
    category: "Frontend Developer",
    company: "684d8eb4bf427b64d208820b",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Backend Software Engineer",
    description:
      "Build backend for Teams and OneDrive.\n\n**Skills:** C#, .NET, SQL Server.",
    salary: 2100000,
    experience: "Senior",
    location: "Hyderabad",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d208820b",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Engineering Intern",
    description:
      "Join Microsoft for an internship on internal tools.\n\n**Skills:** JavaScript, React, Node.",
    salary: 50000,
    experience: "Intern",
    location: "Delhi NCR",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d208820b",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "DevOps Developer",
    description:
      "Maintain CI/CD for MS Azure.\n\n**Skills:** Azure, Docker, Jenkins.",
    salary: 1950000,
    experience: "Senior",
    location: "Mumbai",
    category: "Backend Developer",
    company: "684d8eb4bf427b64d208820b",
    created_by: "67ed2976199c114283a6b316",
  },
  {
    title: "Full Stack Web Engineer",
    description:
      "Help scale Microsoft Learning platform.\n\n**Skills:** React, Node, MongoDB.",
    salary: 1700000,
    experience: "Junior",
    location: "Pune",
    category: "FullStack Developer",
    company: "684d8eb4bf427b64d208820b",
    created_by: "67ed2976199c114283a6b316",
  },
];

// Seed function
const seedJobs = async () => {
  try {
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log("✅  Jobs inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting jobs:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from DB");
  }
};

seedJobs();
