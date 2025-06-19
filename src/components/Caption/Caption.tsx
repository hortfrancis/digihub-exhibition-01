import './Caption.css';

interface CaptionProps {
  description: string;
  prompt?: string; // Optional prop for the prompt text
}

export default function Caption({
  description,
  prompt
}: CaptionProps) {
  return (
    <div className='Caption'>
      <div className='description'>
        {description}
      </div>
      <div className='prompt'>
        {prompt}
      </div>
    </div >
  );
}