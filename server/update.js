import mongoose from "mongoose";
import { Job } from "./models/job.model.js";
import dotenv from "dotenv";
dotenv.config();

await mongoose.connect(process.env.MONGODB_URL);
console.log("✅ MongoDB connected");

// Description to set (same for all jobs)
const newDescription = `
<p>We are on the lookout for highly motivated and skilled engineers who are passionate about building reliable, scalable, and user-centric software solutions. As a key member of our development team, you will be involved in designing and developing core features that will directly impact millions of users worldwide.</p>
<br>
<p><strong>Key Responsibilities:</strong></p>
<br>
<ul>
  <li>Design, develop, test, and deploy high-performance web and backend applications.</li>
  <li>Work closely with cross-functional teams including product managers, designers, and other engineers to deliver quality products on time.</li>
  <li>Write clean, maintainable, and well-documented code following industry best practices.</li>
  <li>Participate actively in code reviews, system design discussions, and performance tuning.</li>
  <li>Continuously learn and adopt new technologies to improve system performance and maintainability.</li>
</ul>
<br>
<p><strong>Required Skills:</strong></p>
<br>
<ul>
  <li>Strong proficiency in JavaScript and experience with modern frameworks such as React, Node.js, or similar.</li>
  <li>Solid understanding of databases (SQL/NoSQL), RESTful APIs, and version control systems like Git.</li>
  <li>Experience with CI/CD tools, containerization (Docker), and cloud platforms (AWS, GCP, or Azure).</li>
  <li>Problem-solving attitude and ability to work independently or as part of a team.</li>
</ul>
<br>
<p><strong>Perks & Benefits:</strong></p>
<br>
<ul>
  <li>Competitive compensation with performance-based incentives.</li>
  <li>Flexible working hours and remote-friendly policies.</li>
  <li>Health insurance, mental wellness support, and learning budgets.</li>
  <li>Opportunity to work with world-class engineers and make an impact at scale.</li>
</ul>
<br>
<p>If you're someone who thrives in a fast-paced environment, loves solving challenging problems, and wants to work on products that shape the future — we’d love to hear from you.</p>
`;

// Update all jobs
const updateJobs = async () => {
  try {
    const jobs = await Job.find({});
    for (let job of jobs) {
      const randomSalary = Math.floor(Math.random() * 30) + 1; // 1 to 30
      job.description = newDescription;
      job.salary = randomSalary;
      await job.save();
    }
    console.log("✅ All jobs updated with new description and salary");
  } catch (err) {
    console.error("❌ Error updating jobs:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from DB");
  }
};

updateJobs();
