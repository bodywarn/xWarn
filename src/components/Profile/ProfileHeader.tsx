import { CodeXml, Shield, } from 'lucide-react';
import SocialLinks from './SocialLinks';
import DiscordStatus from '../discord/DiscordStatus';

import Superawesome from "../../assets/superawesome.png"

interface LanyardData {
    discord_status: 'online' | 'idle' | 'dnd' | 'offline';
    discord_user?: {
        avatar?: string;
        username: string;
    };
    activities?: any[];
    spotify?: any;
}

interface ProfileHeaderProps {
    lanyard: LanyardData | null;
    discordId: string;
}

export default function ProfileHeader({ lanyard, discordId }: ProfileHeaderProps) {
    const getStatusColor = () => {
        if (!lanyard) return 'bg-gray-500';
        switch (lanyard.discord_status) {
            case 'online': return 'bg-emerald-500';
            case 'idle': return 'bg-amber-500';
            case 'dnd': return 'bg-red-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="relative group">
                <div className="absolute -inset-1 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                    {lanyard?.discord_user?.avatar ? (
                        <img
                            src={`https://cdn.discordapp.com/avatars/${discordId}/${lanyard.discord_user.avatar}.gif?size=256`}
                            alt="Avatar"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-zinc-900"
                            onError={(e) => {
                                if (lanyard?.discord_user?.avatar) {
                                    e.currentTarget.src = `https://cdn.discordapp.com/avatars/${discordId}/${lanyard.discord_user.avatar}.png?size=256`;
                                }
                            }}
                        />
                    ) : (
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-zinc-900 bg-zinc-800 flex items-center justify-center">
                            <Shield className="w-16 h-16 text-zinc-600" />
                        </div>
                    )}
                    <div className={`absolute bottom-2 right-2 w-6 h-6 ${getStatusColor()} rounded-full border-4 border-zinc-900`}></div>
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl text-white md:text-5xl font-black text-transparent bg-clip-text mb-2">
                    Warn
                </h1>
                <p className="text-xl text-zinc-400 mb-3 font-mono">@bodywarn</p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                    <DiscordStatus />
                    <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur border border-zinc-700/50 rounded-full text-sm text-zinc-300 font-medium flex items-center gap-2">
                        <img loading="lazy" src={Superawesome} className="w-auto h-6 text-red-400" />
                        Superawesome | Developer
                    </div>
                    <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur border border-zinc-700/50 rounded-full text-sm text-zinc-300 font-medium flex items-center gap-2">
                        <CodeXml className="w-4 h-4 text-violet-400" />
                        Developer
                    </div>
                </div>

                <SocialLinks />
            </div>
        </div>
    );
}