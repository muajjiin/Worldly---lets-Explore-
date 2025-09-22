import React from "react";
import { calculateTrendingPercentage } from "~/lib/utilis";
import{cn} from '~/lib/utilis'
interface StartsCardProps {
  headerTitle: string;
  total: number;
  lastMonthCount: number;
  currentMonthCount: number;
}

const StartCard: React.FC<StartsCardProps> = ({
  headerTitle,
  total,
  lastMonthCount,
  currentMonthCount,
}) => {
  // Calculate trend and percentage
  const { trend, percentage } = calculateTrendingPercentage(
    currentMonthCount,
    lastMonthCount
  );

  const isDecrement = trend === "decrement";

  return (
    <article className="starts-card p-4 bg-gray-800 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
      {/* Text content */}
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-base font-medium text-gray-200">{headerTitle}</h3>
        <h2 className="text-4xl font-semibold text-white">{total}</h2>

        <div className="flex items-center gap-3">
          <img
            src={`/assets/icons/${isDecrement ? "arrow-down-red.svg" : "arrow-up-green.svg"}`}
            alt={isDecrement ? "Decreasing trend" : "Increasing trend"}
            className="w-5 h-5"
          />
          <span
            className={cn(
              "text-sm font-medium",
              isDecrement ? "text-red-500" : "text-green-500"
            )}
          >
            {Math.round(percentage)}%
          </span>
          <p className="text-sm text-gray-400 truncate">vs last month</p>
        </div>
      </div>

      {/* Trend graph */}
      <div className="flex-shrink-0">
        <img
          src={`/assets/icons/${isDecrement ? "decrement.svg" : "increment.svg"}`}
          alt="Trend graph"
          className="w-full max-w-[150px] h-auto md:h-32 xl:h-40 object-contain"
        />
      </div>
    </article>
  );
};

export default StartCard;
