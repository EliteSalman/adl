import { Link2, Download, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Step 1 — Enter a YouTube video URL",
    description:
      "Copy the URL of the video from YouTube and paste the link in the input field, then click on the red button. In a few seconds, you will get a list of conversion options.",
  },
  {
    icon: Download,
    title: "Step 2 — Choose a video format and quality",
    description:
      "You can decide which format and quality you would like the video to be saved. Choose one of each from the list and click the 'Download' button.",
  },
  {
    icon: CheckCircle2,
    title: "Step 3 — Download complete",
    description:
      "Wait a bit as the download processes, then you're done! Your video will be saved to your device in the format and quality you selected.",
  },
];

const HowTo = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          How to download YouTube video?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Follow these simple steps to download your favorite videos in seconds
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTo;
