import { Music } from 'lucide-react';

interface SpotifyData {
  album_art_url: string;
  song: string;
  artist: string;
}

interface SpotifyCardProps {
  spotify: SpotifyData;
}

export default function SpotifyCard({ spotify }: SpotifyCardProps) {
  return (
    <div className="mt-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4">
      <div className="flex gap-3">
        <img 
          src={spotify.album_art_url}
          alt="Album Art"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-green-400 mb-1 flex items-center gap-1">
            <Music className="w-3 h-3" />
            Listening to Spotify
          </p>
          <p className="text-sm font-semibold text-zinc-100 truncate">{spotify.song}</p>
          <p className="text-xs text-zinc-400 truncate">{spotify.artist}</p>
        </div>
      </div>
    </div>
  );
}