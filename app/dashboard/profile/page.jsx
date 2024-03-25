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
            I&apos;m a Frontend developer who juggles building User Interfaces.
            I mainly work with ReactJs, Next.js, Vue.js, but occasionally, I
            like to play with Python.
          </p>
          <p className=" mt-10 leading-8 ">
            When I&apos;m not working, I find peace in exploring the world and
            unwinding through activities like skiing. Traveling and embracing
            the outdoors bring a perfect balance to my life, providing a
            refreshing break from the anomalies in business.
          </p>
          <div className="md:flex space-y-4 md:space-y-0 gap-x-4 mt-10">
            <div className="border border-accent-primary w-full p-6 rounded-lg flex items-center gap-x-2 ">
              <Image
                src="/81015448.jpeg"
                alt="Adaeze profile Image"
                width={50}
                height={50}
                priority
                className="object-cover rounded-lg"
              />{" "}
              <div>
                <p className="font-semibold text-sm">@github/itsadaeze</p>
                <p className="text-sm text-muted-foreground">github</p>
              </div>
            </div>
            <div className="border border-accent-primary w-full p-6 rounded-lg flex items-center gap-x-2">
              <Image
                src="/81015448.jpeg"
                alt="Adaeze profile Image"
                width={50}
                height={50}
                priority
                className="object-cover rounded-lg"
              />{" "}
              <div>
                <p className="font-semibold text-sm">@linkedin/itsadaeze</p>
                <p className="text-sm text-muted-foreground">linkedin</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/81015448.jpeg"
            alt="Adaeze profile Image"
            width={100}
            height={100}
            priority
            className="object-cover w-full  h-[400px] rounded-3xl"
          />{" "}
        </div>
      </section>
    </main>
  );
}
