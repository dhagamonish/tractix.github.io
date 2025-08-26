
import Link from "next/link";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className={cn("bg-transparent backdrop-blur-sm")}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground mt-4 max-w-sm">
              Your Career, Crafted.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold mb-4 text-foreground">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-base font-bold mb-4 text-foreground">Platform</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#why-tractix" className="text-muted-foreground hover:text-primary">Why Tractix</Link>
              <Link href="/resources" className="text-muted-foreground hover:text-primary">Resources</Link>
              <Link href="/library" className="text-muted-foreground hover:text-primary">Learning Library</Link>
            </nav>
          </div>
           <div>
            <h4 className="text-base font-bold mb-4 text-foreground">Social</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-muted-foreground hover:text-primary">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Twitter</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Instagram</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">LinkedIn</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container py-4 text-center text-muted-foreground text-sm">
          &copy; 2024 Tractix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
