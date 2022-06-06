export enum ScryfallObject {
  CARD = 'card',
  CARD_FACE = 'card_face',
  ERROR = 'error',
  LIST = 'list',
}

export interface ScryfallError {
  code: string;
  details: string;
  object: ScryfallObject.ERROR;
  status: number;
  warnings: string[];
}

export interface ScryfallList {
  data: ScryfallCard[];
  has_more: boolean;
  next_page: string;
  object: ScryfallObject.LIST;
  total_cards: number;
}

export type ScryfallCard = {
  artist: string;
  id: string;
  name: string;
  object: ScryfallObject.CARD;
} & (
  | { card_faces?: never; colors: string[]; image_uris: { art_crop: string } }
  | { card_faces: ScryfallCardFace[]; colors?: never; image_uris?: never }
);

export interface ScryfallCardFace {
  colors: string[];
  image_uris: { art_crop: string };
  object: ScryfallObject.CARD_FACE;
}
