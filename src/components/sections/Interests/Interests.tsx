function Interests() {
    return (
        <div className="h-screen w-screen flex-col items-center justify-start pl-10 md:pl-20">
            <div className="text-white text-4xl font-space-mono py-10">
                Always interested about...
            </div>
            <div className="flex flex-row gap-8">
                <button className="btn btn-outline btn-accent normal-case">Tag for interest</button>
            </div>
        </div>
    );
}

export default Interests;
