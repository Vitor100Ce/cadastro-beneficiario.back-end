import { Prisma, Titular } from "@prisma/client"
import { IPagination } from "src/infra/interfaces/pagination.interface"
import { ISearchTitular } from "./dto/search.dto"

export const TITULAR_REPOSITORY = Symbol('titular_repository')
export interface ITitularRepository{
    create(titular: Prisma.TitularCreateInput):Promise<void>
    update(titularId: string, titular: Prisma.TitularUpdateInput):Promise<Titular>
    disableTitular(titularId: string):Promise<void>
    enableTitular(titularId: string):Promise<void>
    search(filter: ISearchTitular):Promise<IPagination<Titular>>
    getTitularById(titularId: string):Promise<Titular>
}
