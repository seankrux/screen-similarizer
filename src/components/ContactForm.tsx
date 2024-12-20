import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <div className="py-16 bg-foundation-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">WE'RE HERE. LET'S TALK.</h2>
            <div className="space-y-4 text-foundation-text">
              <p>Get in touch & let us know how we can help!</p>
              <div>
                <p>20265 BELLAIRE BLVD. FM</p>
                <p>HOUSTON, TX 77072</p>
              </div>
              <p>832-123-4567</p>
              <p>CONTACT@THETMTFOUNDATION.ORG</p>
            </div>
          </div>
          <form className="space-y-6">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Phone" />
            <Textarea placeholder="Message" className="h-32" />
            <Button className="w-full bg-foundation-primary hover:bg-foundation-secondary text-white">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};