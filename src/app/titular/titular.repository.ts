import { Prisma, Titular } from "@prisma/client"

export const TITULAR_REPOSITORY = Symbol('titular_repository')
export interface ITitularRepository{
    create(titular: Prisma.TitularCreateInput):Promise<void>
    update(titularId: string, titular: Prisma.TitularUpdateInput):Promise<Titular>
    disableTitular(titularId: string):Promise<void>
}