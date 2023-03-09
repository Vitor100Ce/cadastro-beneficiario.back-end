import { Injectable } from "@nestjs/common/decorators";
import { IDependenteRepository } from "src/app/dependente/dependente.repository";
import { PrismaService } from "src/infra/prisma/prisma.service";
import {IcreatDependenteDto } from "src/app/dependente/dto/create.dto"


@Injectable()
export class PrismaDependenteRepository implements IDependenteRepository{
    constructor(private prisma: PrismaService){

    }

    async create(dependente: IcreatDependenteDto):Promise<void>{
        await this.prisma.dependente.create({data: {
            adesao: dependente.adesao,
            modalidade: dependente.modalidade,
            nome: dependente.nome,
            situacao: dependente.situacao,
            titular: {connect:{id:dependente.titularId}}
        }})
        
    }
}