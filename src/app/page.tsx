import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FeaturesSectionDemo } from "@/components/ui/features";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { WavyBackground } from "@/components/ui/wavy-background";
const navItems = [
  { name: "Docs", link: "https://docs.tardionchain.xyz/" },
  { name: "About", link: "/about" },
  { name: "Tokenomics", link: "/tokenomics" },
];

export default function Home() {
  return (
    <div>
      <FloatingNav navItems={navItems} className="custom-styles" />
      <section className="relative max-h-screen overflow-hidden ">
        <div className="absolute max-w-full top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <WavyBackground className="mx-auto pb-40"></WavyBackground>
        </div>
        <div className="h-[90vh] px-8 flex-col w-full bg-black bg-opacity-60 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col justify-end items-start">
            <h1 className="text-2xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-200 py-8">
              Building the first <br /> digital tardigrade life form.
            </h1>
            <p className="max-w-96">
              Bringing tardigrade to life in the digital realm with on-chain
              transactions—exploring the boundaries of biology, simulation, and
              innovation.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="https://app.tardionchain.xyz/">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <span>Launch app</span>
                </HoverBorderGradient>
              </Link>

              <Link href="https://jup.ag/swap/SOL-tardi">
                <Button
                  variant="outline"
                  className="font-semibold bg-black rounded-full px-4 py-5"
                >
                  Buy $tardi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <FeaturesSectionDemo />
      </main>
    </div>
  );
}
