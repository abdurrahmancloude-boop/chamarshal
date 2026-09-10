import React from 'react';
import { Phone, MapPin, Navigation, Clock, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const ContactSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'B-576, Main Commercial Market Road, Satellite Town, Rawalpindi'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5EFEB] border-b border-[#E6DCce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3ED] text-[#2B613B] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Visit or Call Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1E1B]">
            Visit Butt Karahi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5C564E]">
            Located on Main Commercial Market Road in Satellite Town, Rawalpindi.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl border border-[#E3D8C8] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              {/* Business Name Badge */}
              <div className="text-xs font-bold uppercase tracking-wider text-[#2B613B] mb-1">
                Commercial Market • Rawalpindi
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1E1B]">
                {RESTAURANT_INFO.fullName}
              </h3>

              {/* Address Block */}
              <div className="mt-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F2ECE1] text-[#2B613B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#8C8477]">Address</h4>
                  <p className="text-base font-semibold text-[#1F1E1B] mt-0.5">
                    B-576, Main Commercial Market Road
                  </p>
                  <p className="text-sm text-[#5C564E]">
                    Satellite Town, Rawalpindi, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="mt-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2B613B] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#8C8477]">Phone</h4>
                  <a 
                    href={RESTAURANT_INFO.phoneTel} 
                    className="text-xl font-bold text-[#1F1E1B] hover:text-[#2B613B] transition-colors mt-0.5 inline-block"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#6E675C]">
                    Call for takeaway orders, live preparation time & seating enquiries
                  </p>
                </div>
              </div>

              {/* Timing Block */}
              <div className="mt-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE2] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#8C8477]">Hours</h4>
                  <p className="text-sm font-semibold text-[#1F1E1B] mt-0.5">
                    {RESTAURANT_INFO.timings}
                  </p>
                  <p className="text-xs text-[#6E675C]">
                    Lunch, Dinner & Late Night
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className="mt-6 pt-6 border-t border-[#F0E8DC]">
                <h4 className="text-xs font-bold uppercase text-[#8C8477] mb-3">Available Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4A453E]">
                  {RESTAURANT_INFO.services.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2B613B] shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons: Call Now & Get Directions */}
            <div className="mt-8 pt-6 border-t border-[#F0E8DC] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={RESTAURANT_INFO.phoneTel}
                id="contact-call-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2B613B] text-white font-semibold text-base hover:bg-[#224E2F] active:scale-98 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#FBBF24]" />
                <span>Call Now</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFFDF9] border-2 border-[#D9CEBD] text-[#1F1E1B] font-semibold text-base hover:bg-[#F4ECE0] active:scale-98 transition-all shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#2B613B]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Map Card */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl border border-[#E3D8C8] p-4 sm:p-5 shadow-xs flex flex-col">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F1E1B]">
                <MapPin className="w-4 h-4 text-[#C2410C]" />
                <span>Commercial Market, Satellite Town</span>
              </div>
              <span className="text-xs text-[#2B613B] font-medium bg-[#EBF3ED] px-2 py-0.5 rounded">
                Rawalpindi
              </span>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-[#E5DCce] bg-[#EFE8DD]">
              <iframe
                title="Butt Karahi Commercial Market Rawalpindi Map"
                src="https://maps.google.com/maps?q=B-576,+Main+Commercial+Market+Road,+Satellite+Town,+Rawalpindi,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Map Action Prompt */}
            <div className="mt-3.5 px-3 py-2 bg-[#FAF8F5] rounded-xl border border-[#EAE3D5] flex items-center justify-between text-xs text-[#5C564E]">
              <span>Need turn-by-turn navigation on your mobile device?</span>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B613B] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Open Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
