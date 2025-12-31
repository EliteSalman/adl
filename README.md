# ADL - Online Video Downloader

A fast, free online video downloader supporting YouTube, Facebook, Instagram, TikTok, and more platforms.

## Features

- 🎬 Download videos from multiple platforms
- 📱 Responsive design for mobile and desktop
- 🎵 Audio-only download options (MP3)
- 📊 Multiple quality options (360p to 4K)
- ⚡ Rate limiting protection
- 🔒 Secure edge function processing

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Backend:** Lovable Cloud Edge Functions
- **Video Processing:** yt-dlp

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_REPOSITORY_URL>
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

The project uses Lovable Cloud, which automatically configures the required environment variables:

- `VITE_SUPABASE_URL` - Backend API URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Public API key
- `VITE_SUPABASE_PROJECT_ID` - Project identifier

### Backend Configuration

Set the following secret in your Lovable Cloud settings:

- `YTDLP_SERVER_URL` - URL of your yt-dlp server (see DEPLOYMENT-GUIDE.md)

## Project Structure

```
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Hero.tsx     # Main download interface
│   │   ├── VideoResults.tsx  # Download results display
│   │   └── ...
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   └── integrations/    # Backend integrations
├── supabase/
│   └── functions/       # Edge functions
│       └── process-video/  # Video processing function
└── public/              # Static assets
```

## Deployment

### Quick Deploy (Lovable)

1. Click "Publish" in Lovable editor
2. Your app is live!

### Self-Hosted

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed deployment instructions including:

- Setting up your yt-dlp server
- Deploying edge functions
- Configuring Nginx/Apache
- SSL certificate setup

## Supported Platforms

- YouTube
- Facebook
- Instagram
- TikTok
- Twitter/X
- Vimeo
- And 1000+ more via yt-dlp

## Rate Limiting

The API includes built-in rate limiting:
- 10 requests per minute per IP
- Clear feedback when limits are reached
- Automatic reset after cooldown period

## Security

- No user data stored
- Rate limiting prevents abuse
- API key protection for yt-dlp server
- CORS configured for security

## License

© 2025 ADL. All rights reserved.
