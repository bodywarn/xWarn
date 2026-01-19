interface Activity {
  name: string;
  details?: string;
  state?: string;
  assets?: {
    large_image?: string;
  };
}

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const formatActivity = (activity: Activity) => {
    if (activity.name === 'Visual Studio Code') {
      return {
        type: 'Coding in VS Code',
        details: activity.details,
        state: activity.state,
        image: activity.assets?.large_image
      };
    } else {
      return {
        type: `Discord Status`,
        details: activity.details,
        state: activity.state,
        image: activity.assets?.large_image
      };
    }
  };

  const formatted = formatActivity(activity);

  return (
    <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
      <p className="text-xs text-zinc-500 mb-2">{formatted.type}</p>
      {formatted.details && (
        <p className="text-sm font-semibold text-zinc-200 mb-1">{formatted.details}</p>
      )}
      {formatted.state && (
        <p className="text-xs text-zinc-400">{formatted.state}</p>
      )}
    </div>
  );
}