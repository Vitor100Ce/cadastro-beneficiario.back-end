import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ModalidadeEnum, SituacaoEnum } from '@prisma/client'
import { IPaginate } from 'src/infra/interfaces/pagination.interface'


export interface ISearchTitular extends IPaginate {
    
    modalidade?: ModalidadeEnum
    situacao?: SituacaoEnum
    nome?: string
}

export class SearchTitularDto implements ISearchTitular{

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