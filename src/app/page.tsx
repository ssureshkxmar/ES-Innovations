"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { GlowingCard } from "@/components/ui/GlowingCard";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Globe, Brain, ShieldCheck, Users, Lightbulb, Rocket, Zap, Award } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { FadeIn, ScaleOnHover, TextReveal } from "@/components/ui/Motion";
import { useUI } from "@/lib/context/UIContext";
import { motion } from "framer-motion";

export default function Home() {
  const { showBgVideo, setShowBgVideo } = useUI();

  return (
    <div className={`flex flex-col bg-transparent selection:bg-accent selection:text-white min-h-screen transition-colors duration-500 ${showBgVideo ? "text-white" : "text-foreground"}`}>
      
      {/* 1. HERO SECTION - The Innovation Hub Entrance */}
      <section className="relative px-6 pt-40 pb-32 md:pt-56 md:pb-48 lg:pt-64 lg:pb-56 flex flex-col items-center justify-center text-center overflow-hidden">
        <FadeIn className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left w-full mb-16">
            <div className="flex-1">
              <TextReveal className={`text-sm font-bold tracking-[0.4em] uppercase mb-6 block drop-shadow-sm transition-colors ${showBgVideo ? "text-accent/80" : "text-accent"}`}>
                Future Tech Ecosystem
              </TextReveal>
              
              <h1 className={`text-5xl sm:text-6xl md:text-[5.5rem] font-black tracking-tight mb-8 leading-[1.05] uppercase transition-colors ${showBgVideo ? "text-white" : "text-white"}`}>
                Innovating the <br /> <span className="text-accent italic font-black">Future</span> <br /> <span className="text-glow">with Technology</span>
              </h1>

              <div className="max-w-xl">
                <p className={`text-xl leading-relaxed font-light transition-colors ${showBgVideo ? "text-white/80" : "text-white/70"}`}>
                  Accelerating industrial intelligence through custom <span className="text-accent font-bold">Embedded Systems</span>, <span className="text-accent font-bold">IoT frameworks</span>, and high-performance <span className="text-accent font-bold">Edge AI</span> solutions for global enterprises.
                </p>
              </div>
            </div>

            {/* Video Toggle Button */}
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => setShowBgVideo(!showBgVideo)}>
              <div className="relative w-24 h-24 flex items-center justify-center rounded-full border border-foreground/10 bg-foreground/5 hover:bg-accent hover:border-accent transition-all duration-500 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                {showBgVideo ? (
                  <div className="w-4 h-4 bg-foreground group-hover:bg-white rounded-sm" />
                ) : (
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-foreground border-b-[8px] border-b-transparent ml-1 group-hover:border-l-white transition-colors" />
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-50">{showBgVideo ? "Close" : "Watch"}</span>
                <span className="text-sm font-black uppercase tracking-tight">Video Intro</span>
              </div>
            </div>
          </div>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-6 justify-start w-full">
            <Link href="/contact">
              <ScaleOnHover>
                <Button size="xl" className="w-full sm:w-auto px-10 py-8 rounded-full shadow-lg bg-accent text-white border-none font-bold text-lg">
                  Launch Project <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </ScaleOnHover>
            </Link>
          </FadeIn>
        </FadeIn>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
           <div className="w-8 h-12 rounded-full border border-foreground/20 flex justify-center p-2">
              <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-3 bg-accent rounded-full" />
           </div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION (Brands) */}
      <div className="py-12 bg-black/30 backdrop-blur-md border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-around items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {['GlobalTech', 'InnovateX', 'CyberFlow', 'EcoSystem', 'Quantify'].map((name) => (
             <span key={name} className="text-2xl font-black text-white/50 tracking-tighter hover:text-accent cursor-pointer transition-colors uppercase">{name}</span>
           ))}
        </div>
      </div>

      {/* 3. ABOUT SECTION - Who We Are */}
      <Section className="relative bg-gradient-to-b from-transparent via-slate-950/50 to-transparent py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image 
                src="/images/hero/4.png" 
                alt="ES-Innovations Hub" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-white text-lg font-medium leading-relaxed">
                  "Innovating at the intersection of Hardware and Intelligence."
                </p>
                <span className="text-accent text-sm mt-2 block">— Lead Architect</span>
              </div>
            </div>
            {/* Abstract floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </FadeIn>

          <FadeIn direction="right">
            <TextReveal className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Our DNA</TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Leading the Wave of <br /> Digital Transformation.
            </h2>
            <p className="text-foreground/70 text-lg mb-10 leading-relaxed italic">
              Since our inception, we've been obsessed with efficiency. From medical monitoring systems to smart industrial controls, ES-Innovations hub delivers integrated solutions that define the fastest health and tech experiences.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Active Nodes", value: "25k+" },
                { label: "Successful Deployments", value: "850+" },
                { label: "Engineering Excellence", value: "12 Yrs" },
                { label: "Global Presence", value: "15 Cities" }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-6">
                  <div className="text-3xl font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 4. SERVICES - The Tech Stack */}
      <Section className="bg-black/40 backdrop-blur-xl border-y border-white/5">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-glow underline decoration-accent/30 underline-offset-8">Our Specializations</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Harnessing the power of AI, IoT, and Cloud to build scalable empires for our global partners.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Cpu,
              title: "Embedded Systems",
              desc: "From PCB design to high-performance firmware, we bring silicon to life with precision and reliability.",
              color: "blue"
            },
            {
              icon: Brain,
              title: "Edge Intelligence",
              desc: "Deploying sophisticated AI models directly on sensors for real-time diagnostics and autonomous decision making.",
              color: "purple"
            },
            {
              icon: Zap,
              title: "IoT Ecosystems",
              desc: "Architecting massive-scale device networks that communicate seamlessly across borders and cloud barriers.",
              color: "cyan"
            }
          ].map((service, idx) => (
            <ScaleOnHover key={idx}>
              <GlowingCard className="p-10 h-full border-white/10 group cursor-default">
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/10 flex items-center justify-center mb-8 border border-${service.color}-500/20 group-hover:scale-110 transition-all shadow-inner`}>
                  <service.icon className={`h-8 w-8 text-${service.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center text-sm font-bold text-foreground/40 group-hover:text-accent transition-all gap-2">
                  View Specs <ArrowRight className="h-4 w-4" />
                </div>
              </GlowingCard>
            </ScaleOnHover>
          ))}
        </div>
      </Section>

      {/* 5. PORTFOLIO - Featured Works Hub */}
      <Section className="py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn direction="left" className="max-w-xl text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Showcase</h2>
            <p className="text-blue-100/60 text-lg italic">
              A curated look into our engineering breakthroughs across HealthTech and Industrial Automation.
            </p>
          </FadeIn>
          <FadeIn direction="right">
            <Link href="/projects">
              <Button variant="outline" className="border-accent/30 text-white hover:bg-accent/20 rounded-full px-8 py-6">
                Explore All Research
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Cardiac Digital Twin", category: "AI & SIMULATION", img: "/projects/digital-twin/hero.png" },
            { title: "Face Matcher AI", category: "Forensic Machine Learning", img: "/projects/face-matcher/hero.png" },
            { title: "SmartECG AI Digitalizer", category: "AI-Powered Diagnostics", img: "/projects/ecg-digitalizer/hero.png" },
            { title: "CardioVis Pro", category: "HealthTech Hub", img: "/images/hero/5.png" }
          ].map((project, i) => (
            <Link href="/projects" key={i}>
              <FadeIn delay={i * 0.2} className="group relative aspect-video rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 shadow-2xl">
                <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:translate-x-4 transition-transform duration-500 line-clamp-2 uppercase tracking-tighter">{project.title}</h3>
                  <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full" />
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. TESTIMONIALS - Global Voices */}
      <Section className="bg-black/60 relative overflow-hidden py-32 border-y border-white/5">
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none rotate-12">
           <Globe className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map((s) => <Award key={s} className="h-8 w-8 text-accent fill-accent/20" />)}
            </div>
            <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-12">
              "ES-Innovations transformed our legacy production lines into a hyper-connected neural factory. Their expertise in embedded AI is truly world-class and set a new benchmark for our operations."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-accent/50 mb-6 overflow-hidden">
                 <Image src="/logo.png" alt="Client" width={80} height={80} className="object-cover grayscale hover:grayscale-0" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-widest tracking-tighter">Dr. J. Andersson</h4>
              <p className="text-accent/60 text-sm font-bold mt-1 tracking-widest">CTO — CyberFlow Systems</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 7. CTA - Join the Hub */}
      <Section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-blue-500/5 to-transparent -z-10" />
        <FadeIn className="text-center max-w-4xl px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter">Are you thinking about <br className="hidden md:block" /> <span className="text-accent italic">changing your life?</span></h2>
          <p className="text-blue-100/70 mb-14 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Let's build something world-scale together. The ES-Innovations Hub is open for your next breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <ScaleOnHover>
                <Button size="xl" className="font-black text-xl px-12 py-8 rounded-full shadow-2xl bg-white text-black hover:bg-slate-100">
                  GET IN TOUCH
                </Button>
              </ScaleOnHover>
            </Link>
            <Link href="/about">
              <ScaleOnHover>
                <Button variant="outline" size="xl" className="font-black text-xl px-12 py-8 rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                  OUR TEAM
                </Button>
              </ScaleOnHover>
            </Link>
          </div>
        </FadeIn>
      </Section>

    </div>
  );
}
