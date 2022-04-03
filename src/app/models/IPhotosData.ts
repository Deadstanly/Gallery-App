export interface IPhotosData {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: {
      url_m: string;
    }[],
    total: number;
  }
}
