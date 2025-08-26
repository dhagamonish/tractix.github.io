
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, HelpCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { quizSchema, type QuizFormData, careerStages, excitingRoles, motivations, frustrations, timeCommitments, learningStyles } from "@/lib/types";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { Logo } from "./logo";
import { LinkedinIcon } from "./icons/linkedin";
import { UploadIcon } from "./icons/upload";

export function QuizForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      careerStage: "",
      otherCareerStage: "",
      excitingRole: "",
      otherExcitingRole: "",
      motivations: [],
      frustrations: [],
      otherFrustration: "",
      timeCommitment: "",
      learningStyle: "",
      careerAspiration: ""
    },
  });

  const { control, trigger, handleSubmit, watch, setValue } = form;
  const watchedCareerStage = watch("careerStage");
  const watchedExcitingRole = watch("excitingRole");
  const watchedFrustrations = watch("frustrations");
  
  const steps = [
    { id: 0, isIntro: true, title: "Let’s discover your next learning step." },
    { id: 1, isOptional: true, title: "Want even better recommendations?", subtext: "(Optional) Let’s use your resume or LinkedIn to find hidden skills." },
    { id: 2, field: "careerStage", title: "Where are you in your career right now?" },
    { id: 3, field: "excitingRole", title: "Which role/field excites you most right now?" },
    { id: 4, field: "motivations", title: "What’s your main motivation to learn?", isMulti: true },
    { id: 5, field: "frustrations", title: "What frustrates you most about learning today?", isMulti: true },
    { id: 6, field: "timeCommitment", title: "How much time can you realistically commit per week?" },
    { id: 7, field: "learningStyle", title: "Preferred learning style?" },
    { id: 8, field: "careerAspiration", title: "When you imagine yourself 1 year from now, what do you want to feel about your career?" },
  ];
  
  const totalQuestions = steps.filter(s => s.field).length;
  const currentQuestionIndex = steps.filter(s => s.id < currentStep && s.field).length;

  const handleManualUpdate = (onChange: (...event: any[]) => void, value: any) => {
      onChange(value);
  };
  
  const handleAutoNext = (onChange: (...event: any[]) => void, value: any, isDropdown: boolean = false) => {
    onChange(value);
    const currentQuestion = steps[currentStep];

    if (!currentQuestion.isMulti && currentStep < steps.length - 1) {
       // For dropdowns, the menu closing provides a natural pause. For radios, it's instant.
       setTimeout(() => handleNext(), isDropdown ? 0 : 200);
    }
  };

  const handleNext = async () => {
    const currentQuestion = steps[currentStep];
    const field = currentQuestion.field as keyof QuizFormData;
    
    if (field) {
        const isValid = await trigger(field);
        if (!isValid) return;

        if (field === 'careerStage' && watch('careerStage') === 'Other') {
            const otherPathValid = await trigger('otherCareerStage');
            if (!otherPathValid) return;
        }
        if (field === 'excitingRole' && watch('excitingRole') === 'Other') {
            const otherPathValid = await trigger('otherExcitingRole');
            if (!otherPathValid) return;
        }
        if (field === 'frustrations' && watch('frustrations').includes('Other')) {
            const otherPathValid = await trigger('otherFrustration');
            if (!otherPathValid) return;
        }
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };

  const onSubmit = async (data: QuizFormData) => {
    setIsSubmitting(true);
    try {
        sessionStorage.setItem('quizData', JSON.stringify(data));
        router.push(`/loading`);
    } catch (error) {
        console.error("Failed to save quiz data or redirect:", error);
        setIsSubmitting(false);
    }
  };
  
  const currentQuestion = steps[currentStep];

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-lg border-0 shadow-lg text-white">
        <Form {...form}>
          <CardHeader className="sticky top-0 z-10 rounded-t-lg">
              <div className="flex justify-between items-center w-full mb-2">
                 <Logo />
                 <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                           <span className="flex items-center text-sm text-muted-foreground cursor-help">
                             <HelpCircle className="w-4 h-4 mr-1.5" /> Need help?
                           </span>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>No wrong answers, just be honest</p>
                        </TooltipContent>
                    </Tooltip>
                 </TooltipProvider>
              </div>
              <Progress value={currentStep === 0 ? 0 : (currentQuestionIndex / totalQuestions * 100)} className="h-1" />
          </CardHeader>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="min-h-[350px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-xl font-bold text-foreground">
                                {currentQuestion.isIntro ? '👉' : ''} {currentQuestion.title}
                            </h2>
                            {currentQuestion.isIntro && (
                                <p className="text-muted-foreground mt-2">Answer {totalQuestions} quick questions. Takes less than 3 minutes.</p>
                            )}
                             {currentQuestion.isOptional && (
                                <p className="text-muted-foreground mt-2">{currentQuestion.subtext}</p>
                            )}
                        </div>

                        <div className="space-y-3 max-w-md mx-auto">
                            {/* Intro Screen */}
                            {currentQuestion.isIntro && (
                                <div className="flex justify-center">
                                  <Button size="lg" type="button" onClick={handleNext}>
                                      Start the Quiz &rarr;
                                  </Button>
                                </div>
                            )}

                            {/* Optional Upload Step */}
                            {currentQuestion.isOptional && (
                                <div className="space-y-4 text-center">
                                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg" className="w-full sm:w-auto">
                                            <UploadIcon className="w-5 h-5 mr-2" /> Upload Resume
                                        </Button>
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                            <LinkedinIcon className="w-5 h-5 mr-2" /> Import from LinkedIn
                                        </Button>
                                    </div>
                                    <Button variant="link" onClick={handleNext}>Skip for now</Button>
                                </div>
                            )}
                            
                            {/* Q1: Career Stage */}
                            {currentQuestion.field === 'careerStage' && (
                                <FormField control={control} name="careerStage" render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={(value) => handleAutoNext(field.onChange, value, true)} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Select your current stage" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {careerStages.map(val => <SelectItem key={val} value={val}>{val}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    {watchedCareerStage === 'Other' && (
                                        <FormField control={control} name="otherCareerStage" render={({ field }) => (
                                            <FormItem><FormControl><Input {...field} placeholder="Please specify" className="mt-2 bg-background" /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    )}
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}

                            {/* Q2: Exciting Role */}
                            {currentQuestion.field === 'excitingRole' && (
                                <FormField control={control} name="excitingRole" render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={(value) => handleAutoNext(field.onChange, value, true)} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Select a role or field" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {excitingRoles.map(val => <SelectItem key={val} value={val}>{val}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    {watchedExcitingRole === 'Other' && (
                                        <FormField control={control} name="otherExcitingRole" render={({ field }) => (
                                            <FormItem><FormControl><Input {...field} placeholder="Please specify" className="mt-2 bg-background" /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    )}
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}

                            {/* Q3: Motivations */}
                            {currentQuestion.field === 'motivations' && (
                                <FormField control={control} name="motivations" render={() => (
                                <FormItem>
                                    {motivations.map(item => (<FormField key={item} control={control} name="motivations"
                                    render={({ field }) => (
                                        <FormItem data-state={field.value?.includes(item) ? "checked" : "unchecked"} className="flex flex-row items-start space-x-3 space-y-0 p-3 border rounded-md hover:bg-muted/50 has-[[data-state=checked]]:bg-muted/50 has-[[data-state=checked]]:backdrop-blur-sm border-border transition-colors">
                                        <FormControl>
                                            <Checkbox checked={field.value?.includes(item)}
                                            onCheckedChange={(checked) => {
                                                const newValue = checked ? [...field.value, item] : field.value?.filter(value => value !== item);
                                                handleManualUpdate(field.onChange, newValue);
                                            }}
                                            />
                                        </FormControl>
                                        <Label className="font-normal text-base w-full cursor-pointer">{item}</Label>
                                        </FormItem>
                                    )} />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}

                            {/* Q4: Frustrations */}
                            {currentQuestion.field === 'frustrations' && (
                                <FormField control={control} name="frustrations" render={() => (
                                <FormItem>
                                    {frustrations.map(item => (<FormField key={item} control={control} name="frustrations"
                                    render={({ field }) => (
                                        <FormItem data-state={field.value?.includes(item) ? "checked" : "unchecked"} className="flex flex-row items-start space-x-3 space-y-0 p-3 border rounded-md hover:bg-muted/50 has-[[data-state=checked]]:bg-muted/50 has-[[data-state=checked]]:backdrop-blur-sm border-border transition-colors">
                                        <FormControl>
                                            <Checkbox checked={field.value?.includes(item)}
                                            onCheckedChange={(checked) => {
                                                const newValue = checked ? [...field.value, item] : field.value?.filter(value => value !== item);
                                                handleManualUpdate(field.onChange, newValue);
                                            }}
                                            />
                                        </FormControl>
                                        <Label className="font-normal text-base w-full cursor-pointer">{item}</Label>
                                        </FormItem>
                                    )} />
                                    ))}
                                    {watchedFrustrations.includes('Other') && (
                                        <FormField control={control} name="otherFrustration" render={({ field }) => (
                                            <FormItem><FormControl><Input {...field} placeholder="Please specify" className="mt-2 bg-background" /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    )}
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}
                            
                            {/* Q5: Time Commitment */}
                            {currentQuestion.field === 'timeCommitment' && (
                                <FormField control={control} name="timeCommitment" render={({ field }) => (
                                <FormItem>
                                    <RadioGroup onValueChange={(value) => handleAutoNext(field.onChange, value)} defaultValue={field.value} className="space-y-2">
                                    {timeCommitments.map(val => (
                                        <FormItem key={val} data-state={field.value === val ? "checked" : "unchecked"} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 has-[[data-state=checked]]:bg-muted/50 has-[[data-state=checked]]:backdrop-blur-sm border-border transition-colors">
                                            <FormControl><RadioGroupItem value={val} id={`time-${val}`} /></FormControl>
                                            <Label htmlFor={`time-${val}`} className="font-normal text-base w-full cursor-pointer">{val}</Label>
                                        </FormItem>
                                    ))}
                                    </RadioGroup>
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}

                            {/* Q6: Learning Style */}
                            {currentQuestion.field === 'learningStyle' && (
                                <FormField control={control} name="learningStyle" render={({ field }) => (
                                <FormItem>
                                    <RadioGroup onValueChange={(value) => handleAutoNext(field.onChange, value)} defaultValue={field.value} className="space-y-2">
                                    {learningStyles.map(val => (
                                        <FormItem key={val} data-state={field.value === val ? "checked" : "unchecked"} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 has-[[data-state=checked]]:bg-muted/50 has-[[data-state=checked]]:backdrop-blur-sm border-border transition-colors">
                                            <FormControl><RadioGroupItem value={val} id={`style-${val}`} /></FormControl>
                                            <Label htmlFor={`style-${val}`} className="font-normal text-base w-full cursor-pointer">{val}</Label>
                                        </FormItem>
                                    ))}
                                    </RadioGroup>
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}
                            
                            {/* Q7: Career Aspiration */}
                            {currentQuestion.field === 'careerAspiration' && (
                                <FormField control={control} name="careerAspiration" render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea {...field} placeholder="e.g., 'Confident and valued' or 'Excited to contribute to impactful projects...'" className="min-h-[100px] bg-background"/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )} />
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </CardContent>

            <CardFooter className="flex justify-between items-center mt-2">
                <div>
                    {currentStep > 1 && (
                        <Button variant="ghost" onClick={prevStep} aria-label="Go to previous step" className="text-muted-foreground">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back
                        </Button>
                    )}
                </div>
                
                <div>
                    {!currentQuestion.isIntro && !currentQuestion.isOptional && currentStep < steps.length - 1 ? (
                        <Button type="button" onClick={handleNext}>
                            Next &rarr;
                        </Button>
                    ) : null}

                    {currentStep === steps.length -1 && (
                         <Button type="button" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Start Analysis
                        </Button>
                    )}
                </div>
            </CardFooter>
          </form>
        </Form>
    </Card>
  );
}
