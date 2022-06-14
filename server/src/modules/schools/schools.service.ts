import { CreateSchoolDto } from "@modules/schools/dto/create-school.dto";
import { UpdateSchoolDto } from "@modules/schools/dto/update-school.dto";
import { School, SchoolAlias } from "@modules/schools/entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School) private schoolsRepo: Repository<School>,
    @InjectRepository(SchoolAlias)
    private schoolAliasesRepo: Repository<SchoolAlias>
  ) {}

  async create(createSchoolDto: CreateSchoolDto): Promise<School> {
    const { aliases } = createSchoolDto;

    const newSchoolAliases = this.schoolAliasesRepo.create(
      aliases.map(alias => ({ name: alias }))
    );

    await this.schoolAliasesRepo.save(newSchoolAliases);

    const newSchool = this.schoolsRepo.create({
      ...createSchoolDto,
      aliases: newSchoolAliases,
    });

    return this.schoolsRepo.save(newSchool);
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
