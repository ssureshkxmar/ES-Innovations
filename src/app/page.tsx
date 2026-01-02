import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Globe, Brain, ShieldCheck, Users, Lightbulb } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { FadeIn, ScaleOnHover, TextReveal } from "@/components/ui/Motion";


import { GlowingCard } from "@/components/ui/GlowingCard";

export default function Home() {
  return (
    <div className="flex flex-col bg-transparent selection:bg-accent selection:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:py-48 lg:py-56 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Animated Background Slideshow - Moved to Layout for Global Persistence */}

        <FadeIn className="container mx-auto max-w-5xl relative z-10">

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
            Innovating the Future with <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg text-glow animate-pulse">
              Technology
            </span>
          </h1>

          <FadeIn delay={0.2} className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            {SITE_NAME} delivers cutting-edge solutions in Embedded Systems, IoT, AI, and Software Development.
            <br /> We empower businesses and train the next generation of engineers.
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <ScaleOnHover>
                <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all bg-accent hover:bg-cyan-600 border-none">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ScaleOnHover>
            </Link>
            <Link href="/services">
              <ScaleOnHover>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-accent/50 text-foreground hover:bg-accent/10 shadow-lg bg-background/50 backdrop-blur-md">
                  Explore Services
                </Button>
              </ScaleOnHover>
            </Link>
          </FadeIn>
        </FadeIn>
      </section>

      {/* Services Overview */}
      <Section className="bg-black/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/5 via-transparent to-transparent -z-10" />
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight text-glow">Our Expertise</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-4 shadow-[0_0_10px_#0ea5e9]" />
          <p className="text-foreground/70 max-w-xl mx-auto text-lg">
            Comprehensive technology solutions tailored for enterprise growth and academic excellence.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: "Electronics & IoT",
              desc: "End-to-end embedded system design, PCB auditing, and smart IoT device integration for industrial automation.",
              color: "from-blue-500 to-cyan-400",
              glow: "from-blue-500/20"
            },
            {
              icon: Globe,
              title: "Web & Mobile Dev",
              desc: "Scalable web applications and cross-platform mobile solutions using modern stacks like Next.js and React Native.",
              color: "from-purple-500 to-pink-400",
              glow: "from-purple-500/20"
            },
            {
              icon: Brain,
              title: "AI & Software",
              desc: "Data-driven insights, machine learning model development, and custom software architecture for complex problems.",
              color: "from-emerald-500 to-teal-400",
              glow: "from-emerald-500/20"
            }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <GlowingCard glowColor={item.glow} className="h-full">
                <div className="relative h-full text-center z-10 p-8 flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-slate-50 dark:bg-slate-900 shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300 box-glow`}>
                    <item.icon className={`h-10 w-10 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                  </div>

                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-4 group-hover:from-accent group-hover:to-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </GlowingCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-black/40 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center container mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-8">Why Partner With Us?</h2>
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Corporate Credibility", desc: "Registered Private Limited company ensuring legal compliance and professional standards." },
                { icon: Users, title: "Expert Team", desc: "Led by industry veterans with deep expertise in hardware and software domains." },
                { icon: Lightbulb, title: "Innovation First", desc: "We don't just build; we innovate. Focused on delivering future-ready scalable solutions." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="bg-card p-3 rounded-xl shadow-lg border border-secondary group-hover:border-accent/50 transition-colors h-fit shrink-0">
                    <item.icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative h-[450px] flex items-center justify-center group">
            <div className="text-center p-8 relative z-10 transition-transform duration-500 group-hover:scale-105 flex flex-col items-center justify-center w-full h-full">
              <div className="relative w-full h-full max-w-[400px] max-h-[300px] drop-shadow-2xl filter hover:brightness-110 transition-all">
                <Image
                  src="/logo.png"
                  alt="ES Innovations Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Internship CTA */}
      <Section className="py-24 relative overflow-hidden bg-black/60 backdrop-blur-sm">
        <div className="absolute inset-0 bg-primary/20 -z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent -z-10" />

        <FadeIn className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">
            Partner with us to leverage cutting-edge technology and drive innovation in your organization.
            Let's build the future together.
          </p>
          <Link href="/contact">
            <ScaleOnHover>
              <Button size="lg" variant="secondary" className="font-bold text-lg px-8 py-6 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Contact Us
              </Button>
            </ScaleOnHover>
          </Link>
        </FadeIn>
      </Section>
    </div>
  );
}
