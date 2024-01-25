import astronautImage from '~/assets/astronauts/astronaut-star.svg';
import "~/components/ui/aurora.css"

function Landing() {
    console.log("Landing has loaded")
    return (
        <div className="relative h-screen flex items-center justify-start pl-10 md:pl-20"> {/* Adjusted for full height and left alignment */}
            <div className='flex-col'>
                <div className='flex-col mt-[80px]'>
                    <div className='font-space-mono text-2xl'>👋 Hi I'm</div>
                    <h1 className="text-9xl font-spicy-rice md:text-9xl name-text-mask" style={{ fontSize: '15rem' }}>
                        Ashna
                    </h1>
                </div>
                <div className="text-white text-4xl font-space-mono pt-[10px]">
                    <span>A software engineer crafting </span>
                    <span className="font-bold text-fuchsia-200">delightful</span>
                    <span> experiences on web and mobile</span>
                </div>
            </div>
            <img src={astronautImage} alt="Astronaut" className="absolute right-0 float-animation z-10" style={{ width: '600px', height: 'auto', top: '90px' }} />
        </div>
    )
}

export default Landing
