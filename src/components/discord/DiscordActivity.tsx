import { Activity, Moon } from 'lucide-react';
import ActivityCard from './ActivityCard';
import SpotifyCard from '../Profile/SpotifyCard';

interface LanyardData {
  activities?: any[];
  spotify?: {
    album_art_url: string;
    song: string;
    artist: string;
  };
}

interface DiscordActivityProps {
  lanyard: LanyardData | null;
}

export default function DiscordActivity({ lanyard }: DiscordActivityProps) {
  const nonSpotifyActivities = lanyard?.activities?.filter(
    (activity) => activity.name !== 'Spotify'
  ) || [];

  const hasActivities = nonSpotifyActivities.length > 0;
  const hasSpotify = !!lanyard?.spotify;

  return (
    <div className="bg-zinc-900/50 backdrop-blur border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Activity className="w-6 h-6 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-100">Activity</h2>
      </div>

      {hasActivities ? (
        <div className="space-y-4">
          {nonSpotifyActivities.map((activity, idx) => (
            <ActivityCard key={idx} activity={activity} />
          ))}
        </div>
      ) : !hasSpotify ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <Moon className="w-8 h-8 text-zinc-600" />
          </div>
          <p className="text-zinc-400 text-sm">No current activities</p>
        </div>
      ) : null}

      {hasSpotify && lanyard.spotify && <SpotifyCard spotify={lanyard.spotify} />}
    </div>
  );
}