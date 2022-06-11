import { Test, TestingModule } from "@nestjs/testing";
import { InterviewReviewsService } from "./interview-reviews.service";

describe("InterviewReviewsService", () => {
  let service: InterviewReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewReviewsService],
    }).compile();

    service = module.get<InterviewReviewsService>(InterviewReviewsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
