const certs = [
  "AWS Security Specialty", "MCITP", "ISO 27001:2013 LA",
  "CISA", "CISM", "CRISC", "CEH", "ECSA", "CTIA", "RSA SA", "Cyber Forensics"
];

// Typewriter

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("typewriter-text");
  const cursor = document.getElementById("cursor");
  const text = "Hridyesh";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      intro.textContent += text.charAt(i++);
      setTimeout(typeWriter, 80);
    } else {
      cursor.style.animation = "none";
      cursor.style.opacity = 0;
    }
  }

  setTimeout(typeWriter, 400);
});


// Overlay Terminal Text Content


const commandContent = {

  // --- Profile & Summary ---

  

  summary: `🔍 Snapshot of Hridyesh:

- 10+ years in Cybersecurity
- Industries: Banking, SaaS, GovTech, FinTech, and BFSI
- Roles: Cybersecurity Specialist, Lead Auditor, GRC Specialist, Security Automation Developer, Web Developer, Security Architect, Penetration Tester
- Focus: IT Audit, CloudSec, Risk Management, Strategy`,

  profile: `👤 Profile:
Results-oriented security expert blending technical depth in AI, cloud, and cybersecurity. Passionate about building robust, automation-focused solutions and mentoring cross-functional teams to deliver business impact.`,

  about: `👋 About Me:
Driven security professional striving for continuous improvement, resilient architecture, and open communication. Eager to solve complex challenges in dynamic, mission-critical environments.`,

  // --- Experience & Roles ---
  experience: `🔍 Here's a detailed breakdown of my professional experience:

- 🟢 Amazon India (Aug 2023 – Present): Third Party Security Specialist  
- 🟡 BMC Software (Apr 2021 – Jul 2023): Consultant – Threat Management  
- 🔵 SecureLayer7 (Apr 2019 – Apr 2021): Consultant – Cyber Security  
- 🟠 Tata Consultancy Services (Jan 2018 – Mar 2019): System Engineer – Cyber Security  
- 🟣 Gridinfocom Pvt. Ltd. (Sep 2015 – Dec 2017): Consultant – Information Security  
- 🧪 Internships before 2015: Web development, CCNA, security training, freelance gigs.`,

  roles: `👔 Roles Held:
- Cybersecurity Specialist
- Threat Management Consultant
- Incident Responder
- Lead Auditor
- Security Automation Developer
- Security Architect
- Web Developer
- Technical Trainer
- Penetration Tester`,

  // --- Certifications & Skills ---
  certifications: `📜 Certifications:

✓ CISA  
✓ CISM  
✓ CRISC  
✓ AWS Security Specialty  
✓ ISO 27001:2013 LA  
✓ CEH  
✓ ECSA  
✓ CTIA  
✓ RSA SA  
✓ Cyber Forensics`,

  skills: `🧠 Top Skills:

• Risk Management  
• Cloud Security (AWS/Azure)  
• IT Audit  
• Web Development  
• Security Operations Management  
• Audit, GRC, Red/Blue Teaming  
• Security Architecture  
• Cyber Forensics  
• Penetration Testing  
• Vulnerability Management  
• Incident Response  
• Security Automation  
• Python, Node.js, JavaScript  
• TypeScript  
• Threat Intelligence`,

  techstack: `🧰 Tech Stack:
Python, NodeJS, JavaScript, TypeScript, Flask, Pandas, NumPy, AWS, Azure, SIEM, IAM, SafeBreach, GitHub, Linux/Windows (OSINT, scripting), REST APIs, Vercel, Replit.`,

  competencies: `💡 Core Competencies:
Cloud and cybersecurity, automation, risk analytics, threat hunting, compliance, problem-solving, team collaboration.`,

  expertise: `🏅 Areas of Expertise:
CloudSec, Secure Architecture, Audit & GRC, AI/ML in Security, Incident and Breach Response, Security Education.`,

  // --- Education & Development ---
  education: `🎓 Education:
- B.Tech in Computer Science, XYZ University, 2014–2018  
- ISO 27001:2013 Lead Auditor (BSI)  
- Ongoing: ISACA AAIA (GenAI Security)`,

  training: `🏫 Trainings:
Workshops on Red/Blue Teaming, SIEM, cloud security, DevSecOps, leadership communication, and secure software development.`,

  // --- Goals & Motivation ---
  goals: `🎯 Career Goals:
- Lead secure AI/cloud transformation initiatives  
- Architect automation-first cybersecurity programs  
- Drive innovation in ML-driven threat detection  
- Mentor teams in building a culture of security-first engineering`,

  motivation: `🚀 Motivation:
Driven by a passion for using AI and automation to protect digital innovation at scale, enabling teams to solve complex, meaningful challenges.`,

  // --- Highlights & Achievements ---
  highlights: `🚀 Key Achievements:

• Conducted security assessments of LLMs and AI platforms (prompt injection, data leakage)  
• Built ML models with transformer architectures for NLP/security  
• Developed AI-driven chatbots and recommendation engines  
• Led vendor security risk assessments and security reviews  
• Built dashboards and threat reports using Python  
• Mapped attack outcomes to MITRE ATT&CK  
• Automated attacker simulations and endpoint tests  
• Created custom Python/Node.js tools for OSINT, threat intel  
• Integrated threat intel feeds (open/commercial)  
• Pen-tested cloud, mobile, API, and network stacks  
• Wrote technical and executive security reports  
• Authored advisories on zero-days and CVEs  
• Built virtual labs for malware and exploit analysis  
• Cross-team collaboration on threat and incident response`,

  awards: `🏆 Awards & Recognition:
- Best Security Project Award (2022, BMC Software)  
- Going Above and Beyond Award (2021, SecureLayer7) 
- Amazon Customer Obsession Award (2023)
- Led Center of Excellence initiatives for security automation (TCS)
- Client recognition for audit and compliance delivery`,

  // --- Projects & Contributions ---
  projects: `🛠 Projects:

- Business websites and freelance dev work  
- AI-driven security assessment tool for LLMs  
- Custom cybersecurity-focused ML models  
- SIEM and IAM setup for GovTech and fintech  
- Threat Intelligence dashboards  
- Internal phishing simulation program  
- Vulnerability management automation  
- OSINT/threat intel pipelines  
- Custom frameworks in Python and Node.js`,

  contributions: `🤝 Major Contributions:
- Delivered threat intelligence and incident response guidance  
- Mentored junior engineers and security teams  
- Led security tool development and collaborative research`,

  publications: `📝 Publications & Research:
- "Securing Language Models: A Guide for MDR Teams" (2024 Whitepaper)  
- "Automation in Threat Intelligence: Future Directions" (2023 Conference Paper)  
- Blog series: Red Teaming Cloud Workloads on Medium  
- Speaker: 'AI & Security Automation', DefCon India Chapter (2023)  
- Contributor to open-source advisories and security consortiums`,

  presentations: `📢 Presentations & Talks:
- Speaker, DefCon India (2023)  
- Panelist, Cloud Security Summit (2022)  
- Guest: Secure AI Adoption in Business webinar series`,

  // --- HR/Recruiter FAQs ---
  "notice period": `⏳ Notice Period & Availability:
Immediate to 1 month (negotiable). Open to remote and on-site roles; flexible for urgent/staggered onboarding.`,

  relocation: `🌍 Willingness to Relocate:
Yes — open to relocation within India or globally. Comfortable with business travel and hybrid work.`,

  salary: `💸 Salary Expectation:
Competitive and industry-aligned (details upon engagement). Flexible for high-impact roles.`,

  references: `📞 References:
Available on request. Endorsed by leaders at Amazon, BMC, SecureLayer7, and TCS.`,

  languages: `🗣️ Languages:
English (fluent), Hindi (native), basic German. Open to upskilling in other languages.`,

  // --- Fit & Work Style ---
  "culture fit": `🤝 Culture Fit:
Value transparency, diversity, innovation, and feedback. Thrive in collaborative, learning-first environments.`,

  "work style": `🧑‍💻 Work Style:
Results-focused, proactive communicator with experience in remote, hybrid, and on-site setups.`,

  strengths: `💪 Strengths:
Problem-solving, automation, secure architecture, audit leadership, and effective cross-functional communication.`,

  "areas of improvement": `📈 Areas for Development:
- Advanced data science in security  
- Public speaking at global conferences  
- AI explainability for non-technical users`,

  // --- Other & Personal ---
  interests: `🎨 Interests & Hobbies:
Blogging, open-source research, chess, trekking, tech podcasts, and travel.`,

  compliance: `🛡️ Compliance & Regulatory:
ISO 27001/27701, PCI-DSS, SOC2, GDPR, cloud compliance and audits.`,

  diversity: `🌈 Diversity & Inclusion:
Mentor diverse engineers, support women in tech, and advocate for inclusive culture.`,

  // --- Contact Info ---
  contact: `📨 Contact:
- Email: mr.hridyesh@gmail.com  
- LinkedIn: https://linkedin.com/in/hridyesh  
- Based in India (remote-ready, open to global opportunities)`
};



