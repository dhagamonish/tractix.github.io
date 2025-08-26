

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";

export default function MicroTaskPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-transparent min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-lg border-0 shadow-lg text-white">
          <CardHeader>
            <CardTitle>Micro-Task: Write an SQL query</CardTitle>
            <CardDescription>A small step to get you started on your Data Analyst path.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Your Task</h3>
              <p className="text-muted-foreground">
                You have a table named `employees` with columns `id`, `name`, and `salary`. Write a SQL query to select the top 3 highest salaries from the table.
              </p>
            </div>
            <div>
              <Textarea
                placeholder="SELECT ..."
                className="font-mono bg-background/50 border-border text-foreground placeholder-muted-foreground"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your Progress</p>
              <Progress value={10} className="w-full h-2" />
              <p className="text-xs text-gray-500 mt-1">Day 1 of 90</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Remind Me Later</Button>
            <Button>
              <Check className="mr-2 h-4 w-4" />
              Mark as Done
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
