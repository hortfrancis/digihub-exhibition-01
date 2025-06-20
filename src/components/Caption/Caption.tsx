import './Caption.css';

interface CaptionProps {
  description: string;
  prompts?: string[];
}

export default function Caption({
  description,
  prompts = [],
}: CaptionProps) {
  return (
    <div className='Caption'>
      <div className='description'>
        {description}
      </div>
      <div className='prompts'>
        {prompts.map((prompt, index) => (
          <div key={index} className='prompt-item'>
            {prompt}
          </div>
        ))}
      </div>
    </div >
  );
}