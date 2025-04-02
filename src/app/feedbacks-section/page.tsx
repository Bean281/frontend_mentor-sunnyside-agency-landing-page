'use client'

import Image from "next/image";
import avaImg1 from "@/public/images/image-emily.jpg";
import avaImg2 from "@/public/images/image-jennie.jpg";
import avaImg3 from "@/public/images/image-thomas.jpg";

const feedBackData = [
  {
    id: 1,
    image: avaImg1,
    desc: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Maketing Director",
  },
  {
    id: 2,
    image: avaImg2,
    desc: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    id: 3,
    image: avaImg3,
    desc: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! ",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

export default function FeedbacksSection() {
  return (
    <div className="container-feedbacks-section bg-neutral-white flex flex-col items-center justify-center pt-20 md:pt-30">
      <div className="feedbacks-title font-fraunces text-neutral-grayish-blue text-base font-bold tracking-wider lg:text-2xl">
        CLIENT TESTIMONIALS
      </div>

      <div className="feedback-item-ctn mt-8 grid grid-cols-1 p-2 lg:grid-cols-3 lg:px-30 lg:pt-10">
        {feedBackData &&
          feedBackData.map((feedBackItem) => {
            return (
              <div className="big big"  key={feedBackItem.id}>
                <div className="feedback-item mb-10 flex flex-col items-center justify-center p-5 text-center">
                  <div className="feedback-ava-ctn w-20 rounded-4xl">
                    <Image
                      src={feedBackItem.image}
                      alt="ava-img-1"
                      className="rounded-full"
                    />
                  </div>

                  <div className="feedback-desc-ctn text-neutral-desaturated font-barlow mt-10 text-lg font-light lg:mt-15">
                    <p>
                      {feedBackItem.desc}
                    </p>
                  </div>

                  <div className="feedback-user-ctn mt-10 lg:mt-15">
                    <div className="feedback-user-name-ctn text-neutral-desaturated font-fraunces text-xl font-bold">
                      <p>{feedBackItem.name}</p>
                    </div>
                    <div className="feedback-user-position-ctn text-neutral-grayish-blue mt-2 text-sm font-semibold">
                      <p>{feedBackItem.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
