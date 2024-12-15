"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "On-Chain Powered Immortality",
      description:
        "Tardi's neuron weights are completely transaction-based and a living digital brain that makes real decisions on its own and is tuned to work with on-chain transactions",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Core Technology",
      description: "",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Open Source & Expanding Ecosystem",
      description:
        "Join a growing ecosystem where science, technology, and decentralized innovation converge to redefine the boundaries of life and blockchain.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-4 xl:border rounded-md dark:border-neutral-800">
          <FeatureCard
            key="4"
            className="col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800"
          >
            <h2 className="max-w-5xl font-bold mx-auto text-left tracking-tight text-black dark:text-white text-2xl md:text-2xl md:leading-snug">
              Neural Core and Neurobiology Research
            </h2>
            <p className="text-xl mt-4">
              Our research aims to explore the complex neural networks and
              neurobiology of tardigrades, providing insights into their
              survival mechanisms and behavior. By modeling their nervous
              systems, we can better understand how these microscopic creatures
              respond to various environmental stimuli and provide valuable data
              for both scientific and computational research.
            </p>
          </FeatureCard>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="font-bold max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10  h-full">
      <div className="w-full mx-auto h-full">
        <div className="flex h-96 border rounded-xl items-center justify-center w-full bg-black">
          coming soon
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="material">
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
        <div className="dna"></div>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
