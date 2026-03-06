"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [email, setEmail] = useState("");

  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Features", id: "features" },
    { name: "Impact", id: "impact" },
    { name: "Platform", id: "platform" },
    { name: "About", id: "about" },
  ];

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemsWithLinks = navItems.map((item) => ({
    name: item.name,
    id: item.id,
  }));

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
          navItems={navItemsWithLinks}
          button={{ text: "Get Started", href: "contact" }}
          brandName="TruthGuard"
        />
      </div>

      <div id="pricing-hero" data-section="pricing-hero" className="py-20 bg-background">
        <div className="mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-card rounded-full border border-accent">
              <span className="text-sm font-medium text-foreground">Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Simple, Flexible Plans for Every Verification Need
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              From individual fact-checkers to enterprise organizations protecting democracy at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Free Plan */}
            <div className="p-8 bg-card border border-accent rounded-2xl hover:border-primary-cta transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-foreground/60 mb-6">For individual fact-checkers and media literacy educators</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Free</span>
                <span className="text-foreground/60 ml-2">forever</span>
              </div>
              <button className="w-full py-3 px-4 bg-secondary-cta text-secondary-cta-text rounded-full font-semibold hover:opacity-90 transition-opacity mb-8">
                Get Started
              </button>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Browser extension
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Real-time claim alerts
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Community verification access
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Basic confidence scoring
                </li>
                <li className="flex items-center text-foreground/50">
                  <span className="w-5 h-5 mr-3">✗</span>
                  API access
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="p-8 bg-gradient-to-br from-primary-cta/10 to-card border-2 border-primary-cta rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-cta text-primary-cta-text text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 mt-4">Professional</h3>
              <p className="text-foreground/60 mb-6">For journalists and fact-checking organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$49</span>
                <span className="text-foreground/60 ml-2">/month</span>
              </div>
              <button className="w-full py-3 px-4 bg-primary-cta text-primary-cta-text rounded-full font-semibold hover:opacity-90 transition-opacity mb-8">
                Start Free Trial
              </button>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Everything in Community
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Advanced analytics dashboard
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Priority verification queue
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  API access (500 req/day)
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Custom claim tracking
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 bg-card border border-accent rounded-2xl hover:border-primary-cta transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise</h3>
              <p className="text-foreground/60 mb-6">For governments and large-scale operations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">Custom</span>
                <span className="text-foreground/60 ml-2">pricing</span>
              </div>
              <button className="w-full py-3 px-4 bg-secondary-cta text-secondary-cta-text rounded-full font-semibold hover:opacity-90 transition-opacity mb-8">
                Contact Sales
              </button>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Unlimited API requests
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Custom AI model training
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  Dedicated support team
                </li>
                <li className="flex items-center text-foreground">
                  <span className="w-5 h-5 bg-primary-cta rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
                  On-premise deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing-faq" data-section="pricing-faq" className="py-20 bg-card">
        <div className="mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing Questions?</h2>
            <p className="text-lg text-foreground/70">Find answers to common billing and feature questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you offer annual billing discounts?",
                a: "Yes! Annual plans receive 20% discount. Contact our sales team for custom volume pricing.",
              },
              {
                q: "Can I change plans at any time?",
                a: "Absolutely. Upgrade or downgrade instantly. Billing adjusts proportionally, and you never pay for unused time.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and purchase orders for Enterprise customers.",
              },
              {
                q: "Is there a free trial for Professional plan?",
                a: "Yes, 14-day free trial with full access to Professional features. No credit card required.",
              },
            ].map((item, idx) => (
              <details key={idx} className="border border-accent rounded-lg p-6 hover:bg-background/50 transition-colors">
                <summary className="cursor-pointer font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="ml-4 text-primary-cta">+</span>
                </summary>
                <p className="mt-4 text-foreground/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div id="pricing-cta" data-section="pricing-cta" className="py-20 bg-background">
        <div className="mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Verifying?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Choose your plan and join thousands of fact-checkers, journalists, and organizations protecting democracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-cta text-primary-cta-text rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
            <Link href="/" className="px-8 py-4 bg-secondary-cta text-secondary-cta-text rounded-full font-semibold hover:opacity-90 transition-opacity border border-accent">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div id="footer" data-section="footer" className="py-16 bg-card border-t border-accent">
        <div className="mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">TruthGuard</h3>
              <p className="text-foreground/60 text-sm">Fighting misinformation, protecting democracy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                    Browser Extension
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                    Verification Platform
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-foreground/70 hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                    Impact Report
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/truthguard" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://docs.truthguard.org" className="text-foreground/70 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">© 2025 TruthGuard. Fighting misinformation, protecting democracy.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}