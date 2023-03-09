import { IDependenteRepository, DEPENDENTE_REPOSITORY } from "./dependente.repository";
import { Inject, Injectable } from '@nestjs/common'
import { IcreatDependenteDto } from "./dto/create.dto";

@Injectable()
export class DependenteService{
    constructor(@Inject(DEPENDENTE_REPOSITORY)private dependente_repository: IDependenteRepository){

    }

    async create(dependente:IcreatDependenteDto){
        this.dependente_repository.create(dependente)

    }
}
