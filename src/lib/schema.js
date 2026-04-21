export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://momarzouq.com",
  name: "Mohamed Marzouq",
  url: "https://momarzouq.com",
  description:
    "Full-stack software engineer, mentor, and content creator helping Arab developers level up.",
  email: "hello@momarzouq.com",
  telephone: null,
  image: "https://momarzouq.com/momarzouq.jpeg",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: [
    "https://www.youtube.com/@momarzouq",
    "https://www.linkedin.com/in/momarzouq/",
    "https://www.instagram.com/momarzouq/",
    "https://github.com/momarzouq",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "React",
    "Node.js",
    "TypeScript",
    "System Design",
    "AI & Automation",
    "Technical Mentorship",
  ],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mohamed Marzouq - Software Engineering Services",
  description:
    "Full-stack development, system design, and technical mentorship services",
  url: "https://momarzouq.com",
  telephone: null,
  image: "https://momarzouq.com/momarzouq.jpeg",
  areaServed: [
    {
      "@type": "Place",
      name: "Arab World",
    },
    {
      "@type": "Place",
      name: "Global",
    },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Full-Stack Development",
      description:
        "Building production-grade applications with modern tech stack",
    },
    {
      "@type": "Offer",
      name: "System Design Consulting",
      description: "Designing scalable architectures and distributed systems",
    },
    {
      "@type": "Offer",
      name: "Technical Mentorship",
      description: "One-on-one coaching for career growth and interviews",
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://momarzouq.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://momarzouq.com/#about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Work",
      item: "https://momarzouq.com/#skills",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Videos",
      item: "https://momarzouq.com/#videos",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://momarzouq.com/#contact",
    },
  ],
};
