import { useEffect, useState } from "react";

import { albumService } from "../../services/albumService";
import { Album } from "./Album/Album";

const AlbumComponent = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    try {
      albumService.getAll().then(({ data }) => setAlbums(data));
    } catch {}
  }, []);
  return (
    <div>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export { AlbumComponent };
