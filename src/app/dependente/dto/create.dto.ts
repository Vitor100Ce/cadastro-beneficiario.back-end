import { Prisma, ModalidadeEnum, SituacaoEnum } from "@prisma/client"
import {ApiProperty} from "@nestjs/swagger"


export interface IcreatDependenteDto{
    nome: string,
    situacao: SituacaoEnum,
    modalidade: ModalidadeEnum,
    adesao: Date,
    titularId: string
}


export class CreatDependenteDto implements IcreatDependenteDto{
    @ApiProperty()
    nome: string
    @ApiProperty({example: SituacaoEnum.ativo})
    situacao: SituacaoEnum
    @ApiProperty({example: ModalidadeEnum.coparticipacao})
    modalidade: ModalidadeEnum
    @ApiProperty()
    adesao: Date
    @ApiProperty()
    data: Date
    @ApiProperty()
    titularId: string
}