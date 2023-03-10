import { Injectable } from "@nestjs/common/decorators";
import { IDependenteRepository } from "src/app/dependente/dependente.repository";
import { PrismaService } from "src/infra/prisma/prisma.service";
import {IcreatDependenteDto } from "src/app/dependente/dto/create.dto"
import { Dependente, SituacaoEnum } from "@prisma/client";
import { IUpdateDependente } from 'src/app/dependente/dto/uptade.dto'


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

    async update(dependenteId: string, dependente: IUpdateDependente):Promise<Dependente>{
        return await this.prisma.dependente.update({where: {id:dependenteId}, data: dependente})
    }

    async disableDependente(dependenteId: string): Promise<void> {
        await this.prisma.dependente.update({where: {id:dependenteId}, data:{cancelamento: new Date(), situacao: SituacaoEnum.inativo}})
    }

    async enableDependente(dependenteId: string): Promise<void> {
        await this.prisma.dependente.update({where: {id:dependenteId}, data:{cancelamento: null, situacao: SituacaoEnum.ativo}})
    }
}