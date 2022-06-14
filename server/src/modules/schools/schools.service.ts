import { CreateSchoolDto } from "@modules/schools/dto/create-school.dto";
import { UpdateSchoolDto } from "@modules/schools/dto/update-school.dto";
import { School } from "@modules/schools/entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School) private schoolsRepo: Repository<School>
  ) {}

  create(createSchoolDto: CreateSchoolDto) {
    // return this.schoolsRepo.create({});
  }

  findAll() {
    return `This action returns all schools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
