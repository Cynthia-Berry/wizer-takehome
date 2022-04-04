export interface Book {
  id: string;
  categoryId: string;
  title: string;
  name: string;
  imageUrl: string;
  description: string;
  isFavorite: boolean;
  favorite: boolean;
  createdAt: Date;
}
