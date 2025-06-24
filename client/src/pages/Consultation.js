import ConsultationComp from "../commponents/consultation-comp/ConsultationComp";
import { ScrollAnimationWrapper } from "../commponents/useScrollAnimation";

export default function Consultation() {
  return (
    <div className="consultation-container">
      <ScrollAnimationWrapper animationType="fadeUp" delay={0.2}>
        <ConsultationComp />
      </ScrollAnimationWrapper>
    </div>
  );
}
