import React from "react";

const StickyTopBar = () => {
  return (
    <div className="sticky top-0 z-[60] w-full bg-purple-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center text-sm font-medium">
        <span>Free AI for HR workshops—Sundays 10:00 IST. Join →</span>
      </div>
    </div>
  );
};

export default StickyTopBar;
