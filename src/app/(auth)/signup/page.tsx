'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

const workDesignations = ["Software Engineer", "Product Manager", "Designer", "Marketing", "Analyst", "Other"];
const sources = ["Social Media", "From a friend", "Search Engine", "Other"];

const signupSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    age: z.string().min(1, "Age is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().optional(),
    workDesignation: z.string().min(1, "Work designation is required"),
    otherWorkDesignation: z.string().optional(),
    resume: z.any().optional(),
    skills: z.string().optional(),
    source: z.string().optional(),
    otherSource: z.string().optional(),
}).refine(data => data.workDesignation !== 'Other' || (data.otherWorkDesignation && data.otherWorkDesignation.length > 0), {
    message: "Please specify your work designation",
    path: ["otherWorkDesignation"],
}).refine(data => data.source !== 'Other' || !data.source || (data.otherSource && data.otherSource.length > 0), {
    message: "Please specify where you heard about us",
    path: ["otherSource"],
});


export default function SignupPage() {
    const router = useRouter();
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: "",
            age: "",
            email: "",
            phoneNumber: "",
            workDesignation: "",
            otherWorkDesignation: "",
            skills: "",
            source: "",
            otherSource: "",
        },
    });

    const watchedWorkDesignation = form.watch("workDesignation");
    const watchedSource = form.watch("source");

    const onSubmit = (values: z.infer<typeof signupSchema>) => {
        console.log(values);
        router.push('/quiz');
    };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 text-card-foreground bg-transparent">
        <Card className="mx-auto w-full max-w-xl bg-card/60 backdrop-blur-lg border-0 shadow-lg">
            <CardHeader>
            <CardTitle className="text-2xl">Ready to learn?</CardTitle>
            <CardDescription className="text-muted-foreground">
                Sign up to save your personalized roadmap and track progress.
            </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Smith" {...field} className="bg-background" />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="age"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="25" {...field} className="bg-background" />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="m@example.com" {...field} className="bg-background" />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone Number (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+1 234 567 890" {...field} className="bg-background" />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="workDesignation"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Work Designation</FormLabel>
                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue placeholder="Select your designation" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {workDesignations.map(desg => <SelectItem key={desg} value={desg}>{desg}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        {watchedWorkDesignation === 'Other' && (
                            <FormField
                                control={form.control}
                                name="otherWorkDesignation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Please specify your designation</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Data Scientist" {...field} className="bg-background" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                         <FormField
                            control={form.control}
                            name="resume"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Upload Resume (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="file" {...field} className="bg-background" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="skills"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Skills (Optional, comma-separated)</FormLabel>
                                <FormControl>
                                    <Input placeholder="React, Node.js, SQL" {...field} className="bg-background" />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Where did you hear about us? (Optional)</FormLabel>
                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-background">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                       {sources.map(source => <SelectItem key={source} value={source}>{source}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        {watchedSource === 'Other' && (
                           <FormField
                                control={form.control}
                                name="otherSource"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Please specify where you heard about us</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Newsletter" {...field} className="bg-background" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <div className="flex justify-center">
                            <Button type="submit" className="w-1/2 rounded-full">Sign Up</Button>
                        </div>
                    </form>
                </Form>
                 <div className="mt-4 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="underline">
                        Log in
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
