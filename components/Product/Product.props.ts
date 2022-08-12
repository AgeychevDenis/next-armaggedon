import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";
import { ProductModel } from "../../interfaces/product.interfaces";

export interface ProductProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   product?: ProductModel;
}