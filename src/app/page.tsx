import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const headerLinks = [
  {
    title: "Short Stay",
    href: "/#",
  },
  {
    title: "Business",
    href: "/#",
  },
  {
    title: "Loyalty Program",
    href: "/#",
  },
  {
    title: "Our Brands",
    href: "/#",
  },
];

export default function Home() {
  return (
    <main>
      <div className="h-16 top-0 relative z-300 transition-all duration-300 bg-white shadow-searchBar  ">
        <div className="flex justify-center">
          <div className="w-full flex justify-between items-center h-16 top-0 sticky">
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
                {headerLinks.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="gap-2.5 relative text-base font-medium leading-6 flex items-center cursor-pointer"
                    >
                      <span className="capitalize">{link.title}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center animation-main-menu-item">
                <div className="container">
                  <div className="text-black4 rounded border-1px text-lg md:text-base transition  max-w-full h-auto border-stroke hover:bg-gray16">
                    <div className="flex items-center gap-1.5 ">
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
                />
                <button className="flex items-center py-1 px-2 ">
                  Log in/Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
