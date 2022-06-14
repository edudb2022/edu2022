import { Test, TestingModule } from "@nestjs/testing";
import { GradJobReviewsService } from "@modules/grad-job-reviews/grad-job-reviews.service";

describe("GradJobReviewsService", () => {
  let service: GradJobReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradJobReviewsService],
    }).compile();

    service = module.get<GradJobReviewsService>(GradJobReviewsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
