import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "InjuryRight - Find Trusted Personal Injury Lawyers",
    description: "Connect with trusted personal injury lawyers. Get a free case review, understand your legal options, and find the right representation for your accident claim.",
    keywords: ["personal injury", "lawyer", "accident", "compensation", "legal help", "injury claim"],
    authors: [{ name: "InjuryRight" }],
    creator: "InjuryRight",
    publisher: "InjuryRight",
    metadataBase: new URL("https://injuryright.com"),
    openGraph: {
        title: "InjuryRight - Find Trusted Personal Injury Lawyers",
        description: "Connect with trusted personal injury lawyers. Get a free case review and understand your legal options.",
        type: "website",
        url: "https://injuryright.com",
        siteName: "InjuryRight",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "InjuryRight - Find Trusted Personal Injury Lawyers",
        description: "Connect with trusted personal injury lawyers. Get a free case review, understand your legal options, and find the right representation.",
        site: "@injuryright",
        creator: "@injuryright",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://injuryright.com",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#03695D" },
        { media: "(prefers-color-scheme: dark)", color: "#011E1B" },
    ],
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(inter.variable, dmSans.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>{children}</Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
