"use client";
import { InfiniteMovingCards } from "~/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Ashna is an excellent software engineer. She has a very solid technical knowledge base, plus she is very open to learning from feedback. She's able to communicate clearly what she is doing, ask when she needs help and autonomously deliver on projects. It's been a pleasure working together",
        name: "Oriol Torrillas",
        title: "Senior Frontend Engineer, Datadog",
    },
    {
        quote: "Having joined us at a critical time as we were approaching a major milestone developing our product, Ashna has been indispensable to have as a frontend developer. Without any experience with our JavaScript framework, Ashna jumped in and learned it quickly on the fly. She'd be an asset to any team.",
        name: "Scott Englander",
        title: "Founder & CEO, FLxDER (seed stage startup)",
    },
    {
        quote: "She is a quick learner, diving into complex architectures and developing new features in that domain helped her to understand several concepts not only the ones we use internally at Linkedin but also general topics that helps her career growth as a software engineer.",
        name: "Santiago Vanegas",
        title: "Senior Android Engineer, Linkedin",
    },
    {
        quote: "Ashna is a top-notch engineer. She is adept at picking up nuances around code style architecture and I have no doubt she'd be able to be an expert of any codebase she jumps into within a few months. Outside of all the technical bits, she was a joy to work with. Ashna is kind, curious, and lowkey very funny.",
        name: "Noah Rowlett",
        title: "Senior Android Engineer, Figma",
    },
];


function Reviews() {
    return (
        <div className="h-screen w-screen flex-col items-center justify-start pt-20 md:pt-20  pl-20 md:pl-20 font-space-mono text-white">
            <div className="text-4xl">Rave Reviews</div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden pt-0">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
}


export default Reviews;