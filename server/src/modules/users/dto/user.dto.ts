import { AdmissionOfferReview } from "@modules/admission-offer-reviews/entities";
import { InterviewReview } from "@modules/interview-reviews/entities";
import { ProgramReview } from "@modules/program-reviews/entities";
import { SchoolReview } from "@modules/school-reviews/entities";

export class UserDto {
  id: number;
  name: string;
  schoolReviews?: SchoolReview[];
  programReviews?: ProgramReview[];
  interviewReviews?: InterviewReview[];
  admissionOfferReviews?: AdmissionOfferReview[];
}
