import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import astronautImage from '~/assets/astronauts/astronaut-star.svg';

function Landing() {
    console.log("Landing has loaded")
    const { RiveComponent, rive } = useRive({
        src: "/astronaut.riv", // Path to your Rive file
        stateMachines: "State Machine 1", // Ensure this matches the state machine in your Rive file
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });
    return (
        <div className="relative h-screen flex items-center justify-start pl-10 pr-10 md:pl-20"> {/* Adjusted for full height and left alignment */}
            <div className="relative z-10 flex-col"> {/* Higher z-index to be on top of the Rive animation */}
                <div className="flex-col mt-[80px]">
                    <div className="font-space-mono text-2xl">👋 Hi I'm</div>
                    <h1 className="text-9xl font-spicy-rice md:text-9xl name-text-mask" style={{ fontSize: '15rem' }}>
                        Ashna
                    </h1>
                </div>
                <div className="text-white text-4xl font-space-mono pt-[10px]">
                    <span>A software engineer crafting </span>
                    <span className="font-bold text-fuchsia-200 link-underline-animation">delightful</span>
                    <span> experiences on web and mobile</span>
                </div>
            </div>
            <div className="absolute w-[800px] h-[800px] -right-20 top-90 z-0"> {/* Positioning the Rive component absolutely */}
                <RiveComponent />
            </div>
        </div>
    )
}

export default Landing
