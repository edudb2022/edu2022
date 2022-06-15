import { Test, TestingModule } from "@nestjs/testing";
import { SchoolReviewsController } from "@modules/school-reviews/school-reviews.controller";
import { SchoolReviewsService } from "@modules/school-reviews/school-reviews.service";

describe("SchoolReviewsController", () => {
  let controller: SchoolReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolReviewsController],
      providers: [SchoolReviewsService],
    }).compile();

    controller = module.get<SchoolReviewsController>(SchoolReviewsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});