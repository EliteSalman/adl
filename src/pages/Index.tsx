import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import VideoResults from "@/components/VideoResults";

interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  platform: string;
  formats: Array<{
    quality: string;
    format: string;
    size: string;
    downloadUrl: string;
  }>;
  audioFormats: Array<{
    quality: string;
    format: string;
    size: string;
    downloadUrl: string;
  }>;
}

const Index = () => {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  const handleVideoProcessed = (info: VideoInfo) => {
    setVideoInfo(info);
  };

  const handleBack = () => {
    setVideoInfo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {videoInfo ? (
        <main className="py-8">
          <VideoResults videoInfo={videoInfo} onBack={handleBack} />
        </main>
      ) : (
        <main>
          <Hero onVideoProcessed={handleVideoProcessed} />
          <HowTo />
          <Features />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Index;
