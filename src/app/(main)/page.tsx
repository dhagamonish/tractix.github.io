
'use client';
import Link from "next/link";
import { ArrowRight, BookCopy, HelpCircle, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function Home() {
  const painPoints = [
    {
      icon: <BookCopy className="w-8 h-8 text-primary" />,
      text: "Overwhelmed by too many courses",
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-primary" />,
      text: "Unsure which skill matches their career goals",
    },
    {
      icon: <Wallet className="w-8 h-8 text-primary" />,
      text: "Wasting time & money on the wrong path",
    }
  ];

  const howItWorksSteps = [
      {
        title: "1️⃣ Take the Quiz",
        description: "Answer few quick questions about your skills & goals."
      },
      {
        title: "2️⃣ Get Your Roadmap",
        description: "See a 90-day personalized plan with milestones."
      },
      {
        title: "3️⃣ Start Small",
        description: "Take your first step without second-guessing."
      }
  ];
  
  const testimonials = [
      {
        quote: "I wasted 2 months on Python before realizing I needed SQL. Tractix would’ve saved me that time.",
        author: "25, Data Analyst, Bangalore"
      },
      {
        quote: "I don’t need 100 courses. I just want to know where to start.",
        author: "23, Marketing Associate, Pune"
      },
      {
        quote: "Tractix feels like having a mentor, but faster and clearer.",
        author: "27, Developer, Hyderabad"
      }
  ];

  const faqs = [
    {
        question: "How is this different from other edtech platforms?",
        answer: "Tractix doesn’t sell courses. It gives you a clear roadmap so you pick the right ones."
    },
    {
        question: "What if I change my mind later?",
        answer: "You can always re-take the quiz and regenerate a new roadmap."
    },
    {
        question: "Is it free?",
        answer: "Yes. Your first personalized roadmap is free."
    }
  ]

  const Divider = () => <div className="divider-gradient my-12 md:my-20" />;

  return (
    <main className="flex-1 bg-transparent text-foreground">
        <section className="w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 text-center">
            <div className="container px-4 md:px-6">
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl !leading-tight">
                       Confused about what to learn next?
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
                       Tractix is your career GPS. In just 5 minutes, get a personalized roadmap that aligns your skills with your goals.
                    </p>
                    <div className="mt-10">
                        <Link href="/quiz">
                            <Button size="lg" className="rounded-full">
                                Start with the Quiz <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 md:mt-20 max-w-4xl mx-auto"
                >
                    <Image 
                        src="https://placehold.co/1200x600.png" 
                        alt="Illustration of a roadmap with milestones"
                        width={1200}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="roadmap milestones pastel illustration"
                    />
                </motion.div>
            </div>
        </section>

        <Divider />

        <section id="problem-promise" className="w-full py-12 md:py-24 bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why most learners feel stuck…</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                         <div key={index} className="flex flex-col items-center text-center gap-4">
                            {point.icon}
                            <p className="text-lg font-medium">{point.text}</p>
                        </div>
                    ))}
                </div>
                
                <div className="max-w-3xl mx-auto text-center mt-16">
                     <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        👉 Tractix solves this by turning confusion into clarity — with a roadmap that’s clear, actionable, and career-aligned.
                    </h3>
                </div>
            </div>
        </section>
        
        <Divider />

        <section id="how-it-works" className="w-full py-12 md:py-24 bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How Tractix works</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                    {howItWorksSteps.map((step, index) => (
                        <Card key={index} className="bg-transparent border-0 shadow-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-foreground/80">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Link href="/quiz">
                        <Button size="lg" className="rounded-full">
                           Start with the Quiz <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
        
        <Divider />

        <section id="social-proof" className="w-full py-12 md:py-24 bg-transparent">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What young professionals say…</h2>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card/60 backdrop-blur-lg border-0 shadow-lg">
                           <CardContent className="p-6">
                                <p className="text-lg italic text-foreground mb-4">💬 “{testimonial.quote}”</p>
                                <p className="font-semibold text-muted-foreground">- {testimonial.author}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <Divider />

        <section id="faq" className="w-full py-12 md:py-24 bg-transparent">
             <div className="container px-4 md:px-6 max-w-3xl mx-auto">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">You might be wondering…</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index+1}`}>
                            <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
             </div>
        </section>

        <Divider />

        <section className="w-full py-16 md:py-28 bg-transparent">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">👉 Stop wasting time deciding. Start your roadmap today.</h2>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/quiz">
                       <Button size="lg" className="rounded-full text-lg h-12 px-10">
                            Take the Free Reflection Quiz
                       </Button>
                    </Link>
                </div>
                 <div className="mt-4">
                    <Link href="/roadmap?role=Data+Analyst">
                         <Button variant="link">
                            Preview a Sample Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                         </Button>
                    </Link>
                </div>
            </div>
        </section>
    </main>
  );
}
