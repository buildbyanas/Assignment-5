const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-10 md:px-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center 
              rounded-md bg-gradient-to-br from-orange-500 via-pink-500
               to-violet-600 text-[10px] font-bold text-white">DS</div>
              <h2 className="text-lg font-bold text-slate-900">Dev <span className="text-pink-600">Stack</span></h2>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500"> Curated tools, technologies, and resources for developersbuilding modern software.</p>

            <div className="mt-5 flex gap-5 text-sm">
              <a href="#" className="text-slate-700 transition "> GitHub</a>

              <a href="#" className="text-slate-700 transition ">Twitter</a>
              <a href="#" className="text-slate-700 transition">LinkedIn </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" > Home</a>
              </li>
              <li>
                <a href="#" > Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" > About </a>
              </li>
              <li>
                <a href="#" >Contact</a>
              </li>
              <li>
                <a href="#" >Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-7">

          <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <p>© 2026 Dev Stack. All rights reserved.</p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;