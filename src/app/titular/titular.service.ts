import { ITitularRepository, TITULAR_REPOSITORY } from "./titular.repository";
import { Inject, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ISearchTitular } from "./dto/search.dto";

@Injectable()
export class TitularService{
    constructor(@Inject(TITULAR_REPOSITORY)private titular_repository: ITitularRepository){

    }

    async create(titular:Prisma.TitularCreateInput){
        this.titular_repository.create(titular)

    }

    async update(titularId: string, titular: Prisma.TitularUpdateInput){
        return this.titular_repository.update(titularId, titular)
    }

    async disableTitular(titularId: string){
        this.titular_repository.disableTitular(titularId)
    }

    async enableTitular(titularId: string){
        this.titular_repository.enableTitular(titularId)
    }

    async search(filter: ISearchTitular){
        return this.titular_repository.search(filter)
    }

    async getTitularById(titularId: string){
        return this.titular_repository.getTitularById(titularId)
    }

}
