import Bubbles from "../../../assets/bubbles/bubbles.png";
function Experience() {
    return (
        <div className="h-screen w-screen flex items-center gap-10 justify-between pl-10 md:pl-20">
            <div className="text-white text-4xl font-space-mono pt-[10px] w-1/3 leading-normal flex-1">
                <span>I've bridged gaps between product and design at companies big and small, reaching over </span>
                <span className="font-bold text-fuchsia-200">1 billion users</span>
            </div>
            <img src={Bubbles} alt="Bubbles" className="w-1/2 h-auto" />
        </div>
    );
}

export default Experience;
