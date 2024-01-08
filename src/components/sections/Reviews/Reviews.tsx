"use client";
import { motion } from "framer-motion";
import React from "react";
import { InfiniteMovingCards } from "~/components/ui/infinite-moving-cards";
import { LampContainer } from "~/components/ui/lamp";
import SparklesCore from "~/components/ui/sparkles-core";

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];

function Reviews() {
    return (
        // <div className="h-screen w-screen flex-col items-center justify-start pt-20 md:pt-20  pl-20 md:pl-20 font-space-mono text-white">
        //     <div className="text-4xl">Rave Reviews</div>
        // </div>
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 py-4 text-white font-space-mono text-center text-6xl font-medium tracking-tight md:text-6xl"
                >
                    <div>Rave Reviews</div>

                </motion.h1>
            </LampContainer>
        </div>
    );
}


export default Reviews;