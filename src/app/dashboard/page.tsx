"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  TrendingDown,
  Globe,
  Heart,
  Zap,
  Shield,
  Mail,
} from "lucide-react";

export default function DashboardPage() {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

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
      <div id="nav" data-section="nav" className="sticky top-0 z-50">
        <NavbarStyleCentered
          brandName="TruthGuard"
          navItems={[
            { name: "How It Works", id: "how-it-works" },
            { name: "Features", id: "features" },
            { name: "Impact", id: "impact" },
            { name: "Platform", id: "platform" },
            { name: "About", id: "about" },
          ]}
          button={{
            text: "Get Started",
            href: "/dashboard",
          }}
        />
      </div>

      <div id="dashboard-intro" data-section="dashboard-intro" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <MediaAbout
            tag="Dashboard"
            title="Your Verification Hub"
            description="Access real-time misinformation detection, manage community submissions, and monitor trending false narratives across multiple languages. Track your impact and contribute to protecting democracy worldwide."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/four-layer-verification-system-diagram-s-1772806231382-f9200383.png"
            imageAlt="Dashboard verification interface"
            useInvertedBackground={false}
            buttons={[
              {
                text: "Start Verifying",
                href: "#verification-stats",
              },
              {
                text: "View Tutorials",
                href: "#",
              },
            ]}
          />
        </div>
      </div>

      <div id="verification-stats" data-section="verification-stats" className="py-24 bg-gradient-to-b from-card to-background">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardOne
            title="Verification Dashboard Stats"
            description="Key metrics from the global TruthGuard verification network"
            tag="Live Statistics"
            tagIcon={TrendingDown}
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            metrics={[
              {
                id: "1",
                value: "87",
                title: "%",
                description: "Accuracy rate of community verifications",
                icon: TrendingDown,
              },
              {
                id: "2",
                value: "150",
                title: "K+",
                description: "Fact-checks completed this month",
                icon: Globe,
              },
              {
                id: "3",
                value: "2",
                title: "h",
                description: "Average response time for critical claims",
                icon: Zap,
              },
            ]}
          />
        </div>
      </div>

      <div id="dashboard-features" data-section="dashboard-features" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardNineteen
            title="Dashboard Tools"
            description="Powerful verification tools built for collaborative fact-checking at scale."
            tag="Available Features"
            tagIcon={Shield}
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              {
                id: 1,
                tag: "Submission Center",
                title: "Upload Claims for Review",
                subtitle: "Submit articles, images, videos, or audio for verification",
                description:
                  "Contribute to the global fact-checking effort by submitting suspicious content. Our community and expert reviewers will analyze, rate evidence quality, and provide transparent verification results you can trust.",
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/community-verification-dashboard-showing-1772806230382-aea85eb5.png",
                imageAlt: "Claim submission interface",
                buttons: [
                  {
                    text: "Submit Claim",
                    href: "#",
                  },
                ],
              },
              {
                id: 2,
                tag: "Real-Time Monitoring",
                title: "Track Trending Narratives",
                subtitle: "Monitor emerging false claims and disinformation patterns",
                description:
                  "Watch trending misinformation in real-time with our watchlist system. Community votes highlight critical topics and you can see exactly how false narratives spread, mutate, and get corrected across networks.",
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-watchlist-monitoring-interface-di-1772806231152-fb359d52.png",
                imageAlt: "Real-time misinformation watchlist",
                buttons: [
                  {
                    text: "View Watchlist",
                    href: "#",
                  },
                ],
              },
              {
                id: 3,
                tag: "Expert Analysis",
                title: "Review Expert Fact-Checks",
                subtitle: "Access verified information from our expert network",
                description:
                  "Browse fact-checks from professional journalists, researchers, and certified community moderators. See confidence scores, supporting evidence, and the full verification timeline for each claim.",
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/advanced-ai-analysis-interface-showing-b-1772806231773-faa0d615.png",
                imageAlt: "Expert analysis and verification results",
                buttons: [
                  {
                    text: "Browse Fact-Checks",
                    href: "#",
                  },
                ],
              },
            ]}
          />
        </div>
      </div>

      <div id="dashboard-cta" data-section="dashboard-cta" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Join the Community"
            title="Start Fact-Checking Today"
            description="Become part of the global verification network. Whether you're a journalist, researcher, student, or concerned citizen, TruthGuard gives you the tools to identify misinformation and protect your community."
            tagIcon={Mail}
            background={{ variant: "rotated-rays-animated-grid" }}
            useInvertedBackground={true}
            inputPlaceholder="Enter your email to get started"
            buttonText="Create Free Account"
            termsText="By creating an account, you agree to our Terms of Service and Community Guidelines. Your privacy is protected under our comprehensive data policy."
            onSubmit={handleEmailSubmit}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="py-0">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-network-visualization-showing-int-1772806228357-12377876.png"
          imageAlt="Global verification network"
          logoText="TruthGuard"
          copyrightText="© 2025 TruthGuard. Fighting misinformation, protecting democracy."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Browser Extension",
                  href: "/",
                },
                {
                  label: "Verification Platform",
                  href: "/dashboard",
                },
                {
                  label: "Dashboard",
                  href: "/dashboard",
                },
                {
                  label: "Pricing",
                  href: "/",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/",
                },
                {
                  label: "Our Mission",
                  href: "/#hero",
                },
                {
                  label: "Impact Report",
                  href: "/#impact",
                },
                {
                  label: "Careers",
                  href: "https://careers.truthguard.org",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Join as Fact-Checker",
                  href: "/dashboard",
                },
                {
                  label: "API Documentation",
                  href: "https://docs.truthguard.org",
                },
                {
                  label: "GitHub (Open Source)",
                  href: "https://github.com/truthguard",
                },
                {
                  label: "Research Papers",
                  href: "https://research.truthguard.org",
                },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}