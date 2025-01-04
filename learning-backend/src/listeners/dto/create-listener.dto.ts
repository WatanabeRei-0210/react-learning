import { ApiProperty } from '@nestjs/swagger';

export class CreateListenerDto {
  @ApiProperty({ description: 'リスナー名', example: 'Raira' })
  name: string;

  @ApiProperty({ description: 'カテゴリ', example: 'モンハン' })
  category: string;

  @ApiProperty({ description: '説明', example: 'ロボット' })
  description: string;
}
