import { Body, Controller, Post } from "@nestjs/common";
import { DependenteService } from "./dependente.service";
import { ApiTags } from "@nestjs/swagger"
import { CreatDependenteDto } from "./dto/create.dto";

@ApiTags('dependente')
@Controller('dependente')
export class DependenteController{
    constructor(private dependenteService: DependenteService){

    }
    @Post()
    create(@Body()createDependenteDto: CreatDependenteDto){
        this.dependenteService.create(createDependenteDto)
    }
}