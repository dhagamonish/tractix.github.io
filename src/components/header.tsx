
'use client';
import Link from "next/link";
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/library", label: "Library" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      mounted && isScrolled 
        ? "bg-background/80 backdrop-blur-sm border-b" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <Logo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/quiz">
              <Button>Try it Out</Button>
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                  <SheetHeader>
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  </SheetHeader>
                <div className="grid gap-4 p-4">
                   <div className="flex justify-center mb-4">
                      <Logo />
                   </div>
                  <nav className="grid gap-2 text-center">
                      {navLinks.map(link => (
                      <Link
                          key={link.href}
                          href={link.href}
                          className="text-foreground transition-colors hover:text-primary py-2"
                          prefetch={false}
                      >
                          {link.label}
                      </Link>
                      ))}
                  </nav>
                  <div className="mt-4 flex flex-col gap-2 items-center">
                      <Link href="/quiz">
                        <Button>Try it Out</Button>
                      </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
