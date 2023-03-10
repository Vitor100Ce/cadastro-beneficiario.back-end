import { IDependenteRepository, DEPENDENTE_REPOSITORY } from "./dependente.repository";
import { Inject, Injectable } from '@nestjs/common'
import { IcreatDependenteDto } from "./dto/create.dto";
import { IUpdateDependente } from "./dto/uptade.dto";
import { ISearchDependente } from "./dto/search.dto";

@Injectable()
export class DependenteService{
    constructor(@Inject(DEPENDENTE_REPOSITORY)private dependente_repository: IDependenteRepository){

    }

    async create(dependente:IcreatDependenteDto){
        this.dependente_repository.create(dependente)

    }

    async update(dependenteId: string, dependente: IUpdateDependente){
        return this.dependente_repository.update(dependenteId, dependente)
    }


    async disableDependente(dependenteId: string){
        this.dependente_repository.disableDependente(dependenteId)
    }

    async enableDependente(dependenteId: string){
        this.dependente_repository.enableDependente(dependenteId)
    }

    async search(filter: ISearchDependente){
        return this.dependente_repository.search(filter)
    }

    async getTitularById(dependenteId: string){
        return this.dependente_repository.getDependenteById(dependenteId)
    }

}
