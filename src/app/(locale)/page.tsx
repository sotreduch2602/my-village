"use client";

import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="main min-h-screen">
      <div
        id="homepage-search"
        className="absolute inset-0 flex flex-col justify-end md:justify-center items-center gap-[30px] z-[1px] px-4 pb-[150px] md:pb-0"
      >
        <div className="booking"></div>
        <div className="banner-button">
          <Button>EXPLORE</Button>
        </div>
      </div>
    </div>
  );
}
