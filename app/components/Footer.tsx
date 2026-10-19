import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";




export default function Footer() {
  return (
    <footer className="bg-primary px-6 pb-8 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-12 border-t border-gray-800 py-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-black bg-white">
                 <img src="/Images/KB_Logo.png" alt="Kajanja Brand"  width={80}   height={80} />
              </div>

              <div className="leading-none">
                <p className="text-lg font-bold tracking-tight">
                  KAJANJA BRAND
                </p>

                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white">
                  Company Limited
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xs leading-7 text-white">
              Integrated Brand, Creative & Digital Agency
              <br />
              Dar es Salaam, Tanzania.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-white">
              <a
                href="#about"
                className="w-fit transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="w-fit transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#why-us"
                className="w-fit transition-colors hover:text-white"
              >
                Why Us
              </a>

              <a
                href="#vision"
                className="w-fit transition-colors hover:text-white"
              >
                Vision
              </a>

              <a
                href="#contact"
                className="w-fit transition-colors hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white">
              Get in Touch
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hello@kajanjabrand.co.tz"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                hello@kajanjabrand.co.tz
              </a>

              <a
                href="tel:+255652736984"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                +255 652 736 984
              </a>

              <div className="flex gap-10">
                <a
                href="https://www.instagram.com/kajanjabrand"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors  hover:text-white"
              >
                <FaInstagram/>
              </a>

              <a
                href="https://www.facebook.com/kajanjabrand"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                <FaFacebookF/>
              </a>

              <a
                href="https://www.linkedin.com/company/kajanjabrand"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors  hover:text-white"
              >
                <FaLinkedinIn/>
              </a>

              </div>
              
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-white pt-6 text-center text-sm text-white sm:flex-row">
  <p>
    © {new Date().getFullYear()} Kajanja Brand Company Limited.
    All rights reserved.
  </p>
</div>


      </div>
    </footer>
  );
}