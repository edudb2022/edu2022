import { Test, TestingModule } from "@nestjs/testing";
import { GradJobReviewsController } from "@modules/grad-job-reviews/grad-job-reviews.controller";
import { GradJobReviewsService } from "@modules/grad-job-reviews/grad-job-reviews.service";

describe("GradJobReviewsController", () => {
  let controller: GradJobReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradJobReviewsController],
      providers: [GradJobReviewsService],
    }).compile();

    controller = module.get<GradJobReviewsController>(GradJobReviewsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
