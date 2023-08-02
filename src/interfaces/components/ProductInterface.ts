export namespace ProductInterface {
  export interface ItemInterface {
    url: string;
    title: string;
    percent?: number;
    price: number;
    discountPrice?: number;
    review?: number;
    marker?: string;
    // soldout?: boolean;
    delivery?: string;
    subTitle?: string;
    seller?: string;
    packaging?: string;
    unit?: string;
    weight?: string;
    origin?: string;
    allergy?: string;
    sellByDate?: string;
  }
  export interface ItemsInterface {
    items: ItemInterface[];
  }
}
