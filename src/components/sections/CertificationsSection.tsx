"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certificates = [
  "Google-IT-Support-Series-SR0B7WZW0VYD.jpg",
  "IT-Security-Defense-against-the-digital-dark-arts-LB98BR48D6BV.jpg",
  "Operating-Systems-and-You-Becoming-a-Power-T6GG865UN9UL.jpg",
  "Python-for-Data-Science-AI-Development-F6KH384GSGV3.jpg",
  "System-Administration-and-IT-Infrastructure-TRCL9HTDACD5.jpg",
  "Technical-Support-Fundamentals-YGEFU3EWST3H.jpg",
  "The-Bits-and-Bytes-of-Computer-Networking-U23KLAARZN8M.jpg",
  "Introduction-to-Generative-AI-TCPNE67F8HH8.jpg",
  "AWS-Cloud-Technical-Essentials-RXDMU76FACAR.jpg",
  "Web-Programming-fyep.jpg",
];

export function CertificatesCarousel() {
  return (
    <section id="certificates" className="py-12 relative">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-4">
            {certificates.map((cert, index) => (
              <CarouselItem
                key={index}
                className="basis-2/3 md:basis-1/3 lg:basis-1/4"
              >
                <div className="overflow-hidden rounded-md shadow-md">
                  <img
                    src={`/certificates/${cert}`}
                    alt={cert}
                    className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}