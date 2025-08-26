
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function LoadingComponent() {
  const router = useRouter();
  const [loadingMessage, setLoadingMessage] = useState("Analyzing your responses...");

  useEffect(() => {
    const messages = [
        "Finding your unique strengths...",
        "Comparing roles and skills...",
        "Building your personalized compass...",
        "Finalizing your recommendations..."
    ];
    let messageIndex = 0;
    const intervalId = setInterval(() => {
        setLoadingMessage(messages[messageIndex % messages.length]);
        messageIndex++;
    }, 2500);

    const timer = setTimeout(() => {
      clearInterval(intervalId);
      router.push('/results');
    }, 7000); // 7-second delay

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    }
  }, [router]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-transparent">
        <Card className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-lg border-0 shadow-lg text-white text-center">
            <CardHeader>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <CardTitle className="text-2xl font-bold text-foreground mb-4">
                        You’re not alone. 72% of peers felt the same confusion. Here’s your way forward.
                    </CardTitle>
                </motion.div>
            </CardHeader>
            <CardContent className="min-h-[200px] flex flex-col items-center justify-center">
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-6" />
                <AnimatePresence mode="wait">
                    <motion.p
                        key={loadingMessage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-muted-foreground text-lg"
                    >
                        {loadingMessage}
                    </motion.p>
                </AnimatePresence>
            </CardContent>
        </Card>
    </div>
  );
}

export default function LoadingPage() {
    return <LoadingComponent />;
}
