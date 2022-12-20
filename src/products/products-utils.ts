/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from './interfaces/IProduct';

export function normalizeProduct(product: IProduct) {
  return {
    ...product,
    variants: (product.variants as any).nodes,
    images: (product.images as any).nodes,
  };
}

export function normalizeProductList(products: IProduct[]) {
  return products.map((product: any) => normalizeProduct(product));
}
