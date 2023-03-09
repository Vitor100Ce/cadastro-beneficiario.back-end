import { ApiPropertyOptional } from "@nestjs/swagger";
import { ModalidadeEnum, Prisma, SituacaoEnum } from "@prisma/client";

export class UptadeTitularDto implements Prisma.TitularUpdateInput{
    @ApiPropertyOptional()
    nome?: string
    @ApiPropertyOptional()
    modalidade?: ModalidadeEnum;
    @ApiPropertyOptional()
    situacao?: SituacaoEnum;
}