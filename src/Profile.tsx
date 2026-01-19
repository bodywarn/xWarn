import { useState, useEffect } from 'react';
import ProfileHeader from './components/Profile/ProfileHeader';
import MinecraftProfile from './components/minecraft/MinecraftProfile';
import DiscordActivity from './components/discord/DiscordActivity';

import backgroundImage from './assets/background.png';


interface LanyardResponse {
  success: boolean;
  data: {
    discord_status: 'online' | 'idle' | 'dnd' | 'offline';
    discord_user: {
      avatar: string;
      username: string;
    };
    activities: any[];
    spotify?: {
      album_art_url: string;
      song: string;
      artist: string;
    };
  };
}

export default function Profile() {
  const [lanyard, setLanyard] = useState<LanyardResponse['data'] | null>(null);

  const DISCORD_ID = import.meta.env.VITE_Discord_ID;

  useEffect(() => {
    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await res.json();
        if (data.success) {
          setLanyard(data.data);
        }
      } catch (err) {
        console.error('Lanyard error:', err);
      }
    };

    fetchLanyard();
    const interval = setInterval(fetchLanyard, 10000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4 md:p-8 relative">
      <img
        src={backgroundImage}
        loading="lazy"
        alt=""
        className="fixed inset-0 w-full h-full object-cover blur-sm -z-10"
        aria-hidden="true"
      />
      <div className="fixed inset-0 opacity-20 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ProfileHeader lanyard={lanyard} discordId={DISCORD_ID} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MinecraftProfile />
          <DiscordActivity lanyard={lanyard} />
        </div>

        <div className="mt-8 text-center pb-8">
          <p className="text-zinc-800 text-sm font-mono">
            Made with ❤️ by Warn
          </p>
        </div>
      </div>
    </div>
  );
}