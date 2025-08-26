
'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./results.css";
import { cn } from "@/lib/utils";

const recommendations = {
    roleRecommendations: [
      {
        roleName: "Product Manager",
        confidence: "Fit",
        fitExplanation: "- Your interest in leadership and strategy aligns with the core of product management.\n- You enjoy working with cross-functional teams to bring a vision to life.\n- This path allows you to solve user problems while driving business goals.",
        topSkillsToLearn: ["Roadmapping", "User Research", "Agile Methodologies"],
      },
      {
        roleName: "Data Analyst",
        confidence: "Fit",
        fitExplanation: "- Your analytical mindset is perfect for uncovering insights from complex datasets.\n- You enjoy using tools like SQL and Python to find patterns and tell stories with data.\n- This role is ideal for making a direct impact on business decisions through data.",
        topSkillsToLearn: ["SQL", "Tableau / Power BI", "Statistical Analysis"],
      },
      {
        roleName: "Product Analyst",
        confidence: "Fit",
        fitExplanation: "- This role combines your interest in product strategy with your analytical skills.\n- You're driven to understand user behavior through data to improve products.\n- It's a perfect blend of data analysis and product intuition to influence feature development.",
        topSkillsToLearn: ["A/B Testing", "User Funnel Analysis", "Product Metrics"],
      }
    ]
  };


export default function ResultsPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-transparent min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">Your Career Fit Snapshot</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Based on your unique skills, goals, and blockers, here are 3 career paths where you're positioned to thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {recommendations.roleRecommendations.map((role, index) => (
                <div key={index} className="card-container">
                    <div className="title-card">
                    <p>{role.roleName}</p>
                    <Badge className={cn(
                        "title-badge text-xs bg-yellow-500/80 border-yellow-400"
                    )}>
                        {role.confidence}
                    </Badge>
                    </div>
                    <div className="card-content">
                    <div>
                        <div className="title">Why this role fits you:</div>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                        {role.fitExplanation.split('\n').map((point, i) => (
                            point.trim().length > 1 && <li key={i}>{point.trim().substring(1).trim()}</li>
                        ))}
                        </ul>
                    </div>
                    <div>
                        <div className="title">Top Skills to Learn:</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                        {role.topSkillsToLearn.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                        </div>
                    </div>
                    <div className="mt-auto pt-4">
                        <Link href={`/roadmap?role=${encodeURIComponent(role.roleName)}`} className="w-full">
                        <button className="card-btn">
                            Generate My Roadmap
                        </button>
                        </Link>
                    </div>
                    </div>
                </div>
            ))}
            <div className="lg:col-span-3 mt-12 text-center">
                <p className="mb-4 text-lg text-muted-foreground">Want to analyse again?</p>
                <Link href="/quiz">
                <Button>Retake the quiz</Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
