import { Test, TestingModule } from "@nestjs/testing";
import { AdmissionOfferReviewsService } from "@modules/admission-offer-reviews/admission-offer-reviews.service";

describe("AdmissionOfferReviewsService", () => {
  let service: AdmissionOfferReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionOfferReviewsService],
    }).compile();

    service = module.get<AdmissionOfferReviewsService>(
      AdmissionOfferReviewsService
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
