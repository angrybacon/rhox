import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import { Preview } from '@/components/Preview/Preview';
import { Wizard } from '@/components/Wizard/Wizard';
import { useDebounce } from '@/tools/hooks/useDebounce';
import type { CardModel } from '@/tools/scryfall/interfaces/Card.model';
import { scry } from '@/tools/scryfall/scry';

const CreatePage: NextPage = () => {
  const [card, setCard] = useState<CardModel>();
  const [cards, setCards] = useState<CardModel[]>([]);
  const [input, setInput] = useState('Doomsday Specter');
  const query = useDebounce(input, 250);

  const onInput = (_event: SyntheticEvent, value: string) => setInput(value);

  const onSelect = (_event: SyntheticEvent, value: CardModel) => setCard(value);

  useEffect(() => {
    if (query.length > 0) {
      scry(query).then((cards) => setCards(cards));
    }
  }, [query]);

  return (
    <Card component="section">
      <CardContent sx={{ display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Wizard
              card={card}
              cards={cards}
              onInput={onInput}
              onSelect={onSelect}
            />
          </Grid>
          <Grid item xs={4}>
            <Preview card={card} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CreatePage;
