import { BlogHeader } from "@/components/BlogHeader";
import { ReactNode } from "react";

export default function BlogLayout({children}: {children: ReactNode}){
    return( <>
        <BlogHeader/> {children}    </>)
}