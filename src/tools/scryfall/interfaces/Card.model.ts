import type { Color } from '@/tools/game/interfaces/Color.model';
import type { ScryfallCard } from '@/tools/scryfall/interfaces/Scryfall.model';

export class Card implements CardModel {
  art: string;
  artist: string;
  colors: Color[];
  id: string;
  name: string;

  constructor(card: ScryfallCard) {
    const data =
      card.card_faces !== undefined ? { ...card, ...card.card_faces[0] } : card;
    this.art = data.image_uris.art_crop;
    this.artist = data.artist;
    this.colors = data.colors as Color[];
    this.id = data.id;
    this.name = data.name;
  }
}

export interface CardModel {
  art: string;
  artist: string;
  colors: Color[];
  id: string;
  name: string;
}
