import type { FunctionComponent, SyntheticEvent } from 'react';
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import { Color } from '@/tools/game/interfaces/Color.model';
import type { CardModel } from '@/tools/scryfall/interfaces/Card.model';

const COLOR_SELECTORS: [Color, string][] = [
  [Color.WHITE, 'White'],
  [Color.BLUE, 'Blue'],
  [Color.BLACK, 'Black'],
  [Color.RED, 'Red'],
  [Color.GREEN, 'Green'],
];

interface Props {
  card?: CardModel;
  cards: CardModel[];
  onInput: (event: SyntheticEvent, value: string) => void;
  onSelect: (event: SyntheticEvent, value: CardModel) => void;
}

export const Wizard: FunctionComponent<Props> = ({
  card,
  cards,
  onInput,
  onSelect,
}) => (
  <Box sx={{ '& > :not(:first-child)': { mt: 2 } }}>
    <Autocomplete
      autoComplete
      componentsProps={{ paper: { sx: { borderRadius: '4px!important' } } }}
      disableClearable
      disableListWrap
      disablePortal
      filterSelectedOptions
      getOptionLabel={(option) => option.name}
      onInputChange={onInput}
      onChange={onSelect}
      options={card ? [card, ...cards] : cards}
      renderInput={(extra) => (
        <TextField {...extra} label="Name" variant="filled" />
      )}
      size="small"
      sx={{ mb: 1 }}
    />
    <FormGroup row>
      {COLOR_SELECTORS.map(([value, label]) => (
        <FormControlLabel
          checked={!!card?.colors.includes(value)}
          control={<Checkbox disabled={!card} />}
          key={value}
          label={label}
          value={value}
        />
      ))}
    </FormGroup>
  </Box>
);
