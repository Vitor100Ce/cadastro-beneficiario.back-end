import { Injectable } from "@nestjs/common/decorators";
import { ITitularRepository } from "src/app/titular/titular.repository";
import { PrismaService } from "src/infra/prisma/prisma.service";
import { Prisma } from "@prisma/client"

@Injectable()
export class PrismaTitularRepository implements ITitularRepository{
    constructor(private prisma: PrismaService){

    }

    async create(titular: Prisma.TitularCreateInput):Promise<void>{
        await this.prisma.titular.create({data: titular})
        
    }
}