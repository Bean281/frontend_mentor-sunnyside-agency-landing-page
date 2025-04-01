import FeedbacksSection from "./feedbacks-section/page";
import TopSection from "./top-section/page";

export default function Home() {
  return (
    <div className="container-landing-page w-full h-full">
      <TopSection/>
      <FeedbacksSection/>
    </div>
  );
}
