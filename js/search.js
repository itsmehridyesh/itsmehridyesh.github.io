document.addEventListener("DOMContentLoaded", () => {
  // ✅ Normalize helper for cleaner matching
function normalize(text) {
  return text.toLowerCase().trim();
}

function matchCommand(userInput) {
  const query = normalize(userInput);
  for (const entry of enhancedCommands) {
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalize(keyword);
      if (query.includes(normalizedKeyword) || normalizedKeyword.includes(query)) {
        return entry.command;
      }
    }
  }
  return null;
}

  // ✅ Dataset for command matching ()
  const enhancedCommands = [   {
    command: "summary",
    description: "Overview of professional experience and career trajectory",
    keywords: [
      "summary", "career summary", "overview", "about", "background", "work summary",
      "professional summary", "describe yourself", "what's your background",
      "How many years of professional experience do you have?",
      "What industries have you worked in during your career?",
      "Are you comfortable discussing your career journey with an HR representative?"
    ]
  },
  {
    command: "profile",
    description: "Brief professional profile and elevator pitch",
    keywords: [
      "profile", "who are you", "introduction", "professional summary", "describe your profile", "personal intro",
      "What is your full name?"
    ]
  },
  {
    command: "experience",
    description: "Detailed work history, job roles, and responsibilities across past employers",
    keywords: [
      "experience", "work history", "employment", "job history", "career", "roles held",
      "where have you worked", "what was your role", "past companies",
      "Can you describe your current role and responsibilities?",
      "What is your current job title?",
      "Can you describe a typical day in your current role?",
      "Can you share an example of a major challenge you faced and how you resolved it?",
      "Have you worked in international teams or global projects?",
      "What is your experience with managing budgets or resources?",
      "Can you describe a time when you had to adapt to a major change at work?",
      "What is your experience with presenting to stakeholders or clients?",
      "What is your experience with mentoring or coaching colleagues?",
      "Can you share an example of a time you received constructive feedback and how you acted on it?",
      "What is your experience with training or onboarding new team members?",
      "Can you share an example of a time you had to make a difficult decision at work?",
      "Can you describe a time when you had to step outside your comfort zone at work?",
      "Can you share an example of a time you successfully negotiated with a client or stakeholder?",
      "Are you open to discussing your leadership experiences with an HR representative?"
    ]
  },
  {
    command: "roles",
    description: "Key job titles and role designations held",
    keywords: [
      "roles", "positions", "job titles", "designations", "responsibilities", "title",
      "What is your current job title?"
    ]
  },
  {
    command: "skills",
    description: "Technical and soft skills across cybersecurity, automation, and development",
    keywords: [
      "skills", "skillset", "technical skills", "soft skills", "strengths", "expertise",
      "core competencies", "describe your skills", "your key strengths", "cybersecurity skills",
      "What are your key technical skills?",
      "How do you stay updated with the latest trends in your field?",
      "How do you ensure quality and accuracy in your work?",
      "Can you describe a time when you had to learn something new quickly?",
      "What is your experience with using data to drive decisions?",
      "What is your experience with using analytics or metrics to measure success?",
      "How do you ensure continuous improvement in your work?"
    ]
  },
  {
    command: "techstack",
    description: "Technology stack, tools, frameworks, and programming languages used",
    keywords: [
      "tech stack", "tools", "technologies", "frameworks", "platforms", "languages",
      "python", "flask", "node", "dask", "pyspark", "mongodb",
      "What tools or technologies do you use most frequently in your work?",
      "What is your experience with using project management tools or software?"
    ]
  },
  {
    command: "education",
    description: "Academic background, degrees, and certifications in progress (ISACA AAIA)",
    keywords: [
      "education", "academic background", "qualifications", "degrees", "university",
      "college", "certifications", "academic experience"
    ]
  },
  {
    command: "certifications",
    description: "Security and professional certifications",
    keywords: [
      "certification", "certifications", "certified", "licenses", "credentials",
      "cybersecurity certificates", "industry certifications", "what are your certifications?",
      "What certifications or training programs have you completed?"
    ]
  },
  {
    command: "projects",
    description: "Notable cybersecurity, AI, automation, and freelance projects",
    keywords: [
      "projects", "personal projects", "professional projects", "cybersecurity projects",
      "side projects", "portfolio", "describe your projects",
      "Have you led any teams or projects? If yes, can you elaborate?",
      "Can you share an example of a successful project you’ve led?",
      "Can you describe a time when you exceeded expectations at work?",
      "Can you share an example of a time you demonstrated creativity in solving a problem?",
      "What is the most challenging project you’ve worked on, and how did you overcome the challenges?",
      "What is your experience with managing multiple projects simultaneously?"
    ]
  },
  {
    command: "awards",
    description: "Honors, accolades, and recognitions received",
    keywords: [
      "awards", "honors", "recognitions", "accolades", "distinctions", "industry awards"
    ]
  },
  {
    command: "publications",
    description: "Articles, advisories, CVEs, or published research",
    keywords: [
      "publications", "articles", "blogs", "whitepapers", "cve advisories",
      "research", "writeups"
    ]
  },
  {
    command: "presentations",
    description: "Talks, webinars, technical sessions, or conferences spoken at",
    keywords: [
      "presentations", "talks", "webinars", "conference sessions", "lectures", "keynotes"
    ]
  },
  {
    command: "contact",
    description: "Professional contact details and connection methods",
    keywords: [
      "contact", "linkedin", "email", "how to reach", "connect", "contact info"
    ]
  },
  {
    command: "linkedin",
    description: "LinkedIn profile and messaging",
    keywords: [
      "linkedin", "linkedin profile", "connect on linkedin", "profile link", "linkedin message"
    ]
  },
  {
    command: "goals",
    description: "Career goals and aspirations",
    keywords: [
      "goals", "career goals", "objectives", "future plans", "long term goals", "aspirations",
      "What are your long-term career aspirations?",
      "How do you approach setting and achieving goals?",
      "Are you open to discussing your career goals with an HR representative?"
    ]
  },
  {
    command: "motivation",
    description: "Motivation behind applying or choosing this career",
    keywords: [
      "motivation", "why this role", "reason for applying", "drive", "passion", "career motivation",
      "What motivates you to excel in your career?",
      "What is the most rewarding aspect of your job?",
      "What inspired you to pursue your current career path?"
    ]
  },
  {
    command: "notice_period",
    description: "Current notice period and availability to join",
    keywords: [
      "notice period", "availability", "joining date", "start date", "when can you join"
    ]
  },
  {
    command: "relocation",
    description: "Willingness to relocate or travel for work",
    keywords: [
      "relocation", "ready to relocate", "move locations", "travel", "relocate"
    ]
  },
  {
    command: "salary",
    description: "Compensation expectations",
    keywords: [
      "salary", "expected salary", "ctc", "pay expectation", "remuneration",
      "What are your salary expectations?"
    ]
  },
  {
    command: "references",
    description: "Professional references or recommendations",
    keywords: [
      "references", "referees", "recommendations", "endorsements", "past managers", "who can vouch for you"
    ]
  },
  {
    command: "languages",
    description: "Languages spoken or written fluently",
    keywords: [
      "languages", "language proficiency", "multilingual", "spoken languages", "fluency"
    ]
  },
  {
    command: "culture_fit",
    description: "Values and compatibility with workplace culture",
    keywords: [
      "culture", "values", "culture fit", "organizational fit", "workplace preferences",
      "How do you ensure effective communication within a team?",
      "What is your approach to building relationships with colleagues and stakeholders?",
      "How do you handle situations where you disagree with a decision at work?",
      "How do you approach giving feedback to colleagues or team members?",
      "How do you approach building trust within a team?"
    ]
  },
  {
    command: "work_style",
    description: "Preferred collaboration methods (remote, hybrid, team-oriented)",
    keywords: [
      "work style", "collaboration", "remote", "hybrid", "team work", "work preference",
      "What is your preferred working style—independent or collaborative?",
      "What is your preferred method of communication at work?",
      "What is your experience with cross-functional collaboration?",
      "What is your experience with working under tight deadlines?",
      "What is your experience with remote or hybrid work environments?",
      "How do you approach prioritizing tasks when everything feels urgent?",
      "What is your experience with working in fast-paced environments?",
      "Are you open to discussing your adaptability and problem-solving skills with an HR representative?",
      "What is your approach to problem-solving in high-pressure situations?"
    ]
  },
  {
    command: "ai_security",
    description: "Security assessments of AI/LLM systems",
    keywords: [
      "ai security", "llm security", "prompt injection", "data poisoning", "model vulnerabilities",
      "secure transformer", "ai threat modeling", "ai risk", "how do you secure ai"
    ]
  },
  {
    command: "osint",
    description: "Open Source Intelligence automation and frameworks",
    keywords: [
      "osint", "open source intelligence", "threat feeds", "intel feeds", "python osint", "osint automation"
    ]
  },
  {
    command: "penetration_testing",
    description: "Web, mobile, cloud, network and thick client pentesting",
    keywords: [
      "pentest", "penetration testing", "security testing", "ethical hacking", "web pentest",
      "mobile pentest", "cloud testing", "atm pentest", "how do you conduct pentests"
    ]
  },
  {
    command: "cloud_security",
    description: "Security testing of AWS and Azure environments",
    keywords: [
      "cloud security", "aws security", "azure testing", "cloud compliance", "cloud assessment",
      "how do you secure cloud"
    ]
  },
  {
    command: "malware_analysis",
    description: "Experience analyzing malware and reverse engineering",
    keywords: [
      "malware analysis", "reverse engineering", "static analysis", "dynamic analysis",
      "malware behavior", "malware forensics", "how do you analyze malware"
    ]
  },
  {
    command: "risk_management",
    description: "Risk assessments, IT auditing, and vulnerability management",
    keywords: [
      "risk management", "it audit", "vulnerability assessment", "security risk", "compliance audits",
      "how do you manage risk",
      "What is your experience with handling confidential or sensitive information?"
    ]
  },
  {
    command: "automation",
    description: "Scripting, CI/CD fundamentals, and infrastructure automation",
    keywords: [
      "automation", "script", "python", "bash", "github actions", "ci/cd", "pipeline automation",
      "how do you automate tasks"
    ]
  }  ];

function matchCommand(userInput) {
  const query = normalize(userInput);
  for (const entry of enhancedCommands) {
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalize(keyword);
      if (query.includes(normalizedKeyword) || normalizedKeyword.includes(query)) {
        return entry.command;
      }
    }
  }
  return null;
}

  // ✅ Fuse.js to search command, description, AND keywords
  const fuse = new Fuse(enhancedCommands, {
    keys: ["command", "description", "keywords"],
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true
  });

  const input = document.getElementById("searchInput");
  const suggestionsBox = document.createElement("div");
  suggestionsBox.classList.add("suggestions");
  input.parentNode.appendChild(suggestionsBox);

  input.addEventListener("input", () => {
    const query = normalize(input.value); // 🔍 Normalized input
    suggestionsBox.innerHTML = "";

    if (!query) return;

    const results = fuse.search(query);
    if (results.length > 0) {
      results.slice(0, 6).forEach(r => {
        const btn = document.createElement("button");
        btn.textContent = r.item.command;
        btn.addEventListener("click", () => doCommand(r.item.command));
        suggestionsBox.appendChild(btn);
      });
    } else {
      const div = document.createElement("div");
      div.textContent = `❓ No results for "${input.value}". Try: summary, skills, experience...`;
      suggestionsBox.appendChild(div);
    }
  });

  document.getElementById("searchForm").addEventListener("submit", e => {
    e.preventDefault();
    const query = normalize(input.value); // 🔍 Also normalize here
    if (!query) return;

    const matches = fuse.search(query);
    if (matches.length > 0) {
      doCommand(matches[0].item.command);
    } else {
      openOverlay(`❓ No match for "${input.value}". Try: summary, skills, experience.`);
    }
    suggestionsBox.innerHTML = "";
    input.value = "";
  });

  // 🎯 Overlay command executor
  function doCommand(cmd) {
    suggestionsBox.innerHTML = "";
    input.value = "";
    overlayContent.textContent = "";
    overlay.classList.remove("hidden");
    typeOutOverlay(commandContent[cmd] || "No content available.");
  }
});
