export type BorderStyleType = 'solid' | 'dashed'| 'dotted';

interface IBorder {
  borderStyle: BorderStyleType;
  borderWidth: number;
  borderColor: string;
}
