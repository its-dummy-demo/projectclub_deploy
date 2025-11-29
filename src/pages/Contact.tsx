import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project journey? Get in touch with our expert team for consultation and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out our Google form to get in touch with our team
                </p>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[600px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdkEY0kvpzPPbAVCzOi8H0ihKV0Ql8F-biALx2byYiRreuorA/viewform?embedded=true" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0}
                    className="rounded-lg"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">projects@xyzcollege.edu</p>
                    <p className="text-muted-foreground text-sm">support@xyzcollege.edu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Department of Computer Science<br />
                      XYZ College, Tech City<br />
                      State - 123456, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Project Guidelines
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Admission Process
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Faculty Team
                  </Button>
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Success Stories
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;