import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Youtube, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (!url) {
      toast.error("Please paste a video URL");
      return;
    }
    toast.success("Processing video... (Demo mode)");
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Ummy Online Video Downloader
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download videos from YouTube, Facebook, Instagram and more - fast, free, and easy
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card rounded-xl shadow-lg border border-border">
            <Input
              type="url"
              placeholder="Paste a link here to download a video"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button 
              onClick={handleDownload}
              size="lg"
              className="h-14 px-8 text-lg gap-2 bg-primary hover:bg-primary/90 transition-all"
            >
              <Download className="h-5 w-5" />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-sm text-muted-foreground">Supported platforms:</span>
            <div className="flex gap-3">
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
