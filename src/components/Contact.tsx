import { useState } from "react";
import { Mail, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-slide-up">
          <h2 className="font-heading text-5xl md:text-6xl font-bold gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass glass-hover glow">
            <CardHeader>
              <CardTitle className="font-heading text-2xl flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-white/10 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-white/10 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="glass border-white/10 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2 glow group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4 animate-slide-up">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 glow">
                    <CheckCircle className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <Card className="glass glass-hover glow">
              <CardContent className="p-8 space-y-6">
                <h3 className="font-heading text-2xl font-bold gradient-text">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>eswar@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass glass-hover glow">
              <CardContent className="p-8 space-y-4">
                <h3 className="font-heading text-xl font-bold">Follow Me</h3>
                <div className="flex gap-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="glass glass-hover glow rounded-full"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="glass glass-hover glow rounded-full"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="glass glass-hover glow rounded-full"
                    asChild
                  >
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}