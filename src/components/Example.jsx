

const Example = () => {

    const handleMouseMove = (e) => {
        console.log(e.target)
        console.log("hs")
    }


    return (
        <div
            onMouseMove={handleMouseMove}
            className="hero-container w-full md:w-[45%] px-4 py-12 sm:px-6 lg:px-8"
            style={{
                transformStyle: "preserve-3d",
            }}

        >
            <div

                className="h-full bg-white w-full shadow-lg rounded-lg p-6 flex items-center justify-center transition-transform duration-300"

            >
                <p className="text-red-700 font-extrabold text-9xl text-center">OR</p>
            </div>
        </div>
    );
};

export default Example;
