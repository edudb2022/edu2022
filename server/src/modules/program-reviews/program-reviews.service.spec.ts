import { Test, TestingModule } from "@nestjs/testing";
import { ProgramReviewsService } from "@modules/program-reviews/program-reviews.service";

describe("ProgramReviewsService", () => {
  let service: ProgramReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramReviewsService],
    }).compile();

    service = module.get<ProgramReviewsService>(ProgramReviewsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
