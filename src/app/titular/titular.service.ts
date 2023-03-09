import { ITitularRepository, TITULAR_REPOSITORY } from "./titular.repository";
import { Inject, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class TitularService{
    constructor(@Inject(TITULAR_REPOSITORY)private titular_repository: ITitularRepository){

    }

    async create(titular:Prisma.TitularCreateInput){
        this.titular_repository.create(titular)

    }
}

