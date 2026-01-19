import { useLanyard, type LanyardData } from "react-use-lanyard";
import { DISCORD_USER_ID } from "../../data/constants";

const loadingColor = "bg-blue-500";

const statusColors: Record<LanyardData["discord_status"], string> = {
    online: "bg-emerald-500",
    idle: "bg-amber-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
};

const statusMapping: Record<LanyardData["discord_status"], string> = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline",
};

export default function DiscordStatus() {
    const { data, isLoading } = useLanyard({ userId: DISCORD_USER_ID });
    const status = data?.data.discord_status ?? "offline";
    const statusColor = isLoading ? loadingColor : statusColors[status];
    const statusName = isLoading ? "Loading" : statusMapping[status];

    return (
        <div className="px-4 py-2 bg-zinc-800/50 backdrop-blur border border-zinc-700/50 rounded-full text-sm font-medium flex items-center gap-3">
            <div className="relative flex items-center justify-center">
                <div className={`absolute w-2 h-2 ${statusColor} rounded-full animate-ping`} />
                <div className={`relative w-2 h-2 ${statusColor} rounded-full`} />
            </div>

            <span className="text-zinc-300">{statusName}</span>
            <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={17}
                height={17}
                fill="currentColor"
                aria-label="Discord Icon"
                className="text-zinc-400"
            >
                <path
                    d="M18.8944 4.34399C17.5184 3.71467 16.057 3.256 14.5317 3C14.3397 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14394 4.13067C8.9946 3.77866 8.77059 3.33067 8.58925 3C7.05328 3.256 5.59194 3.71467 4.22555 4.34399C1.46289 8.41865 0.716219 12.3973 1.08955 16.3226C2.92421 17.6559 4.6949 18.4666 6.43463 19C6.86129 18.424 7.2453 17.8053 7.57597 17.1546C6.94663 16.92 6.3493 16.632 5.7733 16.2906C5.92263 16.184 6.07197 16.0667 6.21064 15.9493C9.68796 17.5387 13.4544 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5237 17.1546C15.8543 17.8053 16.2384 18.424 16.665 19C18.4037 18.4666 20.185 17.6559 22.0101 16.3226C22.4687 11.7787 21.2837 7.83202 18.8944 4.34399ZM8.05596 13.9013C7.01061 13.9013 6.15728 12.952 6.15728 11.7893C6.15728 10.6267 6.98928 9.67731 8.05596 9.67731C9.11194 9.67731 9.97591 10.6267 9.95457 11.7893C9.95457 12.952 9.11194 13.9013 8.05596 13.9013ZM15.065 13.9013C14.0197 13.9013 13.1653 12.952 13.1653 11.7893C13.1653 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9637 11.7893C16.9637 12.952 16.1317 13.9013 15.065 13.9013Z"
                />
            </svg>
          </div>  
        </div>
    );
}