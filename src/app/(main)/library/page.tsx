import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, Search } from "lucide-react";

const modules = [
  { 
    title: "SQL Fundamentals", 
    category: "Technical Skills", 
    level: "Beginner",
    duration: "4 hours",
    description: "Learn the basics of SQL to query and manage databases, a core skill for any data role."
  },
  { 
    title: "User Research Methods", 
    category: "Product Skills", 
    level: "Intermediate",
    duration: "3 hours",
    description: "Discover how to conduct effective user research to build products that customers love."
  },
  { 
    title: "Data Visualization Best Practices", 
    category: "Technical Skills", 
    level: "Beginner",
    duration: "2 hours",
    description: "Master the art of creating compelling charts and dashboards to tell stories with data."
  },
  { 
    title: "Career Networking Strategies", 
    category: "Career Tactics", 
    level: "Beginner",
    duration: "1.5 hours",
    description: "Learn how to build and maintain a professional network to advance your career."
  },
  {
    title: "Agile & Scrum Basics",
    category: "Product Skills",
    level: "Beginner",
    duration: "2.5 hours",
    description: "Understand the fundamentals of Agile methodologies and the Scrum framework for effective project management."
  },
  {
    title: "A/B Testing for Product Managers",
    category: "Product Skills",
    level: "Intermediate",
    duration: "3 hours",
    description: "Learn how to design and analyze A/B tests to make data-driven product decisions."
  }
];

export default function LibraryPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Learning Library
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Curated learning modules to accelerate your career growth.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Filter modules by keyword..." className="pl-10" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <Badge variant={module.level === 'Beginner' ? 'default' : module.level === 'Intermediate' ? 'secondary' : 'outline'}>
                                {module.level}
                            </Badge>
                        </div>
                        <CardTitle>{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <Badge variant="outline">{module.category}</Badge>
                        <p className="text-muted-foreground mt-4">{module.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4"/>
                            <span>{module.duration}</span>
                        </div>
                        <Button className="w-full">Add to Roadmap</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

      </div>
    </div>
  );
}
