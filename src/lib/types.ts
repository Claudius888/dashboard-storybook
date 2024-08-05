export type ListItemdataProps = {
  title: string;
  subtitle?: string;
  Icon: React.FC | string;
};

// export type classnameProp = HTMLProps<HTMLElement>['className']

export type ListItemWrapperdataProps = ListItemdataProps[]