// Overlay logic
const overlay = document.getElementById("terminalOverlay");
const overlayContent = document.getElementById("overlayContent");

document.querySelectorAll("[data-command]").forEach(btn => {
  btn.addEventListener("click", () => {
    const cmd = btn.dataset.command;

    // 🛑 Skip terminal overlay for contact
    if (cmd === "contact") return;

    overlayContent.textContent = "";
    typeOutOverlay(commandContent[cmd] || "No content available.");
    overlay.classList.remove("hidden");
  });
});

function typeOutOverlay(text, speed = 25) {
  let index = 0;
  function type() {
    if (index < text.length) {
      overlayContent.textContent += text.charAt(index++);
      setTimeout(type, speed);
    }
  }
  type();
}

document.querySelector(".dot.red").addEventListener("click", () => {
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
  }
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  toggle.textContent = "🌞";
} else if (savedTheme === "dark") {
  document.body.classList.remove("light");
  toggle.textContent = "🌙";
} else {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light");
    toggle.textContent = "🌞";
  }
}

toggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  toggle.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Scroll Arrows
const scrollBox = document.querySelector(".scroll-buttons");
document.querySelector(".scroll-arrow.left").addEventListener("click", () => {
  scrollBox.scrollBy({ left: -150, behavior: "smooth" });
});
document.querySelector(".scroll-arrow.right").addEventListener("click", () => {
  scrollBox.scrollBy({ left: 150, behavior: "smooth" });
});

