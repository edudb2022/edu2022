import { Test, TestingModule } from "@nestjs/testing";
import { ProgramReviewsController } from "./program-reviews.controller";
import { ProgramReviewsService } from "./program-reviews.service";

describe("ProgramReviewsController", () => {
  let controller: ProgramReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramReviewsController],
      providers: [ProgramReviewsService],
    }).compile();

    controller = module.get<ProgramReviewsController>(ProgramReviewsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
