// Keep album metadata separate from the chapter prepared in docs/projects/PATHWISE_CHAPTER.md.
export const projects = [
  {
    slug: 'pathwise',
    title: 'Pathwise',
    summary: 'Student records, risk signals and mentor follow-ups in one application.',
    role: 'End-to-end developer / builder',
    technologies: ['React', 'FastAPI', 'SQLAlchemy', 'scikit-learn'],
    githubUrl: 'https://github.com/Aditiiiii1291/Pathwise',
    demo: {
      type: 'hosted',
      url: 'https://pathwise-1-sibf.onrender.com',
      accessNote: 'Sign-in required; no public visitor credentials approved.',
      verificationNote: 'Public assets and health responded on 2026-09-16. Authenticated assessment was not reverified after an earlier missing-model error.',
    },
  },
  {
    slug: 'trafficiq',
    title: 'TrafficIQ',
    summary: 'Traffic-video analytics and simulated emergency-priority recommendations.',
    role: 'End-to-end developer / builder',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Computer vision'],
    githubUrl: 'https://github.com/Aditiiiii1291/TrafficIQ',
    demo: {
      type: 'hosted',
      url: 'https://ai-emergency-vehicle-priority-system.onrender.com',
      accessNote: 'Hosted demo; availability may vary.',
      verificationNote: 'Earlier review reached Render startup only; the workflow is not runtime-verified. No actual traffic-light control.',
    },
  },
  {
    slug: 'marketmind',
    title: 'MarketMind',
    summary: 'Customer-review analytics and concept simulation.',
    role: 'End-to-end developer / builder',
    technologies: ['React', 'Python', 'Streamlit'],
    githubUrl: 'https://github.com/Aditiiiii1291/MarketMind',
    demo: {
      type: 'local',
      accessNote: 'Local demo only; no hosted project link.',
      verificationNote: 'The local interface/version is pending confirmation. Several React views are placeholders in the reviewed source.',
    },
  },
] as const