// Copy email to clipboard on desktop
const email = "mr.hridyesh@gmail.com";
const emailBtn = document.getElementById("emailBtn");
const copyMsg = document.getElementById("copyMsg");

emailBtn.addEventListener("click", (e) => {
  if (window.innerWidth > 768) {
    e.preventDefault(); // Prevent opening email client on desktop
    navigator.clipboard.writeText(email).then(() => {
      copyMsg.classList.remove("hidden");
      setTimeout(() => {
        copyMsg.classList.add("hidden");
      }, 1800);
    });
  }
});

/*  Resume Modal Logic */

document.addEventListener("DOMContentLoaded", () => {
  const resumeModal = document.getElementById("resumeModal");
  const openResumeBtn = document.getElementById("resumePreviewBtn");
  const closeResumeBtn = document.getElementById("closeResumeModal");
  const viewBtn = document.getElementById("viewResume");
  const downloadBtn = document.getElementById("downloadResume");
  const iframe = resumeModal.querySelector("object");

  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener("click", () => {
      resumeModal.classList.remove("hidden");

      // Check if iframe loads or fallback
      if (window.innerWidth < 768 || !iframe.contentDocument) {
        iframe.style.display = "none";
        viewBtn.style.display = "none";
        const fallbackMsg = document.createElement("div");
        fallbackMsg.innerHTML = `
          <p style="margin-top: 1rem;">⚠️ Your device might not support preview.<br>
          <a href="hrdresume.pdf" download style="color: var(--fg); text-decoration: underline;">Click here to download resume</a>
          </p>`;
        iframe.parentElement.appendChild(fallbackMsg);
      }
    });

    closeResumeBtn.addEventListener("click", () => {
      resumeModal.classList.add("hidden");
    });

    if (viewBtn) {
      viewBtn.addEventListener("click", () => {
        window.open("hrdresume.pdf", "_blank");
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        const a = document.createElement("a");
        a.href = "hrdresume.pdf";
        a.download = "Hridyesh_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }
  }
});



/* --smart search */

const smartSearchData = {
  "goal": `🎯 Career Goal:
To lead and architect security-first solutions at the intersection of AI, cloud, and automation, empowering secure digital transformation for organizations worldwide.`,

  "experience": `💼 Experience:

• Amazon India @Bengaluru (Aug 2023–Present): Third Party Security Specialist  
• BMC Software @Pune (Apr 2021–Jul 2023): Consultant – Threat Management  
• SecureLayer7 @Pune (Apr 2019–Apr 2021): Consultant – Cyber Security  
• TCS @Kolkata (Jan 2018–Mar 2019): System Engineer – Cyber Security Practice  
• Gridinfocom @Gurugram (Sep 2015–Dec 2017): Consultant – InfoSec  
• Internships: Web Dev, CCNA, Security Trainer, etc.`,

  "location": `📍 Current Location:
India (Remote-friendly and open to relocation globally)`,

  "resume": `📄 Resume:
Use the 'Download Resume' button or [Click here to download](hrdresume.pdf)`,

  "certs": commandContent.certifications,
  "skills": commandContent.skills,
  "projects": commandContent.projects,
  "summary": commandContent.summary,
  "highlights": commandContent.highlights,

  "why": `🤝 Why Me?

I bring a rare combination of deep technical expertise in cybersecurity, hands-on experience with AI and automation, and a consultative mindset for solving strategic challenges across cloud, compliance, and operations.`
};

// Smart Search Q&A Logic
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

// Suggestion dropdown (optional)
const suggestionsBox = document.createElement("div");
suggestionsBox.classList.add("suggestions");
searchInput.parentNode.appendChild(suggestionsBox);

const keywords = Object.keys(smartSearchData);

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (!val) return;

  const matches = keywords.filter(k => k.includes(val));
  matches.forEach(match => {
    const div = document.createElement("div");
    div.textContent = match;
    div.addEventListener("click", () => {
      searchInput.value = match;
      suggestionsBox.innerHTML = "";
      handleSmartSearch(match);
    });
    suggestionsBox.appendChild(div);
  });
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  handleSmartSearch(query);
});

