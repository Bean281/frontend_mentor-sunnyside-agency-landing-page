import imageMobileTransform from "@/public/images/mobile/image-transform.jpg";
import imageMobileStandOut from "@/public/images/mobile/image-stand-out.jpg";
import imageMobileGraphic from "@/public/images/mobile/image-graphic-design.jpg";
import imageMobilePhoto from "@/public/images/mobile/image-photography.jpg";
import imageDesktopTransform from "@/public/images/desktop/image-transform.jpg";
import imageDesktopStandOut from "@/public/images/desktop/image-stand-out.jpg";
import imageDesktopGraphic from "@/public/images/desktop/image-graphic-design.jpg";
import imageDesktopPhoto from "@/public/images/desktop/image-photography.jpg";
import Image from "next/image";

export default function InformationSection() {
  return (
    <div className="container-information-section">
      <div className="info-detail-mobile-ctn lg:grid lg:grid-cols-2 lg:grid-rows-3">
        {/* Transform content */}
        <div className="image-1-ctn lg:order-2">
          <Image
            src={imageMobileTransform}
            alt="image-mobile-transform"
            className="lg:hidden"
          />
          <Image
            src={imageDesktopTransform}
            alt="image-desktop-transform"
            className="hidden lg:block lg:w-full"
          />
        </div>

        <div className="transform-info-ctn bg-neutral-white flex flex-col items-center justify-center px-10 py-20 text-center lg:text-left lg:items-start lg:p-40 lg:order-1">
          <div className="transform-title-ctn font-fraunces text-neutral-desaturated text-3xl font-extrabold lg:w-2/3">
            <p>Transform your brand</p>
          </div>
          <div className="transform-desc-ctn text-neutral-grayish font-barlow mt-10 font-bold">
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.{" "}
            </p>
          </div>
          <div className="transform-action-ctn font-fraunces text-neutral-desaturated mt-10 font-extrabold">
            <p className="border-b-4 border-[hsla(51,100%,49%,0.3)] transition-colors duration-300 hover:border-[hsl(51,100%,49%)]">
              LEARN MORE
            </p>
          </div>
        </div>

        {/* Standout content */}

        <div className="image-2-ctn lg:order-3">
          <Image
            src={imageMobileStandOut}
            alt="image-mobile-standout"
            className="lg:hidden"
          />
          <Image
            src={imageDesktopStandOut}
            alt="image-desktop-standout"
            className="hidden lg:block lg:w-full"
          />
        </div>

        <div className="standout-info-ctn bg-neutral-white flex flex-col items-center justify-center px-10 py-20 text-center lg:text-left lg:items-start lg:p-40  lg:order-4">
          <div className="standout-title-ctn font-fraunces text-neutral-desaturated text-3xl font-extrabold">
            <p>Stand out to the right audience</p>
          </div>
          <div className="standout-desc-ctn text-neutral-grayish font-barlow mt-10 font-bold">
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we&apos;ll build
              and extend your brand in digital places.{" "}
            </p>
          </div>
          <div className="standout-action-ctn font-fraunces text-neutral-desaturated mt-10 font-extrabold">
            <p className="border-b-4 border-[hsla(7,99%,70%,0.3)] transition-colors duration-300 hover:border-[hsl(7,99%,70%)]">
              LEARN MORE
            </p>
          </div>
        </div>

        <div className="image-3-ctn relative lg:order-6">
          <Image
            src={imageMobileGraphic}
            alt="image-mobile-graphic"
            className="lg:hidden"
          />
          <Image
            src={imageDesktopGraphic}
            alt="image-desktop-graphic"
            className="hidden lg:block lg:w-full"
          />

          <div className="graphic-info-ctn text-primary-desaturated-graphic absolute bottom-15 px-7 text-center lg:px-50">
            <div className="graphic-title-ctn font-fraunces text-3xl font-extrabold">
              <p>Graphic Design</p>
            </div>
            <div className="graphic-desc-ctn mt-10 font-semibold">
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential
                clients&apos; attention.
              </p>
            </div>
          </div>
        </div>

        <div className="image-4-ctn relative lg:order-7">
          <Image
            src={imageMobilePhoto}
            alt="image-mobile-photo"
            className="lg:hidden"
          />
          <Image
            src={imageDesktopPhoto}
            alt="image-desktop-photo"
            className="hidden lg:block lg:w-full"
          />

          <div className="photo-info-ctn text-primary-blue-photo absolute bottom-15 px-7 text-center lg:px-50">
            <div className="photo-title-ctn font-fraunces text-3xl font-extrabold">
              <p>Photography </p>
            </div>
            <div className="photo-desc-ctn mt-10 font-semibold">
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
