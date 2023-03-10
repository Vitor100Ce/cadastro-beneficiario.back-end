import { Injectable } from "@nestjs/common/decorators";
import { ITitularRepository } from "src/app/titular/titular.repository";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Prisma, Titular } from "@prisma/client"

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
        await this.prisma.titular.update({where: {id:titularId}, data:{cancelamento: new Date()}})
    }

    async enableTitular(titularId: string): Promise<void> {
        await this.prisma.titular.update({where: {id:titularId}, data:{cancelamento: null}})
    }


}