import {ProductsType} from './productsType'

export type CategoryType = {
  id:number,
  name: string;
  products?:ProductsType[]
};