function handleSmartSearch(query) {
  const answer = smartSearchData[query] || `❓ Sorry, I couldn’t find anything related to "${query}". Try keywords like: ${keywords.join(', ')}`;
  overlayContent.textContent = "";
  overlay.classList.remove("hidden");
  typeOutOverlay(answer, 25);
}

/* Improvements */

/* overlayContent.innerHTML = "🤔 Thinking<span class='dots'></span>";
document.body.style.overflow = 'hidden';
document.body.style.overflow = ''; */

// Contact modal logic
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.getElementById("contact-btn");
  const contactModal = document.getElementById("contact-modal");
  const redCloseBtn = document.querySelector(".mac-btn.red"); // 🟥 bind the red close

  contactBtn.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  });

  function closeModal() {
    contactModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  redCloseBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

document.addEventListener("click", function (e) {
  const modal = document.getElementById("contact-modal");
  const content = document.querySelector(".modal-content");

  // Close modal if visible and click is outside iframe/modal-content
  if (
    modal && !modal.classList.contains("hidden") &&
    !content.contains(e.target) &&
    !e.target.closest("#contact-btn")
  ) {
    closeModal();
  }
});

/** accordian effect */

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const currentItem = header.parentElement;

    // Close all other items
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });

    // Toggle current item
    currentItem.classList.toggle('active');
  });
});
