import { Body, Controller, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { DependenteService } from "./dependente.service";
import { ApiTags } from "@nestjs/swagger"
import { CreatDependenteDto } from "./dto/create.dto";
import { UpdateDependenteDto } from "./dto/uptade.dto";
import { SearchDependenteDto } from "./dto/search.dto";



@ApiTags('dependente')
@Controller('dependente')
export class DependenteController{
    constructor(private dependenteService: DependenteService){

    }
    @Post()
    create(@Body()createDependenteDto: CreatDependenteDto){
        this.dependenteService.create(createDependenteDto)
    }

    @Put(':dependenteId')
    update(@Param('dependenteId') dependenteId: string, @Body() updateDependenteDto: UpdateDependenteDto){
        return this.dependenteService.update(dependenteId, updateDependenteDto)
    }

    @Patch('disable/:dependenteId')
    disableDependente(@Param('dependenteId') dependenteId: string){
        this.dependenteService.disableDependente(dependenteId)
    }

    @Patch('enable/:dependenteId')
    enableDependente(@Param('dependenteId') dependenteId: string){
        this.dependenteService.enableDependente(dependenteId)
    }

    @Get()
    search(@Query() searchDependenteDto:SearchDependenteDto){
        return this.dependenteService.search(searchDependenteDto)
    }

}