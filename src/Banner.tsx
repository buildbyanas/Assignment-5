import img from "./assets/banner-stack.png"
const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 items-center gap-10">
  <div>
    <h1 className="text-7xl font-bold leading-tight">
      Build Your Ideal <br />
      <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
        Development Stack
      </span>
    </h1>

    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
      Explore frontend, backend, database, and tooling options,
      <br />
      compare them side by side, and put together the stack that fits your
      <br />
      next project.
    </p>

    <div className="mt-8 flex gap-4">
      <button className="rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-medium text-white">
        Explore Technologies
      </button>

      <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium">
        Learn More
      </button>
    </div>
  </div>

  {/* Right side */}
  <div className="flex justify-center">
    <img src={img} alt="Development stack" className="w-full max-w-lg" />
  </div>
</div>
    );
};

export default Banner;