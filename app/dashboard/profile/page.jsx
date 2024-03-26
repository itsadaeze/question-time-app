import Image from "next/image";

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  md:px-6 lg:p-8">
      <section className="flex flex-col-reverse lg:flex-row lg:flex lg:gap-x-10">
        <div className="font-mono text-sm lg:w-[80%]">
          <p className="text-2xl md:text-3xl text-center mt-6 lg:text-left lg:mt-0 lg:text-5xl font-bold mb-2">
            Hey I&apos;m Adaeze Ugwu <span>✌🏻</span>
          </p>
          <p className="text-foreground leading-8 ">
            I am  Frontend developer who juggles building User Interfaces.
             I&apos;m all about creating interfaces that not only look good but also feel intuitive and engaging. My toolkit includes ReactJs, Next.js, and Vue.js, which I wield with finesse to breathe life into designs.
          </p>
          <p className=" mt-10 leading-8 ">
            When I&apos;m not working, I find peace in exploring the world and
            unwinding through activities like researching, Traveling and embracing
            the outdoors bring a perfect balance to my life, providing a
            refreshing break from the anomalies in business.
          </p>
          </div>
      </section>
    </main>
  );
}
