
'use client';
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Compass, Trophy, User, Phone, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const EmptyStateCard = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center h-full min-h-[100px] text-center text-muted-foreground p-4">
        <p>{children}</p>
    </div>
);

export default function ProfilePage() {
  const { user, loading, isGuest } = useAuth();

  const cardClassName = "bg-card/60 backdrop-blur-lg border-0 text-card-foreground shadow-lg";

  if (loading) {
    return (
      <div className="bg-transparent text-foreground">
        <div className="container mx-auto py-8 sm:py-12 px-4 md:px-6">
            <Card className={cn("p-4 mb-8", cardClassName)}>
                <CardContent className="p-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Skeleton className="h-20 w-20 sm:h-16 sm:w-16 rounded-full flex-shrink-0 bg-muted" />
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 text-center sm:text-left items-center w-full">
                      <div className="md:col-span-1 space-y-2">
                         <Skeleton className="h-5 w-3/4 mx-auto sm:mx-0 bg-muted" />
                         <Skeleton className="h-4 w-full mx-auto sm:mx-0 bg-muted" />
                      </div>
                       <div className="space-y-2 text-sm">
                        <Skeleton className="h-4 w-1/2 mx-auto sm:mx-0 bg-muted" />
                        <Skeleton className="h-4 w-1/2 mx-auto sm:mx-0 bg-muted" />
                      </div>
                       <div className="space-y-1 text-sm">
                        <Skeleton className="h-4 w-1/2 mx-auto sm:mx-0 bg-muted" />
                      </div>
                    </div>
                </CardContent>
            </Card>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    <Skeleton className="h-48 w-full bg-muted rounded-lg" />
                    <Skeleton className="h-48 w-full bg-muted rounded-lg" />
                </div>
                <div className="lg:col-span-1">
                    <Skeleton className="h-64 w-full bg-muted rounded-lg" />
                </div>
            </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center bg-transparent p-4">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your profile.</h2>
        <Link href="/login">
            <Button className="rounded-full">Login</Button>
        </Link>
      </div>
    );
  }
  
  const userProfile = {
    ...user,
    photoURL: user.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fDE?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    displayName: isGuest ? 'Guest User' : user.displayName,
    email: isGuest ? 'guest@example.com' : user.email,
    phoneNumber: isGuest ? 'N/A' : '+1 234 567 890',
    designation: isGuest ? 'N/A' : 'Product Manager',
    age: isGuest ? 'N/A' : 32,
  };

  const compassResults = {
    roleRecommendations: [
      { roleName: "Product Manager" },
      { roleName: "Data Analyst" },
      { roleName: "UX Designer" },
    ],
  };

  const roadmapProgress = {
    currentRole: "Product Manager",
    progress: 33,
    currentPhase: "Phase 1: Foundations",
  };

  const achievements = [
    { title: "Completed: Write an SQL query" },
    { title: "Completed: Analyze a user persona" },
  ]


  return (
    <div className="bg-transparent text-foreground">
      <div className="container mx-auto py-8 sm:py-12 px-4 md:px-6">
        {isGuest && (
            <Card className={cn("mb-8 text-center", cardClassName)}>
                <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">Welcome to Tractix!</h2>
                    <p className="text-muted-foreground mb-6">Take our 5-minute quiz to unlock your personalized career roadmap.</p>
                    <Link href="/quiz">
                        <Button className="rounded-full" size="lg">Start the Quiz</Button>
                    </Link>
                </CardContent>
            </Card>
        )}
        <div className="mb-8">
            <Card className={cn("p-4", cardClassName)}>
                <CardContent className="p-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Avatar className="h-20 w-20 sm:h-16 sm:w-16 flex-shrink-0">
                        <AvatarImage src={userProfile.photoURL || undefined} alt={userProfile.displayName || "User"} />
                        <AvatarFallback>
                            <User className="h-8 w-8" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 text-center sm:text-left items-center">
                      <div className="md:col-span-1">
                        <h1 className="text-lg font-bold">{userProfile.displayName || "Anonymous User"}</h1>
                        <p className="text-sm text-muted-foreground truncate">{userProfile.email}</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                           <Phone className="w-4 h-4 text-muted-foreground" />
                           <span>{userProfile.phoneNumber}</span>
                        </div>
                         <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{userProfile.age} {typeof userProfile.age === 'number' && 'years old'}</span>
                        </div>
                      </div>
                       <div className="space-y-1 text-sm">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                            <span>{userProfile.designation}</span>
                        </div>
                      </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
             <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Compass className="text-primary"/> My Compass Results</CardTitle>
                <CardDescription>Your top recommended roles based on your quiz.</CardDescription>
              </CardHeader>
              <CardContent>
                {isGuest ? (
                    <EmptyStateCard>Complete the Tractix quiz to see info here</EmptyStateCard>
                ) : (
                    <>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            {compassResults.roleRecommendations.map((role, index) => (
                                <div key={index} className="flex items-center gap-3 py-2 px-4 bg-muted rounded-full">
                                    <p className="text-sm font-medium">{role.roleName}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-4">
                            <Link href="/quiz">
                                <Button variant="link">Retake Quiz</Button>
                            </Link>
                        </div>
                    </>
                )}
              </CardContent>
            </Card>

            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle className="text-primary"/> My Roadmap</CardTitle>
                <CardDescription>Your current learning path.</CardDescription>
              </CardHeader>
              <CardContent>
                {isGuest ? (
                     <EmptyStateCard>Complete the Tractix quiz to see info here</EmptyStateCard>
                ) : (
                    <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                            <p className="font-semibold text-lg">{roadmapProgress.currentRole}</p>
                            <p className="text-sm sm:text-base">{roadmapProgress.currentPhase}</p>
                        </div>
                        <Progress value={roadmapProgress.progress} />
                        <p className="text-sm text-muted-foreground mt-2">{roadmapProgress.progress}% complete</p>
                        <div className="flex justify-end mt-4">
                        <Link href={`/roadmap?role=${encodeURIComponent(roadmapProgress.currentRole)}`}>
                            <Button className="rounded-full">Continue Roadmap</Button>
                        </Link>
                        </div>
                    </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className={cardClassName}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Trophy className="text-yellow-500"/> Achievements</CardTitle>
                    <CardDescription>Your completed micro-tasks.</CardDescription>
                </CardHeader>
                <CardContent>
                     {isGuest ? (
                        <EmptyStateCard>Complete the Tractix quiz to see info here</EmptyStateCard>
                    ) : (
                        <div className="space-y-4">
                        {achievements.map((ach, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <CheckCircle className="w-5 h-5 text-green-500"/>
                                <p className="text-sm font-medium">{ach.title}</p>
                            </div>
                        ))}
                        <div className="flex justify-end mt-4">
                            <Link href="/micro-task">
                                <Button variant="outline" className="rounded-full">Try a new Micro-Task</Button>
                            </Link>
                        </div>
                    </div>
                    )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
