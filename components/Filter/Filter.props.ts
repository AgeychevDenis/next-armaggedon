import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface FilterProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   onDangerous: Function;
   onKm: Function;
   onLunar: Function;
   kmRange: Function;
   lunarRange: Function;
}