import { Card } from '@/tools/scryfall/interfaces/Card.model';
import type { CardModel } from '@/tools/scryfall/interfaces/Card.model';
import { ScryfallObject } from '@/tools/scryfall/interfaces/Scryfall.model';
import type {
  ScryfallError,
  ScryfallList,
} from '@/tools/scryfall/interfaces/Scryfall.model';

const SCRYFALL_SEARCH = 'https://api.scryfall.com/cards/search';

type Scry = (name: string) => Promise<CardModel[]>;

export const scry: Scry = async (name) => {
  const parameters = { q: name };
  const query: string = Object.entries(parameters)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  let cards: CardModel[] = [];
  const response = await fetch(`${SCRYFALL_SEARCH}?${query}`);
  const json = await response.json();
  if (json.object === ScryfallObject.LIST) {
    const list: ScryfallList = json;
    cards = list.data.map((card) => new Card(card));
  } else if (json.object === ScryfallObject.ERROR) {
    const error: ScryfallError = json;
    console.warn(error.details);
  } else {
    throw new Error(`[scryfall] Unrecognized '${json.object}' response type`);
  }
  return cards;
};
