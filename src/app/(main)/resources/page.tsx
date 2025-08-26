import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

const resources = [
  { 
    type: "Guide", 
    date: "Jan 15", 
    title: "The Ultimate Career Transition Guide",
    excerpt: "A step-by-step guide to navigate your career change with confidence, from self-assessment to landing the new role.",
    tags: ["Career Change", "Job Search", "Strategy"]
  },
  { 
    type: "Template", 
    date: "Jan 10", 
    title: "Data Analytics Career Starter Pack",
    excerpt: "Includes a resume template, portfolio guide, and project ideas specifically for aspiring Data Analysts.",
    tags: ["Data Analytics", "Resume", "Portfolio"]
  },
  { 
    type: "Article", 
    date: "Jan 8", 
    title: "Networking for Introverts: A Practical Approach",
    excerpt: "Learn how to build meaningful professional relationships without draining your energy. Actionable tips for introverts.",
    tags: ["Networking", "Soft Skills"]
  },
  { 
    type: "Template", 
    date: "Jan 5", 
    title: "Salary Negotiation Scripts That Work",
    excerpt: "Word-for-word scripts to help you confidently negotiate your salary and benefits for a new or existing role.",
    tags: ["Negotiation", "Salary", "Communication"]
  }
]

export default function ResourcesPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Resources
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Career guides, templates, and insights to accelerate your professional growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
            {resources.map((resource, index) => (
                <Card key={index} className="hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                            <div className="bg-primary/10 p-3 rounded-full hidden sm:block">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                                    <Badge variant="secondary">{resource.type}</Badge>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4"/>
                                        <span>{resource.date}</span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2 group-hover:text-primary">{resource.title}</h2>
                                <p className="text-muted-foreground mb-4">{resource.excerpt}</p>
                                <div className="flex flex-wrap gap-2">
                                    {resource.tags.map(tag => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="self-start">
                                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary"/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
