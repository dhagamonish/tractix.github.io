import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
