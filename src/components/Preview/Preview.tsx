import { useEffect, useRef, useState } from 'react';
import type { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import { Color } from '@/tools/game/interfaces/Color.model';
import { Frame } from '@/tools/game/interfaces/Frame.model';
import { useSize } from '@/tools/hooks/useSize';
import type { CardModel } from '@/tools/scryfall/interfaces/Card.model';

const COLOR_TO_FRAME: Record<Color, Frame> = {
  [Color.WHITE]: Frame.WHITE,
  [Color.BLUE]: Frame.BLUE,
  [Color.BLACK]: Frame.BLACK,
  [Color.RED]: Frame.RED,
  [Color.GREEN]: Frame.GREEN,
};

interface Props {
  card?: CardModel;
}

export const Preview: FunctionComponent<Props> = ({ card }) => {
  const root = useRef<HTMLDivElement>(null);
  const { height, width } = useSize(root);
  let frame: Frame = Frame.BACK;

  switch (card?.colors.length) {
    case undefined:
      frame = Frame.BACK;
      break;
    case 0:
      frame = Frame.ARTIFACT;
      break;
    case 1:
      frame = COLOR_TO_FRAME[card.colors[0]];
      break;
    default:
      frame = Frame.GOLD;
  }

  useEffect(() => {
    console.log(width, height);
  }, [height, width]);

  return (
    <Box
      ref={root}
      sx={{ aspectRatio: '5 / 7', position: 'relative' }}
      title={card?.name}
    >
      {card && (
        <Box
          sx={{
            backgroundImage: `url(${card.art})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            bottom: '45%',
            left: '11%',
            position: 'absolute',
            top: '9%',
            right: '11%',
          }}
        />
      )}
      <Box
        sx={{
          backgroundImage: `url(${frame})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
          position: 'absolute',
          width: '100%',
        }}
      />
      {card && (
        <Box
          component="svg"
          sx={{
            fill: '#EFE9E4',
            fontSize: '24%',
            left: '11%',
            position: 'absolute',
            right: '11%',
            top: '4%',
          }}
          viewBox="0 0 60 5"
        >
          <Box
            component="text"
            dominantBaseline="middle"
            fontFamily="GoudyMedieval"
            sx={{ textShadow: '1px 1px 1px rgb(0 0 0/ 0.8)' }}
            x="0"
            y="55%"
          >
            {card.name}
          </Box>
        </Box>
      )}
    </Box>
  );
};
