"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { AlertCircle, Briefcase, DollarSign, Heart, PieChart, Shield, Star, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="noiseDiagonalGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="NSL"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Always Striving to Be Where We Are Needed Most"
          description="Comprehensive life insurance and debt solutions designed to protect your financial future and bring you peace of mind."
          tag="NSL Life & Finances"
          tagIcon={Shield}
          background={{ variant: "plain" }}
          buttons={[
            { text: "Explore Solutions", href: "services" },
            { text: "Schedule Consultation", href: "contact" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/side-view-people-looking-picture-album_23-2149515314.jpg"
          imageAlt="financial security family protection investment planning insurance concept"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About NSL"
          title="We provide transparent, personalized financial solutions tailored to your unique circumstances and future goals."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Our Core Services"
          description="Comprehensive financial protection and debt management solutions for every life stage."
          tag="What We Offer"
          tagIcon={Briefcase}
          features={[
            {
              title: "Life Insurance Plans",              description: "Flexible coverage options including term, whole life, and universal life insurance tailored to your needs.",              icon: Heart,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/front-view-parents-kid-sitting-couch_23-2149610757.jpg",                  imageAlt: "life insurance family protection coverage plans security"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/happy-daughter-embracing-kissing-her-working-parents-home_637285-12186.jpg",                  imageAlt: "family planning insurance protection financial security household"
                }
              ]
            },
            {
              title: "Debt Management",              description: "Strategic debt consolidation and elimination programs designed to accelerate your path to financial freedom.",              icon: TrendingUp,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/closeup-debts-help-me-written-scramble-board-lights_181624-20912.jpg",                  imageAlt: "debt reduction financial planning budget management economy"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/finance-investment-banking-cost-concept_53876-133721.jpg",                  imageAlt: "financial tools wealth planning money management strategy"
                }
              ]
            },
            {
              title: "Financial Planning",              description: "Comprehensive wealth planning and investment guidance to secure your long-term financial objectives.",              icon: PieChart,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-businessman-pointing-printed-chart-showing-graph-colleagues-professional-content-partners-making-notes-statistics-cooperation-communication-partnership-concept_74855-14267.jpg",                  imageAlt: "investment portfolio wealth management financial advisor planning"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-vector/flat-business-landing-page-template_23-2148218171.jpg",                  imageAlt: "wealth building financial growth investment strategy success"
                }
              ]
            },
            {
              title: "Emergency Protection",              description: "Comprehensive emergency funds and protection strategies to ensure your family's security during unexpected events.",              icon: AlertCircle,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/happy-black-real-estate-agent-elbow-bumping-with-her-client-meeting_637285-8874.jpg",                  imageAlt: "emergency fund financial safety protection security"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/smart-city-security-background-digital-transformation-digital-remix_53876-104934.jpg",                  imageAlt: "risk protection insurance coverage safety net security"
                }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Transparent Pricing Plans"
          description="Choose the coverage level that fits your life and budget."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "basic",              price: "$49/mo",              name: "Essential Protection",              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "$250,000 life insurance coverage",                "Basic debt management consultation",                "Quarterly financial reviews",                "Emergency support hotline"
              ]
            },
            {
              id: "pro",              badge: "Most Popular",              badgeIcon: Star,
              price: "$99/mo",              name: "Comprehensive Solution",              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "$500,000 life insurance coverage",                "Full debt consolidation program",                "Monthly financial planning sessions",                "Priority customer support",                "Investment guidance included"
              ]
            },
            {
              id: "premium",              price: "$199/mo",              name: "Premium Protection Plus",              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "$1,000,000 life insurance coverage",                "Advanced wealth management",                "Unlimited financial consulting",                "24/7 dedicated support team",                "Estate planning services",                "Tax optimization strategies"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Thousands"
          description="Hear from clients who have transformed their financial lives with NSL."
          tag="Testimonials"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Life-Changing Financial Protection",              quote: "NSL helped me secure my family's future with a comprehensive plan I actually understand. Their team was patient, thorough, and genuinely cared about my concerns.",              name: "Jennifer Martinez",              role: "Homeowner & Parent",              imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-ready-challenges_1163-4336.jpg",              imageAlt: "professional headshot woman portrait business professional confident"
            },
            {
              id: "2",              title: "Debt Freedom in Sight",              quote: "After years of struggling with multiple debts, NSL's consolidation strategy gave me a clear roadmap to financial freedom. I'm on track to be debt-free in 3 years.",              name: "Michael Chen",              role: "Business Owner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "business owner portrait man headshot entrepreneur professional"
            },
            {
              id: "3",              title: "Peace of Mind at Last",              quote: "The personalized approach NSL took with my situation was exactly what I needed. I finally feel protected and confident about my financial future.",              name: "Sarah Thompson",              role: "Corporate Manager",              imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg",              imageAlt: "corporate manager portrait woman business professional headshot confident"
            },
            {
              id: "4",              title: "Professional Guidance I Can Trust",              quote: "NSL's advisors are transparent, knowledgeable, and always available. They've become my trusted financial partners in this journey.",              name: "David Williams",              role: "Entrepreneur",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "entrepreneur portrait man business professional headshot confident"
            },
            {
              id: "5",              title: "Comprehensive Solution That Works",              quote: "I appreciate how NSL combines life insurance, debt management, and financial planning into one cohesive strategy. It's exactly what I was looking for.",              name: "Emily Rodriguez",              role: "Finance Professional",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg",              imageAlt: "finance professional woman portrait business headshot expert"
            },
            {
              id: "6",              title: "Support When I Need It Most",              quote: "NSL's 24/7 support team has been invaluable. Having someone to answer my questions and concerns whenever I need them is priceless.",              name: "Robert Jackson",              role: "Retiree",              imageSrc: "http://img.b2bpic.net/free-photo/senior-man-looking-camera-dental-office-wainting-consultation-elderly-male-smiling-webcam-s_482257-4047.jpg",              imageAlt: "retiree portrait senior man professional headshot experienced"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about our life insurance and debt solutions."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "What types of life insurance do you offer?",              content: "We offer term life insurance (10, 20, and 30-year options), whole life insurance for permanent coverage, and universal life insurance with flexible premiums. Each option is customizable to fit your specific needs and budget."
            },
            {
              id: "2",              title: "How does debt consolidation work?",              content: "Our debt consolidation program combines multiple debts into a single, manageable payment with a lower interest rate. We negotiate with creditors on your behalf and create a personalized repayment strategy to help you become debt-free faster."
            },
            {
              id: "3",              title: "Are there any hidden fees?",              content: "No. We believe in complete transparency. All fees are clearly outlined upfront, and we discuss them thoroughly before you commit to any plan. What you see is what you get."
            },
            {
              id: "4",              title: "How quickly can I see results?",              content: "Life insurance coverage begins immediately upon approval. Debt consolidation results vary based on your situation, but most clients see significant improvements in their debt-to-income ratio within 6-12 months."
            },
            {
              id: "5",              title: "Can I modify my plan if my circumstances change?",              content: "Absolutely. Your life changes, and so should your financial plan. We offer flexible adjustments to your coverage and strategy whenever you need them, at no additional cost."
            },
            {
              id: "6",              title: "How do I get started?",              content: "Getting started is simple. Schedule a free consultation with one of our advisors, and we'll assess your situation, answer your questions, and create a customized plan tailored to your needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to take control of your financial future? Let's create a personalized plan that brings you peace of mind and security."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Schedule Your Free Consultation", href: "#" },
            { text: "Contact Us Today", href: "#" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="NSL"
          columns={[
            {
              title: "Solutions",              items: [
                { label: "Life Insurance", href: "#services" },
                { label: "Debt Management", href: "#services" },
                { label: "Financial Planning", href: "#services" },
                { label: "Pricing", href: "#pricing" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Documentation", href: "#" },
                { label: "Support Center", href: "#" },
                { label: "Contact Support", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Compliance", href: "#" },
                { label: "Disclosure", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 NSL Life & Finances. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
