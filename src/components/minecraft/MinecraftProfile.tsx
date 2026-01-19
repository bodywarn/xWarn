import { useState } from 'react';
import { Cuboid, ExternalLink, Copy, Check } from 'lucide-react';

import labyMod from "../../assets/labymod.png";
import Superawesome from "../../assets/superawesome.png";

export default function MinecraftProfile() {
  const [copied, setCopied] = useState(false);

  const copyUsername = () => {
    navigator.clipboard.writeText('xWarn');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full lg:col-span-2 bg-zinc-900/50 backdrop-blur border border-zinc-800/50 rounded-2xl p-4 sm:p-6 hover:border-zinc-700/50 transition-all duration-300">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Cuboid className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">Minecraft Profile</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-xl blur opacity-50 group-hover:opacity-75 transition"></div>
            <img 
              src="https://visage.surgeplay.com/bust/f33aebcf8ddc4a1cb9d57ca2a7abea99"
              loading="lazy"
              alt="xWarn's Minecraft Skin"
              className="relative w-36 sm:w-40 md:w-48 h-auto object-contain bg-zinc-800 rounded-xl border-2 border-zinc-700"
            />
          </div>
        </div>

        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
          <div>
            <p className="text-xs sm:text-sm text-zinc-500 mb-1">Minecraft username</p>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-lg sm:text-xl font-bold text-zinc-100 font-mono">xWarn</p>
              <button
                onClick={copyUsername}
                className="p-1.5 hover:bg-zinc-800 rounded-lg transition-all duration-200 group"
                title="Copy username"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
                )}
              </button>
              <a
                href="https://laby.net/@xWarn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-zinc-800 rounded-lg transition-all duration-200 group"
                title="Visit LabyMod profile"
              >
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-zinc-500 mb-1">UUID</p>
            <p className="text-xs sm:text-sm font-mono text-zinc-400/30 break-words px-2 sm:px-3 py-2 rounded-lg bg-zinc-800/30">
              f33aebcf-8ddc-4a1c-b9d5-7ca2a7abea99
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
            <a 
              href="https://laby.net/@xWarn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all duration-300 text-blue-400 font-medium text-sm"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" src={labyMod} alt="Labymod logo" />
              <span className="whitespace-nowrap">Laby.net Profile</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
            <a 
              href="https://superawesome.dk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 bg-zinc-700/30 hover:bg-zinc-400/20 border border-zinc-500/50 rounded-lg transition-all duration-300 text-white font-medium text-sm"
            >
              <img className="w-auto h-5 sm:h-6 flex-shrink-0" src={Superawesome} alt="Superawesome logo" />
              <span className="whitespace-nowrap">Superawesome</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}