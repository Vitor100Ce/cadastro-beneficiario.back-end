import { Body, Controller, Post } from "@nestjs/common";
import { TitularService } from "./titular.service";
import { ApiTags } from "@nestjs/swagger"
import { CreatTitularDto } from "./dto/create.dto";

@ApiTags('titular')
@Controller('titular')
export class TitulaController{
    constructor(private titularService: TitularService){

    }
    @Post()
    create(@Body()createTitularDto: CreatTitularDto){
        this.titularService.create(createTitularDto)
    }
}