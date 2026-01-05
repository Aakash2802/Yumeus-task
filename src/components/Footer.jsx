import Image from "next/image";
import "../components/Footer.css";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061C33] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">

          {/* LEFT LOGO */}
          <div className="text-center lg:text-left">
            <Image
              src="/logo2.svg"
              alt="InstaPlumbers"
              width={180}
              height={40}
              className="mb-6 mx-auto lg:mx-0"
            />

            <p className="text-xs text-white/70 leading-relaxed">
              Created with ❤️ in London <br />
              Registered in England & Wales <br />
              Company No. 99988877 <br />
              ICO Registration No. AB9876543 <br />
              ISO27001 Compliant
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <Image src="/fb.svg" alt="fb" width={10} height={18} />
              <Image src="/youtube.svg" alt="yt" width={14} height={18} />
              <Image src="/x.svg" alt="x" width={14} height={18} />
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="w-full lg:w-190 pb-1 padbt border-b-0 lg:border-b lg:border-white/20">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-center lg:text-left">

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Need a Plumber Right Now?
                </h3>
                <p className="text-white/70 text-xs max-w-xl mx-auto lg:mx-0">
                  We've got professionals on-call 24/7 across London. <br />
                  Get fast, affordable plumbing help today.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <button className="border border-white/40 px-2 py-3 rounded-full text-xs inline-flex items-center gap-2 hover:bg-white hover:text-[#061C33] transition">
                  <Image src="/loacaton.svg" alt="Location" width={13} height={16} />
                  Find a Plumber Near Me
                </button>

                <button className="bg-white text-[#061C33] px-2 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 hover:bg-gray-200 transition">
                  <Image src="/call.svg" alt="Phone" width={13} height={16} />
                  0800-123-4567
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ================= LINKS ROW ================= */}
        <div className="pt-4">

          {/* MOBILE: 2 COLUMN LINKS (FIGMA STYLE) */}
          <div className="grid grid-cols-2 gap-10 lg:hidden text-left">
            <div>
              <h5 className="font-semibold mb-4">Useful Link</h5>
              <ul className="space-y-2 text-xs text-white/70">
                <li>Home</li>
                <li>How It Works</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Legal Links</h5>
              <ul className="space-y-2 text-xs text-white/70">
                <li>Privacy & Cookie Policy</li>
                <li>Terms & Conditions</li>
                <li>Service Terms & Conditions</li>
                <li>Complaints Policy</li>
                <li>Other Policy</li>
              </ul>
            </div>
          </div>

          {/* DESKTOP: ORIGINAL GRID (UNCHANGED) */}
          <div className="hidden lg:grid grid-cols-[320px_1fr] padbt1 gap-12">

            <div></div>

            <div className="grid grid-cols-3 gap-10">
              <div>
                <h5 className="font-semibold mb-4">Useful Link</h5>
                <ul className="space-y-2 text-xs text-white/70">
                  <li>Home</li>
                  <li>How It Works</li>
                  <li>Services</li>
                  <li>Pricing</li>
                  <li>FAQs</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Legal Links</h5>
                <ul className="space-y-2 text-xs text-white/70">
                  <li>Privacy & Cookie Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Service Terms & Conditions</li>
                  <li>Complaints Policy</li>
                  <li>Other Policy</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Contact</h5>
                <p className="text-xs text-white/70">
                  334 Stamford Street <br />
                  London, SE1 9NQ, UK
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE CONTACT (LEFT ALIGNED LIKE FIGMA) */}
          <div className="lg:hidden mt-10 text-left">
            <h5 className="font-semibold mb-4">Contact</h5>
            <p className="text-xs text-white/70">
              334 Stamford Street <br />
              London, SE1 9NQ, UK
            </p>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="hidden lg:block mt-10 pt-6 text-center text-xs text-white/50">
          © MyCompany Name Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
