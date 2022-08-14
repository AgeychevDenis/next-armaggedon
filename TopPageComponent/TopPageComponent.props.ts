import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";

export interface TopPageComponentProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   nearEarth: [];
   onDangerous: any;
}