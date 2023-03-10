import { Body, Controller, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TitularService } from "./titular.service";
import { ApiTags } from "@nestjs/swagger"
import { CreatTitularDto } from "./dto/create.dto";
import { UptadeTitularDto } from "./dto/uptade.dto";
import { SearchTitularDto } from "./dto/search.dto";

@ApiTags('titular')
@Controller('titular')
export class TitulaController{
    constructor(private titularService: TitularService){

    }
    @Post()
    create(@Body()createTitularDto: CreatTitularDto){
        this.titularService.create(createTitularDto)
        
    }

    @Put(':titularId')
    update(@Param('titularId') titularId: string, @Body() uptadeTitularDto:UptadeTitularDto){
        return this.titularService.update(titularId, uptadeTitularDto)
    }


    @Patch('disable/:titularId')
    disableTitular(@Param('titularId') titularId: string){
        this.titularService.disableTitular(titularId)
    }

    @Patch('enable/:titularId')
    enableTitular(@Param('titularId') titularId: string){
        this.titularService.enableTitular(titularId)
    }

    @Get()
    search(@Query() searchTitularDto:SearchTitularDto){
        return this.titularService.search(searchTitularDto)
    }

    @Get(':titularId')
    getTitularById(@Param('titularId') titularId: string){
        return this.titularService.getTitularById(titularId)
    }

}