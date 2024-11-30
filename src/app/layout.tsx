import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import NavigationMenuBar from "~/components/organisms/navigation-menu-bat";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="sticky top-0 z-50 mx-auto w-full items-center justify-center bg-red-50">
          <NavigationMenuBar />
        </div>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
