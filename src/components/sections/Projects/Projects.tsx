function Project() {
    return <div className="card w-50 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
}

function Projects() {
    return <div className="h-screen flex items-center justify-start pl-10 md:pl-20">
        <div className="flex-col">
            <div className="text-white text-4xl font-space-mono pt-[10px] pb-10">
                Things I've worked on
            </div>
            <div className="flex gap-8">
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    </div>
}

export default Projects
