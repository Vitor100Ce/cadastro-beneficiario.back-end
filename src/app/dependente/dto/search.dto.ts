import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ModalidadeEnum, SituacaoEnum } from '@prisma/client'
import { IPaginate } from 'src/infra/interfaces/pagination.interface'


export interface ISearchDependente extends IPaginate {
    
    modalidade?: ModalidadeEnum
    situacao?: SituacaoEnum
    nome?: string
}

export class SearchDependenteDto implements ISearchDependente{

    @ApiPropertyOptional({enum: ModalidadeEnum})
    modalidade?: ModalidadeEnum

    @ApiPropertyOptional({enum: SituacaoEnum})
    situacao?: SituacaoEnum

    @ApiPropertyOptional()
    nome?: string

    @ApiProperty({example: 10})
    pageSize: number

    @ApiProperty({example: 0})
    pageIndex: number

}