import { Test, TestingModule } from "@nestjs/testing";
import { InterviewReviewsController } from "./interview-reviews.controller";
import { InterviewReviewsService } from "./interview-reviews.service";

describe("InterviewReviewsController", () => {
  let controller: InterviewReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewReviewsController],
      providers: [InterviewReviewsService],
    }).compile();

    controller = module.get<InterviewReviewsController>(
      InterviewReviewsController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
