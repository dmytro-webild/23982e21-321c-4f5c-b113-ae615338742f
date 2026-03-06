"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Users, Mail, Zap } from "lucide-react";

export default function VerifyPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Features", id: "features" },
    { name: "Impact", id: "impact" },
    { name: "Platform", id: "platform" },
    { name: "About", id: "about" },
  ];

  const navButton = {
    text: "Get Started",
    href: "/verify",
  };

  const footerColumns = [
    {
      title: "Product",
      items: [
        { label: "Browser Extension", href: "/extension" },
        { label: "Verification Platform", href: "/verify" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Mission", href: "/" },
        { label: "Impact Report", href: "/impact" },
        { label: "Careers", href: "https://careers.truthguard.org" },
      ],
    },
    {
      title: "Community",
      items: [
        { label: "Join as Fact-Checker", href: "/verify" },
        { label: "API Documentation", href: "https://docs.truthguard.org" },
        { label: "GitHub (Open Source)", href: "https://github.com/truthguard" },
        { label: "Research Papers", href: "https://research.truthguard.org" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLargeSizeMediumTitles"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="TruthGuard"
          navItems={navItems}
          button={navButton}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works" className="py-24 bg-background">
        <MediaAbout
          tag="The Process"
          title="How to Verify Claims"
          description="Submit suspicious content for expert and community verification. Our four-layer system combines AI analysis, crowdsourcing, expert review, and consensus building to deliver accurate results."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/four-layer-verification-system-diagram-s-1772806231382-f9200383.png"
          imageAlt="Four-layer verification process"
          useInvertedBackground={false}
          buttons={[
            { text: "Start Verifying", href: "#contact" },
            { text: "Learn More", href: "/extension" },
          ]}
        />
      </div>

      <div id="verification-platform" data-section="verification-platform" className="py-24 bg-gradient-to-b from-background to-card">
        <TestimonialCardTen
          title="Verification Platform Testimonials"
          description="Hear from fact-checkers, journalists, and community moderators using TruthGuard to protect their communities."
          tag="User Stories"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",
              title: "Transformed Our Fact-Checking Workflow",
              quote: "TruthGuard's crowdsourced verification platform cut our fact-checking time by 60%. We can now respond to false narratives within hours instead of days.",
              name: "Dr. Maria Santos",
              role: "Director of Fact-Checking, FactVerify International",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-dr-maria-santos-1772806228264-68ed93aa.png",
              imageAlt: "Dr. Maria Santos",
            },
            {
              id: "2",
              title: "Protecting Vulnerable Communities",
              quote: "During the election crisis in our region, TruthGuard detected 87% of false voting rumors before they spread. It genuinely protected democratic integrity.",
              name: "James Okonkwo",
              role: "Election Observer, Democratic Monitors Coalition",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-james-okonkwo-e-1772806228025-66594ee7.png",
              imageAlt: "James Okonkwo",
            },
            {
              id: "3",
              title: "Essential for Humanitarian Response",
              quote: "When the hurricane hit, misinformation spread faster than real information. TruthGuard's real-time verification meant accurate aid information reached people who needed it most.",
              name: "Elena Volkov",
              role: "Regional Coordinator, International Relief Services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-elena-volkov-hu-1772806228588-d3849e80.png",
              imageAlt: "Elena Volkov",
            },
            {
              id: "4",
              title: "Building Media Literacy",
              quote: "Our students use TruthGuard's fact trails to understand how misinformation spreads. It's the best educational tool we've found for teaching critical thinking.",
              name: "Professor Aisha Patel",
              role: "Media Literacy Educator, Global University",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-professor-aisha-1772806228869-57a9b6be.png",
              imageAlt: "Professor Aisha Patel",
            },
            {
              id: "5",
              title: "AI That Actually Works Across Cultures",
              quote: "Most misinformation tools have Western bias. TruthGuard's diverse training data and cultural nuance scoring finally makes verification fair for our Asian market.",
              name: "Chen Wei",
              role: "Head of Content Moderation, AsiaTech Media",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-chen-wei-head-o-1772806229050-0388415f.png",
              imageAlt: "Chen Wei",
            },
            {
              id: "6",
              title: "Scalable and Transparent",
              quote: "We deployed TruthGuard's open-source core at our NGO. The transparency and scalability let us protect 50 countries with minimal resources.",
              name: "Kwame Mensah",
              role: "Executive Director, Digital Rights Africa",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-kwame-mensah-ng-1772806229421-05914924.png",
              imageAlt: "Kwame Mensah",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="py-24 bg-background">
        <ContactCenter
          tag="Get In Touch"
          title="Start Verifying Claims Today"
          description="Join our community of fact-checkers and help us combat misinformation. Submit your first claim for verification or sign up to become an expert reviewer."
          tagIcon={Mail}
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={true}
          inputPlaceholder="Enter your email address"
          buttonText="Start Free"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. We respect your privacy and never share your email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-network-visualization-showing-int-1772806228357-12377876.png"
          imageAlt="Global verification network"
          logoText="TruthGuard"
          copyrightText="© 2025 TruthGuard. Fighting misinformation, protecting democracy."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}