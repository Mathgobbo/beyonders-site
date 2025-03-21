
import { ELearningHeader } from "@/components/e-learning/ELearningHeader";
import StickyEmailButton from "@/components/e-learning/StickyEmailButton";
import { ReactNode } from "react";

export default function ElearningLayout({children}: {children: ReactNode}){
    return( <>
        <ELearningHeader/> {children}   <StickyEmailButton/> </>)
}