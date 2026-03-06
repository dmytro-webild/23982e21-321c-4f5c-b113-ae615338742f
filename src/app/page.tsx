"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import {
  TrendingDown,
  Globe,
  Heart,
  Zap,
  Shield,
  Download,
  Users,
  HelpCircle,
  Mail,
} from "lucide-react";

export default function HomePage() {
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
            text: "Get Started",            href: "/dashboard"}}
        />
      </div>

      <div id="hero" data-section="hero" className="py-0">
        <HeroLogo
          logoText="TruthGuard"
          description="Real-time misinformation detection and verification. Powered by AI, driven by community."
          buttons={[
            {
              text: "Launch Browser Extension",              href: "/dashboard"},
            {
              text: "Verify a Claim",              href: "/dashboard"},
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/digital-security-concept-featuring-a-lum-1772806230156-b34c48e5.png"
          imageAlt="Digital security shield with AI verification"
          showDimOverlay={true}
        />
      </div>

      <div id="features" data-section="features" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardNineteen
            title="Core Features"
            description="TruthGuard combines multiple layers of verification to combat misinformation at scale."
            tag="Key Capabilities"
            tagIcon={Shield}
            textboxLayout="default"
            useInvertedBackground={true}
            features={[
              {
                id: 1,
                tag: "Instant Detection",                title: "Browser Extension Alerts",                subtitle: "Real-time misinformation warnings as you browse",                description:
                  "Get instant alerts when you encounter suspicious content. The extension analyzes claims against our database and shows confidence scores, matching patterns with debunked narratives, and community verification status.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/browser-window-showing-truthguard-extens-1772806230097-c428a5c8.png?_wi=1",                imageAlt: "Browser extension alert interface",                buttons: [
                  {
                    text: "Download Extension",                    href: "/dashboard"},
                ],
              },
              {
                id: 2,
                tag: "Community Powered",                title: "Crowdsourced Verification",                subtitle: "Submit media for expert and community review",                description:
                  "Users submit suspicious claims, images, and videos for verification. Community members and fact-checking experts rate the evidence strength, collaboratively determining claim accuracy and providing transparent, peer-reviewed results.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/community-verification-dashboard-showing-1772806230382-aea85eb5.png?_wi=1",                imageAlt: "Crowdsourced verification dashboard",                buttons: [
                  {
                    text: "Submit for Review",                    href: "/dashboard"},
                ],
              },
              {
                id: 3,
                tag: "AI-Powered Analysis",                title: "Multilingual AI Scanner",                subtitle: "Detect biases, deepfakes, and logical fallacies",                description:
                  "Our advanced AI trained on diverse global datasets identifies cultural biases, AI-generated deepfakes, rhetorical manipulation, and logical fallacies in multiple languages. Transparent scoring helps users understand why content flagged.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/advanced-ai-analysis-interface-showing-b-1772806231773-faa0d615.png?_wi=1",                imageAlt: "AI analysis showing bias and deepfake detection",                buttons: [
                  {
                    text: "Learn About AI",                    href: "#how-it-works"},
                ],
              },
              {
                id: 4,
                tag: "Educational Impact",                title: "Interactive Fact Trails",                subtitle: "Track claim evolution and corrections over time",                description:
                  "Visualize how claims spread, mutate, and get corrected. Educational timelines show original sources, fact-checks, corrections, and the impact of misinformation—building media literacy in real-time.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/interactive-timeline-visualization-showi-1772806230963-7d4c4c10.png",                imageAlt: "Interactive timeline showing claim evolution",                buttons: [
                  {
                    text: "Explore Examples",                    href: "#impact"},
                ],
              },
              {
                id: 5,
                tag: "Global Watchlist",                title: "Live Topic Monitoring",                subtitle: "User-voted trending topics with live feeds",                description:
                  "Community votes highlight critical topics—elections, disasters, health crises. Real-time feeds track misinformation patterns, safe-sharing tools help prevent spread, and alerts notify users of emerging false narratives.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-watchlist-monitoring-interface-di-1772806231152-fb359d52.png?_wi=1",                imageAlt: "Global watchlist of trending misinformation topics",                buttons: [
                  {
                    text: "View Watchlist",                    href: "#platform"},
                ],
              },
              {
                id: 6,
                tag: "Humanitarian Action",                title: "Crisis Response",                subtitle: "Prevent rumors from hindering disaster aid",                description:
                  "During humanitarian crises, rapid misinformation detection prevents false narratives from disrupting aid efforts. Real-time verification protects vulnerable populations and ensures accurate emergency information reaches those who need it most.",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/humanitarian-crisis-response-interface-s-1772806230569-34630b3e.png",                imageAlt: "Crisis response and humanitarian aid verification",                buttons: [
                  {
                    text: "Our Impact",                    href: "#impact"},
                ],
              },
            ]}
          />
        </div>
      </div>

      <div id="how-it-works" data-section="how-it-works" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <MediaAbout
            tag="The Process"
            title="How TruthGuard Works"
            description="A four-layer verification system combining AI analysis, crowdsourcing, expert review, and community consensus."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/four-layer-verification-system-diagram-s-1772806231382-f9200383.png?_wi=1"
            imageAlt="Four-layer verification system diagram"
            useInvertedBackground={false}
            buttons={[
              {
                text: "Start Verifying",                href: "/dashboard"},
              {
                text: "Learn More",                href: "#platform"},
            ]}
          />
        </div>
      </div>

      <div id="impact" data-section="impact" className="py-24 bg-gradient-to-b from-card to-background">
        <div className="mx-auto px-4 md:px-6">
          <MetricCardOne
            title="Our Impact"
            description="Real-world statistics showing how TruthGuard protects communities and saves lives."
            tag="Statistics"
            tagIcon={TrendingDown}
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            metrics={[
              {
                id: "1",                value: "40",                title: "%",                description:
                  "Potential reduction in misinformation spread during key events",                icon: TrendingDown,
              },
              {
                id: "2",                value: "100",                title: "+",                description:
                  "Countries where TruthGuard can protect democracy and citizens",                icon: Globe,
              },
              {
                id: "3",                value: "200",                title: "K+",                description:
                  "Excess COVID deaths prevented by rapid fact-checking (2023-2024)",                icon: Heart,
              },
              {
                id: "4",                value: "500",                title: "%",                description: "Annual growth in AI-generated deepfakes we detect",                icon: Zap,
              },
            ]}
          />
        </div>
      </div>

      <div id="extension" data-section="extension" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            title="Browser Extension Features"
            description="Seamless integration that brings verification to your fingertips while browsing."
            tag="Available Now"
            tagIcon={Download}
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            gridVariant="three-columns-all-equal-width"
            products={[
              {
                id: "ext-1",                name: "Real-Time Alert System",                price: "FREE",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/close-up-of-browser-extension-alert-noti-1772806229302-c8803791.png?_wi=1",                imageAlt: "Real-time alert notification",                initialQuantity: 1,
              },
              {
                id: "ext-2",                name: "Confidence Score Display",                price: "FREE",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/confidence-score-visualization-showing-p-1772806228778-851eef69.png?_wi=1",                imageAlt: "Claim confidence score interface",                initialQuantity: 1,
              },
              {
                id: "ext-3",                name: "One-Click Sharing",                price: "FREE",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/share-interface-showing-one-click-verifi-1772806231792-db5abc6b.png?_wi=1",                imageAlt: "Safe sharing verification tools",                initialQuantity: 1,
              },
            ]}
          />
        </div>
      </div>

      <div id="platform" data-section="platform" className="py-24 bg-gradient-to-b from-background to-card">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTen
            title="Verification Platform Testimonials"
            description="Hear from fact-checkers, journalists, and community moderators using TruthGuard."
            tag="User Stories"
            tagIcon={Users}
            textboxLayout="default"
            useInvertedBackground={true}
            testimonials={[
              {
                id: "1",                title: "Transformed Our Fact-Checking Workflow",                quote:
                  "TruthGuard's crowdsourced verification platform cut our fact-checking time by 60%. We can now respond to false narratives within hours instead of days.",                name: "Dr. Maria Santos",                role: "Director of Fact-Checking, FactVerify International",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-dr-maria-santos-1772806228264-68ed93aa.png?_wi=1",                imageAlt: "Dr. Maria Santos"},
              {
                id: "2",                title: "Protecting Vulnerable Communities",                quote:
                  "During the election crisis in our region, TruthGuard detected 87% of false voting rumors before they spread. It genuinely protected democratic integrity.",                name: "James Okonkwo",                role: "Election Observer, Democratic Monitors Coalition",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-james-okonkwo-e-1772806228025-66594ee7.png?_wi=1",                imageAlt: "James Okonkwo"},
              {
                id: "3",                title: "Essential for Humanitarian Response",                quote:
                  "When the hurricane hit, misinformation spread faster than real information. TruthGuard's real-time verification meant accurate aid information reached people who needed it most.",                name: "Elena Volkov",                role: "Regional Coordinator, International Relief Services",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-elena-volkov-hu-1772806228588-d3849e80.png?_wi=1",                imageAlt: "Elena Volkov"},
              {
                id: "4",                title: "Building Media Literacy",                quote:
                  "Our students use TruthGuard's fact trails to understand how misinformation spreads. It's the best educational tool we've found for teaching critical thinking.",                name: "Professor Aisha Patel",                role: "Media Literacy Educator, Global University",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-professor-aisha-1772806228869-57a9b6be.png?_wi=1",                imageAlt: "Professor Aisha Patel"},
              {
                id: "5",                title: "AI That Actually Works Across Cultures",                quote:
                  "Most misinformation tools have Western bias. TruthGuard's diverse training data and cultural nuance scoring finally makes verification fair for our Asian market.",                name: "Chen Wei",                role: "Head of Content Moderation, AsiaTech Media",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-chen-wei-head-o-1772806229050-0388415f.png?_wi=1",                imageAlt: "Chen Wei"},
              {
                id: "6",                title: "Scalable and Transparent",                quote:
                  "We deployed TruthGuard's open-source core at our NGO. The transparency and scalability let us protect 50 countries with minimal resources.",                name: "Kwame Mensah",                role: "Executive Director, Digital Rights Africa",                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/professional-portrait-of-kwame-mensah-ng-1772806229421-05914924.png?_wi=1",                imageAlt: "Kwame Mensah"},
            ]}
          />
        </div>
      </div>

      <div id="faq" data-section="faq" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase
            title="Frequently Asked Questions"
            description="Learn more about TruthGuard's capabilities, limitations, and approach."
            tag="FAQ"
            tagIcon={HelpCircle}
            textboxLayout="default"
            useInvertedBackground={false}
            faqsAnimation="slide-up"
            animationType="smooth"
            faqs={[
              {
                id: "1",                title: "How does TruthGuard handle free speech concerns?",                content:
                  "We believe in flagging, not censoring. TruthGuard flags suspicious content with confidence scores and evidence trails, but never removes or blocks information. Users see contextual nuance ratings that distinguish between outright falsehoods, unverified claims, and legitimate opinions. We include 'gray area' ratings for nuanced topics where reasonable people disagree."},
              {
                id: "2",                title: "What about cultural bias in the AI?",                content:
                  "We've learned from Western-centric misinformation tools. Our AI is trained on diverse global datasets including content from 50+ countries and 20+ languages. We conduct regular bias audits, incentivize contributors from underrepresented regions, and have external third-party audits. However, we're transparent that perfect cultural neutrality is impossible—we're committed to continuous improvement."},
              {
                id: "3",                title: "How is TruthGuard funded?",                content:
                  "TruthGuard operates on a hybrid model: Open-source core available for NGOs and nonprofits, premium analytics for journalists and researchers, and donations from mission-aligned foundations. We reject funding from entities with conflicts of interest and maintain editorial independence. No single entity controls our fact-checking database."},
              {
                id: "4",                title: "Can TruthGuard detect all deepfakes?",                content:
                  "We detect ~85% of current AI-generated deepfakes using our multilingual scanner. However, as generation techniques improve, we adapt. TruthGuard uses GSAP scroll-triggered detection for video frames and includes confidence scoring. We recommend combining automated detection with human verification for critical decisions like political or legal contexts."},
              {
                id: "5",                title: "How do you prevent trolls from gaming the verification system?",                content:
                  "Community contributors have reputation scores based on verification accuracy, peer feedback, and activity history. Low-reputation accounts have limited voting power. We use CAPTCHA for mass submissions, IP-based rate limiting, and expert moderators who flag coordinated inauthentic behavior. Reputation builds trust while maintaining accessibility."},
              {
                id: "6",                title: "What data does TruthGuard collect from users?",                content:
                  "TruthGuard collects minimal data: verified claims, user-submitted content, and aggregate browsing patterns (anonymized). We don't sell data to third parties. Users can opt out of analytics. All data is encrypted and stored in compliance with GDPR, CCPA, and local privacy laws. Transparency reports published quarterly."},
              {
                id: "7",                title: "How quickly does TruthGuard detect new misinformation?",                content:
                  "Our real-time monitoring identifies trending false claims within 2-4 hours of significant spread. Browser extension users get instant alerts on known false narratives. Community submissions are reviewed within 24 hours by expert moderators. For crisis situations, we have rapid-response teams that activate within 1 hour."},
              {
                id: "8",                title: "Can organizations customize TruthGuard for their needs?",                content:
                  "Yes. The open-source core can be self-hosted by NGOs and enterprises. Premium versions offer API access, custom training on domain-specific misinformation (medical, financial, political), and white-label options. We offer consulting to help organizations implement TruthGuard responsibly."},
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="py-24 bg-background">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get In Touch"
            title="Ready to Protect Democracy?"
            description="Get weekly verification insights, early access to new detection features, and exclusive fact-checking resources. Join thousands of fact-checkers, journalists, and citizens using TruthGuard to combat misinformation."
            tagIcon={Mail}
            background={{ variant: "rotated-rays-animated-grid" }}
            useInvertedBackground={true}
            inputPlaceholder="Enter your email address"
            buttonText="Start Free Trial"
            termsText="By signing up, you agree to our Terms of Service and Privacy Policy. We respect your privacy and never share your email."
            onSubmit={handleEmailSubmit}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="py-0">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZh30Qi21tuT4ekNerkSR6qP3y/global-network-visualization-showing-int-1772806228357-12377876.png?_wi=1"
          imageAlt="Global verification network"
          logoText="TruthGuard"
          copyrightText="© 2025 TruthGuard. Fighting misinformation, protecting democracy."
          columns={[
            {
              title: "Product",              items: [
                {
                  label: "Browser Extension",                  href: "/dashboard"},
                {
                  label: "Verification Platform",                  href: "/dashboard"},
                {
                  label: "Dashboard",                  href: "/dashboard"},
                {
                  label: "Pricing",                  href: "/dashboard"},
              ],
            },
            {
              title: "Company",              items: [
                {
                  label: "About Us",                  href: "/dashboard"},
                {
                  label: "Our Mission",                  href: "#hero"},
                {
                  label: "Impact Report",                  href: "#impact"},
                {
                  label: "Careers",                  href: "https://careers.truthguard.org"},
              ],
            },
            {
              title: "Community",              items: [
                {
                  label: "Join as Fact-Checker",                  href: "/dashboard"},
                {
                  label: "API Documentation",                  href: "https://docs.truthguard.org"},
                {
                  label: "GitHub (Open Source)",                  href: "https://github.com/truthguard"},
                {
                  label: "Research Papers",                  href: "https://research.truthguard.org"},
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
