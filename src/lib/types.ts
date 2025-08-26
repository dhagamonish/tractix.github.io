
import { z } from "zod";

// Q1: Career Stage
export const careerStages = ["Student (preparing to enter workforce)", "0–1 year of experience", "2–4 years of experience", "5+ years of experience", "Other"] as const;

// Q2: Exciting Roles
export const excitingRoles = ["Data Analyst", "Product Manager", "Software Developer", "Marketing/Growth", "Operations/Consulting", "Design/UI-UX", "Other"] as const;

// Q3: Motivations
export const motivations = ["To switch into a new role", "To grow faster in my current job", "To stay relevant with market trends", "Personal curiosity / interest", "To earn more / get promoted"] as const;

// Q4: Frustrations
export const frustrations = ["Too many options, hard to choose", "Unsure what’s relevant to my goals", "Lack of reliable info on skills demand", "No time to research", "Courses are too expensive", "Other"] as const;

// Q5: Time Commitments
export const timeCommitments = ["<2 hours/week", "2–4 hours/week", "5–7 hours/week", "8+ hours/week"] as const;

// Q6: Learning Styles
export const learningStyles = ["Structured roadmap (step by step)", "Short micro-learning tasks", "Hands-on projects", "Mentorship / peer learning"] as const;

// Q7 is open text

export const quizSchema = z.object({
  careerStage: z.string().min(1, "Please select your career stage."),
  otherCareerStage: z.string().optional(),
  
  excitingRole: z.string().min(1, "Please select a role that excites you."),
  otherExcitingRole: z.string().optional(),

  motivations: z.array(z.string()).min(1, "Please select at least one motivation."),

  frustrations: z.array(z.string()).min(1, "Please select at least one frustration."),
  otherFrustration: z.string().optional(),

  timeCommitment: z.string().min(1, "Please select your time commitment."),
  
  learningStyle: z.string().min(1, "Please select your preferred learning style."),

  careerAspiration: z.string().optional(),

}).refine(data => data.careerStage !== 'Other' || (data.otherCareerStage && data.otherCareerStage.length > 0), {
  message: "Please specify your career stage.",
  path: ["otherCareerStage"],
}).refine(data => data.excitingRole !== 'Other' || (data.otherExcitingRole && data.otherExcitingRole.length > 0), {
  message: "Please specify the role.",
  path: ["otherExcitingRole"],
}).refine(data => !data.frustrations.includes('Other') || (data.otherFrustration && data.otherFrustration.length > 0), {
  message: "Please specify your frustration.",
  path: ["otherFrustration"],
});


export type QuizFormData = z.infer<typeof quizSchema>;


export type RoleRecommendation = {
  roleName: string;
  confidence: string;
  fitExplanation: string;
  topSkillsToLearn: string[];
  microTask?: string;
};

export type AIPoweredRoleFitCompassOutput = {
    roleRecommendations: RoleRecommendation[];
};
