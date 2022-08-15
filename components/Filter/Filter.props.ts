import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   onDangerous: boolean;
   onKm: void;
   onLunar: void;
}