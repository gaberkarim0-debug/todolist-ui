import { IoAlertCircle } from "react-icons/io5";
import Button from "../ui/Button";

export default function Error() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      {/* Error Icon */}
      <div className="relative mb-6 animate-bounce">
        <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
        <div className="relative bg-red-100 p-6 rounded-full">
          <IoAlertCircle className="text-red-600 text-6xl" />
        </div>
      </div>

      {/* Error Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3 animate-pulse">
        Oops! Something went wrong
      </h1>

      <p className="text-gray-500 text-lg max-w-md mb-8">
        Something went wrong. Please try again later.
      </p>

      {/* Retry Button */}
      <Button handleClick={() => window.location.reload()}>Try Again</Button>
    </div>
  );
}
