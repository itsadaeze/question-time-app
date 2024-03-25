"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarContactLinks, sidebarRouteLinks } from "@/lib/LinkData";
import { ModeToggle } from "../modeToggle/ModeToggle";
import Image from "next/image";

export default function SideBar() {
  const pathname = usePathname();
  // Get pathnameUrl from URL
  console.log(pathname, "this is pathname=====");

  return (
    <>
      <section className="z-30 absolute xl:fixed w-[249px]">
        <div className="md:border-r border-slate w-[260px] min-h-screen pt-10 md:fixed">
          <div className="justify-between px-3 pr-4 pb-6 hidden md:flex">
            <div className="flex gap-x-2">
              <Image
                src="/81015448.jpeg"
                alt="profile image"
                width={100}
                height={100}
                priority
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold">Adaeze Ugwu</p>
                <Link href="/dashboard/profile" className="text-sm text-primary">
                  View Profile
                </Link>
              </div>
            </div>
            <ModeToggle />
          </div>

          <div className="hidden md:relative md:flex flex-col items-start w-full border-t md:border-slate pb-1">
            <div className="fixed left-0 w-60">
              {/* ============ LINKS AND ICONS =========== */}
              {sidebarRouteLinks?.map((item, index) => (
                <div
                  key={index}
                  className="mt-2 flex flex-col items-start text-sm w-full"
                >
                  <div className="flex w-full">
                    <Link
                      href={`${item.href}`}
                      className={`${
                        pathname === item.href
                          ? "rounded-sm bg-accent dark:bg-accent w-full "
                          : ""
                      }
                  flex items-center w-full hover:bg-accent dark:hover:bg-accent rounded-lg px-4 mx-3 py-2`}
                    >
                      <p
                        className={`${pathname === item.href ? "" : ""}
                     text-sm hover:cursor-pointer text-foreground
                  `}
                      >
                        {item.name}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start border-t border-slate  w-full md:h-32 lg:h-  mt-60">
            <div className="fixed left-0 w-60">
              {/* ============ LINKS AND ICONS =========== */}
              {sidebarContactLinks?.map((item, index) => (
                <div
                  key={index}
                  className="mt-2 flex flex-col items-start text-sm w-full"
                >
                  <div className="flex  w-full">
                    <Link
                      href={`${item.href}`}
                      className={`${
                        pathname === item.href
                          ? "rounded-sm  bg-accent dark:bg-accent w-full"
                          : ""
                      }
                  flex items-center gap-4 hover:cursor-pointer w-full hover:bg-accent dark:hover:bg-accent rounded-lg px-4 mx-3 py-2`}
                    >
                      <p
                        className={`${pathname === item.href ? "" : ""}
                     text-sm hover:cursor-pointer  text-foreground
                  `}
                      >
                        {item.name}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============Upload Record Button ========== */}
          <section className="border-t border-slate pt-6 px-4 mt-28 hidden md:block">
            <div className="bg-accent dark:bg-accent rounded-lg text-foreground flex items-center justify-center gap-4 p-2  cursor-pointer">
              <p>Sign out</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
