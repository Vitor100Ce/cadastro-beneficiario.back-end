import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { TitularService } from "./titular.service";
import { ApiTags } from "@nestjs/swagger"
import { CreatTitularDto } from "./dto/create.dto";
import { UptadeTitularDto } from "./dto/uptade.dto";

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

}