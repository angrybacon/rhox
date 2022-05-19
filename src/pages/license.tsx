import type { NextPage } from 'next';
import { Card, CardContent } from '@mui/material';
import { Link } from '@/components/Link/Link';

const LicensePage: NextPage = () => (
  <Card component="section">
    <CardContent>
      <p>
        Rhox is unofficial <em>Magic: the Gathering</em> fan content permitted
        under the{' '}
        <Link href="https://company.wizards.com/en/legal/fancontentpolicy">
          Fan Content Policy
        </Link>
        . Portions of the materials used such as mana symbols and game mechanics
        are property of <em>Wizards of the Coast</em>. Card artworks are made
        available from the unaltered{' '}
        <Link href="https://scryfall.com/docs/api">Scryfall's API</Link> and are
        copyright <em>Wizards of the Coast</em> or their respective artists for
        older sets. For cropped artworks where the artist line of a card is not
        visible, the artists are mentioned in the accessible text.
      </p>
      <p>
        All original code for Rhox is available under the terms of the{' '}
        <Link href="https://github.com/angrybacon/rhox/blob/master/LICENSE.org">
          MIT license
        </Link>
        . It was made using <Link href="https://reactjs.org">React</Link> and{' '}
        <Link href="https://nextjs.org">Next.js</Link>. For more information
        about the underlying code, refer to the{' '}
        <Link href="https://github.com/angrybacon/rhox">GitHub repository</Link>
        .
      </p>
    </CardContent>
  </Card>
);

export default LicensePage;
