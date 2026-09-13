import logo from "./assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-10 md:px-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
    <img
      src={logo}
      alt="DevStack Logo"
      className="mx-auto md:mx-0 w-auto"
    />
            </div>

            <p className="mt-4 text-center md:text-left max-w-md text-sm leading-6 text-slate-500"> Curated tools, technologies, and resources for developers building modern software.</p>

            <div className="mt-5 flex justify-center md:justify-normal gap-5 text-sm">
              <a href="#" className="text-slate-700 transition "> GitHub</a>

              <a href="#" className="text-slate-700 transition ">Twitter</a>
              <a href="#" className="text-slate-700 transition">LinkedIn </a>
            </div>
          </div>
          <div className="hidden md:block">
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

          <div className="hidden md:block">
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

        <div className="hidden md:block">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">LEGAL</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" > PrivecyPolicy </a>
              </li>
              <li>
                <a href="#" > Terms Of Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-7">

          <div className="flex flex-col-2 gap-4 text-xs text-slate-400 sm:flex-row sm:items-center justify-between">

            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" > Privacy</a>
              <a href="#" >Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;