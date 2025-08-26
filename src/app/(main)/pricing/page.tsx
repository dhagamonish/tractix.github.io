import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const freeFeatures = [
  "Basic reflection assessment",
  "Single role match",
  "Basic roadmap overview",
];

const proFeatures = [
  "Full roadmap with tasks",
  "Progress tracking & reminders",
  "Advanced role insights",
  "Learning library access",
  "Weekly check-ins",
];

export default function PricingPage() {
  const handleUpgradeClick = () => {
    console.log({
        event: 'upgrade_clicked',
        payload: {
            userId: 'anonymous', // Replace with actual user ID
            timestamp: new Date().toISOString(),
            plan: 'Pro',
        }
    });
  }

  return (
    <div className="w-full py-12 md:py-24 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Choose the plan that fits your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For getting started</CardDescription>
              <div className="text-4xl font-bold mt-4">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {freeFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/quiz" className="w-full">
                <Button variant="outline" className="w-full">Get Started Free</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col border-primary shadow-lg relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold rounded-full">
                Recommended
              </div>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For serious career builders</CardDescription>
               <div className="text-4xl font-bold mt-4">$29<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent className="flex-grow">
               <ul className="space-y-3">
                {proFeatures.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleUpgradeClick}>Upgrade Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
