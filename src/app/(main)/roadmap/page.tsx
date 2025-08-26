
'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, ExternalLink, Lightbulb, Rocket, Target, Upload } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useMemo } from "react";
import "./roadmap.css";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


const roadmapData: Record<string, any> = {
  "Product Manager": {
    alignment: 78,
    recommendation: "Focus on user research and roadmapping in your first 90 days.",
    beginner: {
        phases: [
          {
            title: "Phase 1: Foundations (0-30 Days)",
            goals: [
              { 
                id: "pm-sql",
                title: "Learn SQL Basics",
                description: "Understand how to query databases to pull your own data. This is crucial for making data-informed decisions without relying on an analyst.",
                resource: "/micro-task" 
              },
              { 
                id: "pm-personas",
                title: "Master User Personas",
                description: "Deeply understanding your target user is the foundation of building a successful product. It guides every feature decision.",
                resource: "/library"
              },
            ]
          },
          {
            title: "Phase 2: Core Skills (31-60 Days)",
            goals: [
              { 
                id: "pm-roadmap",
                title: "Build a Product Roadmap",
                description: "Learn to create a clear, strategic roadmap that aligns stakeholders and guides the development team.",
                resource: "/library"
              },
              { 
                id: "pm-competitor",
                title: "Conduct a Competitor Analysis",
                description: "Understand the market landscape to identify opportunities and differentiate your product.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Advanced Practice (61-90 Days)",
            goals: [
              { 
                id: "pm-abtest",
                title: "Run an A/B Test",
                description: "Learn how to design and interpret A/B tests to validate hypotheses and optimize features.",
                resource: "#"
              },
              { 
                id: "pm-interview",
                title: "Prepare for PM Interviews",
                description: "Practice case studies and behavioral questions to be ready for your job search.",
                resource: "/resources"
              }
            ]
          },
        ]
    },
    stretch: {
        phases: [
          {
            title: "Phase 1: Strategic Foundations (0-30 Days)",
            goals: [
              { 
                id: "pm-s-market",
                title: "Master Market Sizing",
                description: "Go beyond features to understand the total addressable market and justify strategic product bets.",
                resource: "/library" 
              },
              { 
                id: "pm-s-metrics",
                title: "Define North Star Metrics",
                description: "Learn to identify and track the single most important metric that captures the core value your product delivers.",
                resource: "/library"
              },
            ]
          },
          {
            title: "Phase 2: Influence & Leadership (31-60 Days)",
            goals: [
              { 
                id: "pm-s-stakeholder",
                title: "Build a Stakeholder Map",
                description: "Visually map out key stakeholders to understand their influence and interests, enabling better communication.",
                resource: "#"
              },
              { 
                id: "pm-s-api",
                title: "Understand API-as-a-Product",
                description: "Learn the principles of treating APIs as standalone products, essential for platform strategies.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Go-to-Market (61-90 Days)",
            goals: [
              { 
                id: "pm-s-pricing",
                title: "Model a Pricing Strategy",
                description: "Explore different pricing models (e.g., value-based, tiered) and their impact on revenue and adoption.",
                resource: "#"
              },
              { 
                id: "pm-s-mock",
                title: "Lead a Mock Product Review",
                description: "Practice presenting a product strategy and defending your decisions in a high-stakes environment.",
                resource: "/resources"
              }
            ]
          },
        ]
    }
  },
  "Data Analyst": {
    alignment: 72,
    recommendation: "Strengthen SQL and Visualization → first 90 days.",
    beginner: {
        phases: [
          {
            title: "Phase 1: Foundations (0-30 Days)",
            goals: [
              { 
                id: "da-sql",
                title: "Learn SQL basics (Joins, Aggregates)",
                description: "SQL is the bread and butter of data analysis. Mastering it is non-negotiable for accessing and manipulating data.",
                resource: "/micro-task" 
              },
              { 
                id: "da-miniproject",
                title: "Do 1 mini project (clean dataset → analyze)",
                description: "Hands-on practice is the fastest way to learn. A small project builds confidence and a portfolio piece.",
                resource: "/library"
              },
              { 
                id: "da-peer",
                title: "Share progress with a peer",
                description: "Explaining your findings to someone else solidifies your own understanding and improves communication skills.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 2: Core Skills (31-60 Days)",
            goals: [
              {
                id: "da-viz",
                title: "Master a Visualization Tool (Tableau)",
                description: "Data is useless if you can't communicate it. Visualization tools turn raw numbers into compelling stories.",
                resource: "#"
              },
              {
                id: "da-stats",
                title: "Learn Basic Statistics",
                description: "Understand concepts like mean, median, and standard deviation to accurately interpret your data.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Advanced Practice (61-90 Days)",
            goals: [
              {
                id: "da-dashboard",
                title: "Build a Dashboard for a Business Case",
                description: "Apply your skills to a real-world problem. This shows employers you can deliver business value.",
                resource: "#"
              },
              {
                id: "da-interview",
                title: "Practice a Technical Interview",
                description: "Be ready to showcase your SQL and problem-solving skills under pressure.",
                resource: "/resources"
              }
            ]
          },
        ]
    },
    stretch: {
        phases: [
          {
            title: "Phase 1: Advanced SQL & Python (0-30 Days)",
            goals: [
              { 
                id: "da-s-sql",
                title: "Master Window Functions in SQL",
                description: "Level up your SQL skills to perform complex calculations over sets of rows, essential for sophisticated analysis.",
                resource: "/library" 
              },
              { 
                id: "da-s-pandas",
                title: "Learn Pandas for Data Manipulation",
                description: "Use Python's powerful Pandas library for efficient data cleaning, transformation, and analysis.",
                resource: "/library"
              },
            ]
          },
          {
            title: "Phase 2: Statistical Modeling (31-60 Days)",
            goals: [
              {
                id: "da-s-regression",
                title: "Understand Linear Regression",
                description: "Learn the fundamentals of predictive modeling by understanding relationships between variables.",
                resource: "#"
              },
              {
                id: "da-s-abtest",
                title: "Design and Analyze an A/B Test",
                description: "Go beyond basic analysis to statistically prove the impact of a change.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Automation & Storytelling (61-90 Days)",
            goals: [
              {
                id: "da-s-automation",
                title: "Automate a Report with Python",
                description: "Save time and increase efficiency by automating repetitive reporting tasks.",
                resource: "#"
              },
              {
                id: "da-s-presentation",
                title: "Present a Data Story to Stakeholders",
                description: "Practice framing your analysis as a compelling narrative that drives action.",
                resource: "/resources"
              }
            ]
          },
        ]
    }
  },
   "Product Analyst": {
    alignment: 85,
    recommendation: "Blend product intuition with data skills in your first 90 days.",
    beginner: {
        phases: [
          {
            title: "Phase 1: Foundations (0-30 Days)",
            goals: [
              { 
                id: "pa-sql",
                title: "Deep Dive into SQL for Funnels",
                description: "Go beyond basic queries to analyze user journeys and identify drop-off points in the product.",
                resource: "/micro-task" 
              },
              { 
                id: "pa-persona",
                title: "Analyze a User Persona",
                description: "Connect data analysis to real user problems by understanding the 'who' behind the numbers.",
                resource: "/library"
              }
            ]
          },
          {
            title: "Phase 2: Core Skills (31-60 Days)",
            goals: [
              {
                id: "pa-abtest",
                title: "Learn A/B Testing Principles",
                description: "Understand how to form a hypothesis and measure the impact of product changes accurately.",
                resource: "#"
              },
              {
                id: "pa-metrics",
                title: "Create a Product Metrics Report",
                description: "Learn to identify and track Key Performance Indicators (KPIs) that define product success.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Advanced Practice (61-90 Days)",
            goals: [
              {
                id: "pa-dashboard",
                title: "Build an Interactive Feature Dashboard",
                description: "Create a dashboard that allows product managers to self-serve insights on feature usage.",
                resource: "#"
              },
              {
                id: "pa-interview",
                title: "Practice a Product Case Study Interview",
                description: "Be ready to demonstrate both your analytical and product thinking skills.",
                resource: "/resources"
              }
            ]
          },
        ]
    },
    stretch: {
        phases: [
          {
            title: "Phase 1: Advanced Analytics (0-30 Days)",
            goals: [
              { 
                id: "pa-s-segmentation",
                title: "Conduct User Segmentation Analysis",
                description: "Group users by behavior or attributes to uncover insights for targeted product development.",
                resource: "/library" 
              },
              { 
                id: "pa-s-sql",
                title: "Use SQL for Cohort Analysis",
                description: "Track how user behavior evolves over time to understand long-term engagement and retention.",
                resource: "/library"
              }
            ]
          },
          {
            title: "Phase 2: Experimentation & Causal Inference (31-60 Days)",
            goals: [
              {
                id: "pa-s-experiment",
                title: "Design a Multivariate Test",
                description: "Go beyond A/B testing to test multiple variables at once, accelerating learning.",
                resource: "#"
              },
              {
                id: "pa-s-causal",
                title: "Learn Causal Inference Methods",
                description: "Understand techniques to determine cause-and-effect relationships from observational data.",
                resource: "#"
              }
            ]
          },
          {
            title: "Phase 3: Influence & Strategy (61-90 Days)",
            goals: [
              {
                id: "pa-s-model",
                title: "Build a Predictive Model (e.g., Churn)",
                description: "Use machine learning to predict future user behavior and proactively address issues.",
                resource: "#"
              },
              {
                id: "pa-s-influence",
                title: "Influence a Roadmap Decision with Data",
                description: "Practice building a compelling, data-backed case to persuade product leaders.",
                resource: "/resources"
              }
            ]
          },
        ]
    }
  },
};

function RoadmapPageContent() {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'Data Analyst';
    const data = roadmapData[role] || roadmapData["Data Analyst"];
    
    const [isStretch, setIsStretch] = useState(false);
    const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

    const currentRoadmap = isStretch ? data.stretch : data.beginner;
    const allGoals = useMemo(() => currentRoadmap.phases.flatMap((p: any) => p.goals), [currentRoadmap]);
    const totalTasks = allGoals.length;

    const handleTaskToggle = (taskId: string) => {
        setCompletedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            return newSet;
        });
    };
    
    const progressPercentage = totalTasks > 0 ? (completedTasks.size / totalTasks) * 100 : 0;

    return (
        <div className="w-full py-12 md:py-16 text-foreground bg-transparent">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Skill Roadmap</h1>
                        <p className="text-muted-foreground mt-1">Based on your goals and current skills, here’s your personalized journey.</p>
                    </div>
                     <div className="flex w-full md:w-auto items-center justify-center gap-2">
                        <Button variant="outline"><Upload className="w-4 h-4 mr-2" /> Share</Button>
                        <Button variant="outline">Regenerate roadmap</Button>
                    </div>
                </div>
                
                <Card className="mb-12 hero-block-card">
                    <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Target className="w-8 h-8 text-primary"/>
                            </div>
                            <div>
                                <p className="font-bold text-lg">{`You’re ${data.alignment}% aligned with`}</p>
                                <p className="text-muted-foreground">{role} role.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-center md:text-left md:col-span-2">
                             <div className="p-3 bg-green-500/10 rounded-full hidden sm:block">
                                <Lightbulb className="w-8 h-8 text-green-500"/>
                            </div>
                            <div>
                                <p className="font-semibold">{data.recommendation}</p>
                                <p className="text-sm text-muted-foreground">“Focus on progress, not perfection 🚀”</p>
                                <p className="text-xs italic text-muted-foreground/80 mt-1">Generated using your profile → no two roadmaps are the same.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex items-center justify-center space-x-2 mb-8">
                    <Label htmlFor="roadmap-toggle">Beginner</Label>
                    <Switch id="roadmap-toggle" checked={isStretch} onCheckedChange={setIsStretch} />
                    <Label htmlFor="roadmap-toggle">Stretch</Label>
                </div>


                <div className="relative mb-12">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {currentRoadmap.phases.map((phase: any, index: number) => (
                             <Card key={phase.title} className="roadmap-phase-card bg-card/80 backdrop-blur-lg">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                                            {index + 1}
                                        </div>
                                        <CardTitle>{phase.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="w-full">
                                        {phase.goals.map((goal: any) => (
                                            <AccordionItem key={goal.id} value={`item-${goal.id}`} className="border-b-0">
                                                <div className="flex items-center py-2 group">
                                                    <button onClick={() => handleTaskToggle(goal.id)} className="mr-3 p-1">
                                                        <CheckCircle2 className={cn(
                                                            "w-6 h-6 text-muted-foreground/50 group-hover:text-primary transition-colors",
                                                            completedTasks.has(goal.id) && "text-green-500"
                                                        )} 
                                                        fill={completedTasks.has(goal.id) ? "currentColor" : "none"}
                                                        />
                                                    </button>
                                                    <AccordionTrigger className="flex-1 p-0 text-left hover:no-underline">
                                                        <span className={cn("font-medium", completedTasks.has(goal.id) && "line-through text-muted-foreground")}>
                                                            {goal.title}
                                                        </span>
                                                    </AccordionTrigger>
                                                </div>
                                                <AccordionContent className="pl-11">
                                                    <p className="text-muted-foreground mb-3">{goal.description}</p>
                                                    <Link href={goal.resource}>
                                                        <Button variant="link" size="sm" className="p-0 h-auto">
                                                            Suggested Resource <ExternalLink className="w-3 h-3 ml-1.5"/>
                                                        </Button>
                                                    </Link>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                 <Card className="mb-12">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg sm:text-xl font-bold">Start with Step 1: SQL Basics (30 min practice)</h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <Link href="/micro-task" className="w-full">
                                <Button size="lg" className="w-full">Start Now <ArrowRight className="w-4 h-4 ml-2"/></Button>
                            </Link>
                            <Button size="lg" variant="outline" className="w-full">I'll do this later</Button>
                        </div>
                    </CardContent>
                 </Card>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="bg-secondary/30">
                        <CardContent className="p-6">
                           <blockquote className="text-muted-foreground italic">
                             “I wasted 2 months on Python before realizing SQL mattered. This roadmap would’ve saved me.”
                           </blockquote>
                           <p className="text-right font-semibold mt-2">- Peer Interview Snippet</p>
                        </CardContent>
                     </Card>
                     <Card className="bg-secondary/30">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold">Weekly Progress</p>
                                <Badge variant="secondary">{completedTasks.size} of {totalTasks} tasks done</Badge>
                            </div>
                            <Progress value={progressPercentage} />
                            <p className="text-xs text-muted-foreground mt-1">Complete 1 task this week → unlock progress badge.</p>
                        </CardContent>
                     </Card>
                 </div>
            </div>
        </div>
    )
}

export default function RoadmapPage() {
    return (
        <Suspense fallback={<div className="w-full h-[80vh] flex items-center justify-center"><p>Loading Roadmap...</p></div>}>
            <RoadmapPageContent />
        </Suspense>
    );
}
