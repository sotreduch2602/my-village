import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "../../../shared/lib/utils";
import { Bell, Home, Menu, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  { icon: Home, label: "Short Stay", href: "/#" },
  { icon: User, label: "Business", href: "/business" },
  { icon: Bell, label: "Loyalty Program", href: "/royal-program" },
  { icon: Settings, label: "Our Brands", href: "/our-brands" },
];

interface HomeHeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const HomeHeader = ({ className }: HomeHeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="h-16 top-0 left-0 right-0 fixed z-50 transition-all duration-300 bg-white shadow">
          <div className="flex justify-center">
            <div className="container">
              <div className="w-full flex justify-between items-center h-16">
                <Link
                  className="w-11 h-11 md:w-15 md:h-15 flex items-center mx-[15px]"
                  href={"/"}
                >
                  <Image
                    className="w-[60px] h-auto object-cover"
                    src="https://cdn-v2.mvillage.vn/homepage/images/logo-mvillage-b.png"
                    alt="logo"
                    loading="lazy"
                    width={"60"}
                    height={"60"}
                  />
                </Link>
                <div className="flex gap-[25px] mr-[15px] text-secondary">
                  <div className="gap-[25px] flex">
                    {menuItems.map((item) => {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="gap-2.5 relative text-base font-medium leading-6 flex items-center cursor-pointer"
                        >
                          <span className="capitalize">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex items-center animation-main-menu-item">
                    <div className="container">
                      <div className="text-black4 rounded border-1px text-lg md:text-base transition  max-w-full h-auto border-stroke hover:bg-gray16">
                        <div className="flex items-center cursor-pointer gap-1.5 ">
                          <Image
                            className="rounded"
                            src={
                              "https://cdn-v2.mvillage.vn/homepage/images/flag/en-flag.svg"
                            }
                            alt="en"
                            loading="lazy"
                            width={24}
                            height={24}
                          />
                          <span className="text-base font-medium">ENG</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center cursor-pointer relative">
                    <Button
                      variant={"primary"}
                      className="flex items-center py-1 px-2"
                      onClick={() => alert("Click")}
                    >
                      Log in/Sign up
                    </Button>
                    <SheetTrigger asChild>
                      <Button variant={"ghost"} className="flex p-2 ms-2">
                        <Menu width={32} height={32} />
                      </Button>
                    </SheetTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SheetContent
          side="right"
          className="w-80 border-l border-slate-200 bg-white/95 backdrop-blur-xl"
        >
          <SheetHeader className="pb-6 border-b border-slate-100">
            <SheetTitle className="text-xl font-semibold text-slate-900">
              Menu
            </SheetTitle>
            <SheetDescription className="text-slate-500">
              Navigate through your app
            </SheetDescription>
          </SheetHeader>

          <nav className="mt-8 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 group `}
              >
                <item.icon
                  className={`h-5 w-5 transition-transform group-hover:scale-110 `}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="p-4 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 text-white">
              <p className="text-sm font-medium">Need help?</p>
              <p className="text-xs text-slate-400 mt-1">
                Contact our support team
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="mt-3 w-full bg-white text-slate-900 hover:bg-slate-100"
              >
                Get Support
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default HomeHeader;
