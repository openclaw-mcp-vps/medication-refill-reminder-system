import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedRefill – Never Miss Prescription Refills Again",
  description: "Track prescriptions, get refill reminders, and find the cheapest pharmacy prices. Built for chronic condition patients and caregivers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="909051be-0b1c-4bed-9fd3-719d765e32d3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
