import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Why Tractix?
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We believe career clarity should be accessible to everyone, not just a privileged few. We provide the structure and insight you need to move forward with confidence.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is to democratize career guidance. We leverage technology and behavioral science to provide structured, actionable insights that help early to mid-career professionals find a path that truly aligns with their passions and skills.
              </p>
            </CardContent>
          </Card>
           <div className="flex flex-col gap-6">
             <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">
                        We are a passionate team of career coaches, data scientists, and product experts dedicated to building tools that empower individuals.
                    </p>
                </CardContent>
             </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">
                       We combine a data-driven methodology with a human-centric design philosophy to create an experience that is both effective and engaging.
                    </p>
                </CardContent>
             </Card>
           </div>
        </div>
        
        <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto p-6 sm:p-8 bg-secondary/30">
                <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/quiz">
                        <Button size="lg">Try Tractix Free</Button>
                    </Link>
                    <Link href="/contact">
                         <Button size="lg" variant="outline">Contact Us</Button>
                    </Link>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
}
