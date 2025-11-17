import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    console.log('Processing video URL:', url);

    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate URL format
    let videoUrl: URL;
    try {
      videoUrl = new URL(url);
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid URL format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Determine platform
    const hostname = videoUrl.hostname.toLowerCase();
    let platform = 'unknown';
    
    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
      platform = 'youtube';
    } else if (hostname.includes('facebook.com') || hostname.includes('fb.com')) {
      platform = 'facebook';
    } else if (hostname.includes('instagram.com')) {
      platform = 'instagram';
    } else if (hostname.includes('tiktok.com')) {
      platform = 'tiktok';
    } else if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
      platform = 'twitter';
    } else if (hostname.includes('vimeo.com')) {
      platform = 'vimeo';
    }

    // Extract video ID for YouTube
    let videoId = '';
    if (platform === 'youtube') {
      if (hostname.includes('youtu.be')) {
        videoId = videoUrl.pathname.slice(1);
      } else {
        videoId = videoUrl.searchParams.get('v') || '';
      }
    }

    // Fetch video information using youtube-dl backend API (yt-dlp compatible)
    // For production, you would integrate with a service like:
    // - yt-dlp API wrapper
    // - youtube-dl-exec
    // - Or build custom scrapers for each platform
    
    // For demo purposes, we'll return mock data based on platform
    const videoInfo = {
      title: `Sample ${platform.charAt(0).toUpperCase() + platform.slice(1)} Video`,
      thumbnail: platform === 'youtube' && videoId 
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : 'https://via.placeholder.com/1280x720/FF385C/FFFFFF?text=Video+Thumbnail',
      duration: '5:23',
      platform,
      formats: [
        {
          quality: '1080p',
          format: 'MP4',
          size: '128 MB',
          downloadUrl: `#download-1080p-${platform}`,
        },
        {
          quality: '720p',
          format: 'MP4',
          size: '64 MB',
          downloadUrl: `#download-720p-${platform}`,
        },
        {
          quality: '480p',
          format: 'MP4',
          size: '32 MB',
          downloadUrl: `#download-480p-${platform}`,
        },
        {
          quality: '360p',
          format: 'MP4',
          size: '16 MB',
          downloadUrl: `#download-360p-${platform}`,
        },
      ],
      audioFormats: [
        {
          quality: '320kbps',
          format: 'MP3',
          size: '8 MB',
          downloadUrl: `#download-audio-320-${platform}`,
        },
        {
          quality: '128kbps',
          format: 'MP3',
          size: '4 MB',
          downloadUrl: `#download-audio-128-${platform}`,
        },
      ]
    };

    console.log('Video info processed successfully:', videoInfo);

    return new Response(
      JSON.stringify({ 
        success: true,
        videoInfo,
        message: 'Demo mode: In production, this would extract real download links from the video platform.' 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error processing video:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process video',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
