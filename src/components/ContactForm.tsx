import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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

export const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

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
  };

  return (
    <div id="contact" className="py-16 bg-foundation-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4 text-foundation-text">
              <p>Have questions or want to get involved? Drop us a line and we will get back to you.</p>
              <div>
                <p className="font-medium">Headquarters</p>
                <p>123 Foundation Ave</p>
                <p>Houston, TX 77001</p>
              </div>
              <p>hello@example.org</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <Input name="phone" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} />
            <div>
              <Textarea name="message" placeholder="Message" className="h-32" value={form.message} onChange={handleChange} />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-foundation-primary hover:bg-foundation-secondary text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
