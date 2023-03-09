import { Prisma, ModalidadeEnum, SituacaoEnum } from "@prisma/client"
import {ApiProperty} from "@nestjs/swagger"


export class CreatTitularDto implements Prisma.TitularCreateInput{
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

}