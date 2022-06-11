import { Test, TestingModule } from "@nestjs/testing";
import { AdmissionOfferReviewsController } from "@modules/admission-offer-reviews/admission-offer-reviews.controller";
import { AdmissionOfferReviewsService } from "@modules/admission-offer-reviews/admission-offer-reviews.service";

describe("AdmissionOfferReviewsController", () => {
  let controller: AdmissionOfferReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionOfferReviewsController],
      providers: [AdmissionOfferReviewsService],
    }).compile();

    controller = module.get<AdmissionOfferReviewsController>(
      AdmissionOfferReviewsController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
