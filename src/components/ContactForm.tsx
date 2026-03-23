import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

function PremiumInput({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white text-stone-900 text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-amber-500/20 ${
          error
            ? "border-red-300 focus:border-red-400"
            : "border-stone-200 hover:border-stone-300 focus:border-amber-500"
        }`}
      />
      <label className="absolute left-4 top-2 text-xs font-medium text-stone-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-600">
        {label}
      </label>
      {error && <p className="text-xs text-red-500 mt-1.5 pl-1">{error}</p>}
    </div>
  );
}

function PremiumTextarea({
  label,
  error,
  ...props
}: {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="relative">
      <textarea
        {...props}
        placeholder=" "
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white text-stone-900 text-sm transition-all duration-300 outline-none resize-none focus:ring-2 focus:ring-amber-500/20 ${
          error
            ? "border-red-300 focus:border-red-400"
            : "border-stone-200 hover:border-stone-300 focus:border-amber-500"
        }`}
      />
      <label className="absolute left-4 top-2 text-xs font-medium text-stone-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-amber-600">
        {label}
      </label>
      {error && <p className="text-xs text-red-500 mt-1.5 pl-1">{error}</p>}
    </div>
  );
}

export const ContactForm = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We will be in touch soon.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-warm-subtle relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Reach Out</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Have questions about our programs or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Info side */}
          <div className="flex flex-col justify-center">
            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              Whether you want to volunteer, partner with us, or learn more about our work, our team is here to help. Drop us a line and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Email</p>
                  <p className="text-stone-500 text-sm">hello@communityfoundation.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Phone</p>
                  <p className="text-stone-500 text-sm">(555) 234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Headquarters</p>
                  <p className="text-stone-500 text-sm">1200 Main Street, Suite 400<br />San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-amber-900/5 border border-stone-200/60">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                  <p className="text-stone-500 text-sm">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <PremiumInput
                    name="name"
                    label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <PremiumInput
                    name="email"
                    type="email"
                    label="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <PremiumInput
                    name="phone"
                    label="Phone (optional)"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <PremiumTextarea
                    name="message"
                    label="Your Message"
                    className="h-32"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-warm hover:opacity-90 text-white border-0 py-6 text-sm font-semibold shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.01] group"
                  >
                    Send Message
                    <Send size={16} className="ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
