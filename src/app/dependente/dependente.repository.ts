import { IcreatDependenteDto } from "./dto/create.dto"

export const DEPENDENTE_REPOSITORY = Symbol('dependente_repository')
export interface IDependenteRepository{
    create(dependente: IcreatDependenteDto):Promise<void>
}