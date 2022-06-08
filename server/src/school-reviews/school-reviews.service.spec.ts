import { Test, TestingModule } from '@nestjs/testing';
import { SchoolReviewsService } from './school-reviews.service';

describe('SchoolReviewsService', () => {
  let service: SchoolReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolReviewsService],
    }).compile();

    service = module.get<SchoolReviewsService>(SchoolReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
