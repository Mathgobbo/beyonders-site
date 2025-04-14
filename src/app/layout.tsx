import { BlogFooter } from "@/components/blog/BlogFooter";
import { Inter, Poppins } from "@next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "../styles/globals.css";

export const metadata = {
  title: "Software Design and Development: Ideas and Insights | Beyonders",
  description:
    "Insights on product design, emerging tech, and app development — plus real lessons from the front lines of building bold digital products at Beyonders.",
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
