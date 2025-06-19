import './Artwork.css';

interface ArtworkProps {
  filename: string;
};

export default function Artwork({
  filename,
}: ArtworkProps) {

  return (
    <div className='Artwork'>
      <div className='image-container'>
        <img
          src={`/artwork/${filename}`}
          alt={filename}
          className='Artwork-image'
        />
      </div>
    </div>
  );
}