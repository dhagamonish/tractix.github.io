'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Form submitted");
        setSubmitted(true);
    };

    if (submitted) {
        return (
             <div className="w-full py-12 md:py-24 bg-transparent flex items-center justify-center">
                <Card className="w-full max-w-md text-center p-8">
                     <div className="mx-auto bg-green-100 dark:bg-green-900/50 rounded-full p-3 w-fit mb-4">
                        <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl mb-2">Message Sent!</CardTitle>
                    <p className="text-muted-foreground mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </Card>
             </div>
        );
    }

  return (
    <div className="w-full py-12 md:py-24 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions. We typically respond within 24 hours.
                    </p>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" required />
                        </div>
                         <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                         <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message" required />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
