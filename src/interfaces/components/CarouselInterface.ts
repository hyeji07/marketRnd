export namespace CarouselInterface {
  export interface SwiperItemInterface {
    url: string;
    title: string;
    percent?: number;
    price: number;
    discountPrice?: number;
    review?: number;
    marker?: string;
    soldout?: boolean;
  }
  export interface SwiperItemsInterface {
    items: SwiperItemInterface[];
  }
}
