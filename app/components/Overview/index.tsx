const Overview = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center mt-[-50px] gap-6">
        <p className="text-primary font-mono text-base">Hi, my name is</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#FFF] leading-tight">
            Wisnu Agung Prasetyo.
          </h1>
          <h2 className="text-4xl lg:text-6xl xl:text-6xl font-bold">
            <span className="text-neutral-content leading-tight">Called </span>
            <span className="text-primary leading-tight">wisungyo</span>
            <span className="text-neutral-content leading-nugt">.</span>
          </h2>
        </div>
        <div className="leading-nugt max-w-lg">
          <span className="text-neutral-content">
            I&rsquo;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&rsquo;m focused on building mobile apps at{" "}
          </span>
          <span className="text-primary">Laku6 (Carousell Group)</span>
          <span className="text-neutral-content">.</span>
        </div>
        <div className="mt-8">
          <button className="btn btn-outline btn-primary">
            Check out my CV!
          </button>
        </div>
      </div>
    </>
  );
};

export default Overview;
