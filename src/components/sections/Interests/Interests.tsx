import { useEffect, useRef } from 'react';
import astronautImage from '~/assets/astronauts/astronaut-rocket.svg';
import dragonImage from '~/assets/dragon.gif';

const INTERESTS = ["web dev", "Android", "Souls games", "indie games", "philosophy", "cooking", "mystery novels", "krnb", "Skyrim modding", "life hacks", "building cool sh*t"]


function InterestPill({ text }: { text: string }) {
    return (<button className="btn btn-outline normal-case text-2xl rounded-2xl outline-4">
        {text}
    </button>);
}

function Interests() {
    return (
        <div className="h-screen w-screen flex-col items-center justify-start pt-20 md:pt-20  pl-20 md:pl-20 font-space-mono text-white">
            <div className="text-4xl">Always interested about..</div>
            <div className="flex flex-wrap gap-5 mt-10">
                {INTERESTS.map((interest) => <InterestPill key={interest} text={interest} />)}
            </div>
            <div className="flex gap-2 align-top move-left-animation">
                <img src={astronautImage} alt="Astronaut" className="astronaut-rocket" style={{
                    width: '175px',
                    height: 'auto'
                }} />
                <div className="flying-dragon">
                    <img src={dragonImage} alt="Dragon" className="" style={{ width: '500px', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}


export default Interests;
