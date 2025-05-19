import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import { useState } from 'react';

const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY!);

export function GifPicker({ onSelect }: { onSelect: (url: string) => void }) {
  const [search, setSearch] = useState<string>('');

  const fetchGifs = (offset: number) => gf.search(search, { offset, limit: 10, rating: 'pg' });

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Rechercher un GIF"
        className="p-2 border mb-2 rounded w-full"
      />
      <Grid
        columns={3}
        gutter={6}
        width={360}
        fetchGifs={fetchGifs}
        onGifClick={(gif, e) => {
          e.preventDefault();
          onSelect(gif.images.fixed_width.url);
        }}
      />
    </div>
  );
}
