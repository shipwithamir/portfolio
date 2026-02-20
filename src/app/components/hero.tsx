import Image from "next/image";
import SocialLinks from "./social-links";

function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="flex gap-6">
          <div className="relative h-24 w-24 sm:h-32 sm:w-32">
            <Image
              src="/images/profile.jpg"
              alt="Amir Khan's profile"
              fill
              priority
              className="border-fg-muted rounded-full border-4 object-cover"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <h1 className="text-fg text-4xl font-bold sm:text-6xl">
              Amir Khan
            </h1>
            <h4 className="text-fg-muted text-lg sm:text-2xl">
              Software Engineer
            </h4>
          </div>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}

export default Hero;
