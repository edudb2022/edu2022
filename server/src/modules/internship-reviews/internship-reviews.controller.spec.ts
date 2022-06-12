import { Test, TestingModule } from "@nestjs/testing";
import { InternshipReviewsController } from "@modules/internship-reviews/internship-reviews.controller";
import { InternshipReviewsService } from "@modules/internship-reviews/internship-reviews.service";

describe("InternshipReviewsController", () => {
  let controller: InternshipReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternshipReviewsController],
      providers: [InternshipReviewsService],
    }).compile();

    controller = module.get<InternshipReviewsController>(
      InternshipReviewsController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
