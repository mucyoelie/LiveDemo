import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20 xl:mx-[140px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#F6BE00] mb-3">Get in touch</p>

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            LET’S <span className="text-[#F6BE00]">BUILD</span> SOMETHING  
            <br />
            THAT <span className="text-[#00C2FF]">HOLDS </span>UP
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed md:w-[90%]">
            Whether you’re launching, scaling, or restructuring your digital
            foundation, we’d like to understand your goals — and help define the
            right path forward.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-10 space-y-5 text-gray-300">

            <div className="flex items-start gap-3">
              <MapPin className="text-[#F6BE00] w-5 h-5 mt-1" />
              <p>
                Texas & Pennsylvania
                <br />
                United States
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#F6BE00] w-5 h-5" />
              <span>+1 (432) 308-6130</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#F6BE00] w-5 h-5" />
              <span>alex@mista.io</span>
            </div>

          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-[#01120D] rounded-3xl px-10 py-6 shadow-xl w-full">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-5 py-2 rounded-xl bg-black/20 border border-black/40 text-gray-200 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-5 py-2 rounded-xl bg-black/20 border border-black/40 text-gray-200 focus:outline-none"
          />

          {/* SELECT SERVICE */}
          <div className="relative mb-2">
            <select
              className="w-full px-5 py-2 rounded-xl bg-black/20 border border-black/40 appearance-none text-gray-200 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>Select service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Mobile App</option>
            </select>

            <ChevronDown className="absolute right-4 top-4 text-gray-400" />
          </div>

          {/* MESSAGE */}
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full mb-6 px-5 py-4 rounded-xl bg-black/20 border border-black/40 text-gray-200 focus:outline-none"
          ></textarea>

          <button className="bg-[#F6BE00] text-black font-semibold px-6 py-3 rounded-xl w-full md:w-auto flex items-center gap-2">
            SUBMIT YOUR MESSAGE
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
