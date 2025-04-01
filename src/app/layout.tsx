import { BlogFooter } from "@/components/blog/BlogFooter";
import { BlogHeader } from "@/components/BlogHeader";
import { Inter, Poppins } from "@next/font/google";
import "../styles/globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Beyonders Blog",
  description:
    "Discover more about the software development world, learn and have new ideas.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KRT8W847" />
      <body className={`${poppins.variable} ${inter.variable}  bg-main-black`}>
        {/* <GoogleAnalytics /> */}
        {children}
        <BlogFooter />
      </body>
    </html>
  );
}
