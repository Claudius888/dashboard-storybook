import { LucideProps } from "lucide-react";
import { HTMLProps } from "react";

export type ListItemdataProps = {
  title: string;
  subtitle?: string;
  Icon: React.FC<LucideProps> | string;
};

export type classnameProp = HTMLProps<HTMLElement>['className']

export type ListItemWrapperdataProps = ListItemdataProps[]
