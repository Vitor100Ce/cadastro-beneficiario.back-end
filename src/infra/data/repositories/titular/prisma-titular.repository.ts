import { Injectable } from "@nestjs/common/decorators";
import { ITitularRepository } from "src/app/titular/titular.repository";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Prisma, SituacaoEnum, Titular } from "@prisma/client"
import { ISearchTitular } from "src/app/titular/dto/search.dto";
import { IPagination } from "src/infra/interfaces/pagination.interface";
import { filter } from "rxjs";

@Injectable()
export class PrismaTitularRepository implements ITitularRepository{
    constructor(private prisma: PrismaService){

    }

    async create(titular: Prisma.TitularCreateInput):Promise<void>{
        await this.prisma.titular.create({data: titular})
        
    }

    async update(titularId: string, titular: Prisma.TitularUpdateInput): Promise<Titular> {
        return await this.prisma.titular.update({where: {id:titularId}, data: titular})
    }


    async disableTitular(titularId: string): Promise<void> {
        await this.prisma.titular.update({where: {id:titularId}, data:{cancelamento: new Date(), situacao: SituacaoEnum.inativo}})
    }

    async enableTitular(titularId: string): Promise<void> {
        await this.prisma.titular.update({where: {id:titularId}, data:{cancelamento: null, situacao: SituacaoEnum.ativo}})
    }


    async getTitularById(titularId: string): Promise<Titular> {
        return await this.prisma.titular.findUnique({where: {id:titularId}})
        
    }



    async search({pageIndex, pageSize, ...filter}: ISearchTitular): Promise<IPagination<Titular>> {
        const prismaFilter: Omit<ISearchTitular, 'pageIndex'|'pageSize'> = filter
        const skip: number = pageIndex * pageSize
        const [titulares, totalCount] = await Promise.all([
            this.prisma.titular.findMany({
                where: prismaFilter,
                skip,
                take: Number(pageSize)

            }),
            this.prisma.titular.count({
                where: prismaFilter,
            })
        ])

        return {
            itens: titulares,
            totalCount
        }

    }

}