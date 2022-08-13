import { HtmlHTMLAttributes, DetailedHTMLProps } from "react";
import { ProductModel } from "../../interfaces/product.interface";

export interface ProductProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   data: ProductModel
}