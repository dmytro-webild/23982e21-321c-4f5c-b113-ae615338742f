"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";
import { Shield, Download, Zap } from "lucide-react";

export default function ExtensionPage() {
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

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Browser Extension"
          description="Real-time misinformation alerts as you browse. Powered by AI, verified by community."
          buttons={[
            { text: "Download Now", href: "https://chrome.google.com" },
            { text: "Learn More", href: "#features" },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/browser-window-showing-truthguard-extens-1772806230097-c428a5c8.png?_wi=2"
          imageAlt="Browser extension interface"
          showDimOverlay={true}
        />
      </div>

      <div id="features" data-section="features" className="py-24 bg-gradient-to-b from-background to-card">
        <FeatureCardNineteen
          title="Extension Features"
          description="Everything you need to verify claims while you browse."
          tag="Key Capabilities"
          tagIcon={Shield}
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              tag: "Instant Detection",
              title: "Real-Time Alerts",
              subtitle: "Get notified instantly when suspicious content appears",
              description: "Our extension analyzes web content in real-time, comparing claims against our verification database. Receive confidence scores and matching patterns for debunked narratives instantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/close-up-of-browser-extension-alert-noti-1772806229302-c8803791.png?_wi=2",
              imageAlt: "Extension alert notification",
              buttons: [{ text: "Download", href: "https://chrome.google.com" }],
            },
            {
              id: 2,
              tag: "Verification Score",
              title: "Confidence Metrics",
              subtitle: "Visual indicators of claim reliability",
              description: "See at a glance how reliable content is with our intuitive confidence score system. Color-coded indicators help you quickly assess whether information is verified, disputed, or still under review.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/confidence-score-visualization-showing-p-1772806228778-851eef69.png?_wi=2",
              imageAlt: "Confidence score interface",
              buttons: [{ text: "How It Works", href: "#how-it-works" }],
            },
            {
              id: 3,
              tag: "Safe Sharing",
              title: "One-Click Sharing",
              subtitle: "Share verified claims with context",
              description: "Share suspicious content with verification context already included. Our extension automatically adds fact-check links and warning labels, helping prevent misinformation spread across social media.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/share-interface-showing-one-click-verifi-1772806231792-db5abc6b.png?_wi=2",
              imageAlt: "Safe sharing interface",
              buttons: [{ text: "Start Sharing", href: "/verify" }],
            },
          ]}
        />
      </div>

      <div id="extension-demo" data-section="extension-demo" className="py-24 bg-background">
        <ProductCardThree
          title="Extension Features In Action"
          description="See what makes TruthGuard's browser extension the most powerful misinformation detector"
          tag="Available Now"
          tagIcon={Download}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "ext-1",
              name: "Real-Time Alert System",
              price: "FREE",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/close-up-of-browser-extension-alert-noti-1772806229302-c8803791.png?_wi=3",
              imageAlt: "Real-time alert system",
              initialQuantity: 1,
            },
            {
              id: "ext-2",
              name: "Confidence Score Display",
              price: "FREE",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/confidence-score-visualization-showing-p-1772806228778-851eef69.png?_wi=3",
              imageAlt: "Confidence score display",
              initialQuantity: 1,
            },
            {
              id: "ext-3",
              name: "One-Click Sharing",
              price: "FREE",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/share-interface-showing-one-click-verifi-1772806231792-db5abc6b.png?_wi=3",
              imageAlt: "One-click sharing",
              initialQuantity: 1,
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="py-24 bg-background">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Install TruthGuard?"
          description="Join thousands of users protecting themselves from misinformation. Download our browser extension for free and start verifying claims instantly."
          tagIcon={Zap}
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={true}
          inputPlaceholder="Enter your email address"
          buttonText="Get Extension"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. We respect your privacy and never share your email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-network-visualization-showing-int-1772806228357-12377876.png?_wi=3"
          imageAlt="Global verification network"
          logoText="TruthGuard"
          copyrightText="© 2025 TruthGuard. Fighting misinformation, protecting democracy."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}