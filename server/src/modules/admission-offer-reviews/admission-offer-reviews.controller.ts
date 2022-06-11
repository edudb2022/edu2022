import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AdmissionOfferReviewsService } from "@modules/admission-offer-reviews/admission-offer-reviews.service";
import { CreateAdmissionOfferReviewDto } from "@modules/admission-offer-reviews/dto/create-admission-offer-review.dto";
import { UpdateAdmissionOfferReviewDto } from "@modules/admission-offer-reviews/dto/update-admission-offer-review.dto";

@Controller("admission-offer-reviews")
export class AdmissionOfferReviewsController {
  constructor(
    private readonly admissionOfferReviewsService: AdmissionOfferReviewsService
  ) {}

  @Post()
  create(@Body() createAdmissionOfferReviewDto: CreateAdmissionOfferReviewDto) {
    return this.admissionOfferReviewsService.create(
      createAdmissionOfferReviewDto
    );
  }

  @Get()
  findAll() {
    return this.admissionOfferReviewsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.admissionOfferReviewsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAdmissionOfferReviewDto: UpdateAdmissionOfferReviewDto
  ) {
    return this.admissionOfferReviewsService.update(
      +id,
      updateAdmissionOfferReviewDto
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.admissionOfferReviewsService.remove(+id);
  }
}
