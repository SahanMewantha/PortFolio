export const metadata = {
  title: "Sahan - Web Developer, Designer, and Student",
  description: "Sahan is an undergraduate student at NIBM with expertise in web development, UI/UX design, and backend technologies. Explore his skills, credentials, and projects.",
  keywords: ["Sahan", "web developer", "designer", "NIBM", "Full Stack Developer", "web development", "UI/UX design"],
  author: "Sahan", // Note: 'author' is not a standard field in Next.js metadata, 'authors' is. Will use 'authors'.
  authors: [{ name: "Sahan" }], // Corrected usage
  openGraph: {
    title: "Sahan - Web Developer, Designer, and Student",
    description: "Sahan is an undergraduate student at NIBM with expertise in web development, UI/UX design, and backend technologies. Explore his skills, credentials, and projects.",
    images: [{ url: "https://www.sahanmewantha.me/sahan-profile.jpg" }],
    url: "https://www.sahanmewantha.me/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahan - Web Developer, Designer, and Student",
    description: "Sahan is an undergraduate student at NIBM with expertise in web development, UI/UX design, and backend technologies. Explore his skills, credentials, and projects.",
    images: ["https://www.sahanmewantha.me/sahan-profile.jpg"],
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
