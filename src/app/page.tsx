"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { AlertCircle, Briefcase, Calendar, DollarSign, Heart, PieChart, Shield, Star, TrendingUp, Users } from "lucide-react";

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
            { name: "Schedule", id: "schedule" },
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
            { text: "Schedule Consultation", href: "schedule" }
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
              title: "Life Insurance Products",              description: "Flexible coverage options including term life, whole life, universal life, final expense, and annuities tailored to your needs.",              icon: Heart,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/front-view-parents-kid-sitting-couch_23-2149610757.jpg?_wi=1",                  imageAlt: "life insurance family protection coverage plans security"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/happy-daughter-embracing-kissing-her-working-parents-home_637285-12186.jpg?_wi=1",                  imageAlt: "family planning insurance protection financial security household"
                }
              ]
            },
            {
              title: "Debt Solutions",              description: "Strategic debt consolidation and elimination programs with 1 free consultation then flexible pricing to accelerate your path to financial freedom.",              icon: TrendingUp,
              mediaItems: [
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/closeup-debts-help-me-written-scramble-board-lights_181624-20912.jpg?_wi=1",                  imageAlt: "debt reduction financial planning budget management economy"
                },
                {
                  imageSrc: "http://img.b2bpic.net/free-photo/finance-investment-banking-cost-concept_53876-133721.jpg?_wi=1",                  imageAlt: "financial tools wealth planning money management strategy"
                }
              ]
            },
            {
              title: "Retirement Planning",              description: "Comprehensive retirement planning services to help you build and preserve wealth for a secure future.",              icon: PieChart,
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

      <div id="products" data-section="products">
        <PricingCardNine
          title="Life Insurance Products"
          description="Choose the coverage type that fits your life and budget."
          tag="Insurance Options"
          tagIcon={DollarSign}
          plans={[
            {
              id: "term",              title: "Term Life Insurance",              price: "Affordable",              period: "rates",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-parents-kid-sitting-couch_23-2149610757.jpg?_wi=2",              imageAlt: "term life insurance family protection",              button: { text: "Learn More", href: "contact" },
              features: [
                "Coverage for 10, 20, or 30 years",                "Affordable monthly premiums",                "Renewable and convertible options",                "No medical exams available"
              ]
            },
            {
              id: "whole",              title: "Whole Life Insurance",              price: "Lifetime",              period: "coverage",              imageSrc: "http://img.b2bpic.net/free-photo/happy-daughter-embracing-kissing-her-working-parents-home_637285-12186.jpg?_wi=2",              imageAlt: "whole life insurance permanent coverage",              button: { text: "Learn More", href: "contact" },
              features: [
                "Lifetime coverage with guaranteed death benefit",                "Cash value accumulation",                "Fixed premiums",                "Loan and withdrawal options"
              ]
            },
            {
              id: "universal",              title: "Universal Life Insurance",              price: "Flexible",              period: "protection",              imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-ready-challenges_1163-4336.jpg?_wi=1",              imageAlt: "universal life insurance flexible premiums",              button: { text: "Learn More", href: "contact" },
              features: [
                "Flexible premium payments",                "Adjustable death benefits",                "Interest-bearing cash value",                "Transparent policy tracking"
              ]
            },
            {
              id: "final",              title: "Final Expense Insurance",              price: "Budget-Friendly",              period: "options",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "final expense insurance coverage",              button: { text: "Learn More", href: "contact" },
              features: [
                "Coverage for funeral and burial costs",                "Quick application process",                "No medical underwriting",                "Immediate coverage available"
              ]
            },
            {
              id: "annuities",              title: "Annuities",              price: "Income",              period: "protection",              imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=1",              imageAlt: "annuities retirement income planning",              button: { text: "Learn More", href: "contact" },
              features: [
                "Guaranteed income streams",                "Various annuity types available",                "Tax-deferred growth",                "Personalized income solutions"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="debtpricing" data-section="debtpricing">
        <PricingCardNine
          title="Debt Solutions Pricing"
          description="Get started on your path to financial freedom with transparent pricing."
          tag="Debt Services"
          tagIcon={DollarSign}
          plans={[
            {
              id: "consultation",              title: "Free Initial Consultation",              price: "Free",              period: "",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-debts-help-me-written-scramble-board-lights_181624-20912.jpg?_wi=2",              imageAlt: "free consultation debt solutions",              button: { text: "Schedule Now", href: "schedule" },
              features: [
                "In-depth financial assessment",                "Debt analysis and review",                "Personalized strategy discussion",                "No obligation commitment"
              ]
            },
            {
              id: "consolidation",              title: "Debt Consolidation Program",              price: "Flexible",              period: "pricing",              imageSrc: "http://img.b2bpic.net/free-photo/finance-investment-banking-cost-concept_53876-133721.jpg?_wi=2",              imageAlt: "debt consolidation flexible rates",              button: { text: "Get Started", href: "contact" },
              features: [
                "Customized consolidation plans",                "Negotiated interest rates",                "Single monthly payment",                "Clear path to debt freedom"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="schedule" data-section="schedule">
        <ContactText
          text="Ready to discuss your financial needs? Schedule a meeting with one of our experienced advisors today. We offer flexible appointment times to fit your busy schedule."
          animationType="entrance-slide"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Schedule a Meeting", href: "#" },
            { text: "Contact Our Team", href: "#" }
          ]}
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
              id: "1",              title: "Life-Changing Financial Protection",              quote: "NSL helped me secure my family's future with a comprehensive plan I actually understand. Their team was patient, thorough, and genuinely cared about my concerns.",              name: "Jennifer Martinez",              role: "Homeowner & Parent",              imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-ready-challenges_1163-4336.jpg?_wi=2",              imageAlt: "professional headshot woman portrait business professional confident"
            },
            {
              id: "2",              title: "Debt Freedom in Sight",              quote: "After years of struggling with multiple debts, NSL's consolidation strategy gave me a clear roadmap to financial freedom. I'm on track to be debt-free in 3 years.",              name: "Michael Chen",              role: "Business Owner",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "business owner portrait man headshot entrepreneur professional"
            },
            {
              id: "3",              title: "Peace of Mind at Last",              quote: "The personalized approach NSL took with my situation was exactly what I needed. I finally feel protected and confident about my financial future.",              name: "Sarah Thompson",              role: "Corporate Manager",              imageSrc: "http://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=2",              imageAlt: "corporate manager portrait woman business professional headshot confident"
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
              id: "1",              title: "What types of life insurance do you offer?",              content: "We offer term life insurance (10, 20, and 30-year options), whole life insurance for permanent coverage, universal life insurance with flexible premiums, final expense insurance for funeral and burial costs, and annuities for retirement income. Each option is customizable to fit your specific needs and budget."
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
                { label: "Life Insurance", href: "#products" },
                { label: "Debt Management", href: "#debtpricing" },
                { label: "Retirement Planning", href: "#services" },
                { label: "Schedule Meeting", href: "#schedule" }
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
