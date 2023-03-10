import { Dependente } from "@prisma/client"
import { IcreatDependenteDto } from "./dto/create.dto"
import { IUpdateDependente } from "./dto/uptade.dto"

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository')
export interface IDependenteRepository{
    create(dependente: IcreatDependenteDto):Promise<void>
    update(dependenteId: string, dependente: IUpdateDependente):Promise<Dependente>
    disableDependente(dependenteId: string):Promise<void>
    enableDependente(dependenteId: string):Promise<void>
}