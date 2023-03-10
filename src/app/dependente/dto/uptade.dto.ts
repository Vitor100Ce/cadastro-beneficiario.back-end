import { ApiPropertyOptional } from "@nestjs/swagger"
import { ModalidadeEnum, SituacaoEnum } from "@prisma/client"


export interface IUpdateDependente{
    nome?: string
    situacao?: SituacaoEnum
    modalidade?: ModalidadeEnum
    titularId?: string
}

export class UpdateDependenteDto implements IUpdateDependente{
    @ApiPropertyOptional()
    nome?: string
    
    @ApiPropertyOptional()
    situacao?: SituacaoEnum
    
    @ApiPropertyOptional()
    modalidade?: ModalidadeEnum
    
    @ApiPropertyOptional()
    titularId?: string

}