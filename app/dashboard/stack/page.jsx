import Image from "next/image";

export default function Stack() {
  return (
    <main className="min-h-screen md:px-6 lg:p-8">
      <div className="w-full font-mono text-sm ">
        <p className="text-2xl md:text-5xl font-bold mb-2">My Stack</p>
        <p className="text-muted-foreground">
          Software and tools I use on a regular basis.
        </p>
      </div>
      <section className="h-fit border border-accent-primary mt-8 p-6">
        <h3 className="mb-4 font-bold text-xl">Development</h3>
        <div className="justify-between gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/chrome.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Chrome</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/figma.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/tailwind.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Tailwind</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/vscode.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Vs Code</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/nextjs.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/nextjs.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/nextjs.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/nextjs.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====PRODUCTIVITY TOOLS SECTION */}
      <section className="h-fit border border-accent-primary mt-8 p-6">
        <h3 className="mb-4 font-bold text-xl">Productivity</h3>
        <div className="justify-between gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/applemusic.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Chrome</p>
              <p className="text-sm text-muted-foreground">Framework</p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/grammerly.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Grammerly</p>
              <p className="text-sm text-muted-foreground">Grammer</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/calender.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Google Calender</p>
              <p className="text-sm text-muted-foreground">Calender</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/applenotes.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">Apple Notes</p>
              <p className="text-sm text-muted-foreground">Notes</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center">
            <Image
              src="/chatgpt.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              className="object-cover"
            />
            <div>
              <p className="font-semibold">chatGPT</p>
              <p className="text-sm text-muted-foreground">Ai</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
