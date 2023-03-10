import { Dependente } from "@prisma/client"
import { IPagination } from "src/infra/interfaces/pagination.interface"
import { IcreatDependenteDto } from "./dto/create.dto"
import { ISearchDependente } from "./dto/search.dto"
import { IUpdateDependente } from "./dto/uptade.dto"

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository')
export interface IDependenteRepository{
    create(dependente: IcreatDependenteDto):Promise<void>
    update(dependenteId: string, dependente: IUpdateDependente):Promise<Dependente>
    disableDependente(dependenteId: string):Promise<void>
    enableDependente(dependenteId: string):Promise<void>
    search(filter: ISearchDependente):Promise<IPagination<Dependente>>
    getDependenteById(dependenteId: string):Promise<Dependente>
}