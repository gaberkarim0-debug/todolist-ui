import React from "react";

export default function TodoSkeleton() {
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex items-center gap-[10px]">
        <div className="animate-pulse bg-gray-300 w-12 h-12 rounded-full"></div>
        <div className="animate-pulse bg-gray-300 w-36 h-5 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-full"></div>
      </div>
    </div>
  );
}
