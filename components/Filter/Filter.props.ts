import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   onDangerous: void;
   onKm: void;
   onLunar: void;
   kmRange: void;
   lunarRange: void;
}