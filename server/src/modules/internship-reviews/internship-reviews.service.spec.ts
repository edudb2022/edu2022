import { Test, TestingModule } from "@nestjs/testing";
import { InternshipReviewsService } from "@modules/internship-reviews/internship-reviews.service";

describe("InternshipReviewsService", () => {
  let service: InternshipReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternshipReviewsService],
    }).compile();

    service = module.get<InternshipReviewsService>(InternshipReviewsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
