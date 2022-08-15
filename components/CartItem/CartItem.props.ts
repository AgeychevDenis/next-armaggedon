import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface CartItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data: {
      name: string;
      date: string;
      distance: number;
      size: number;
      danger: boolean;
      id: string;
      checked: boolean;
   }
}
