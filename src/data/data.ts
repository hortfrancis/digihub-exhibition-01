type Relationship = {
  id: string;
  artwork: string; // Filename in `public/assets/artwork/`
  description: string;
  prompt?: string; // Optional prompt used to generate the artwork
}



const data: Relationship[] = [
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Screenshot_from_Silent_Hill_2_--raw_--stylize_50_--_8c243a88-b5bd-4bde-8435-e3840f662264.png',
    description: "Using Midjourney to create mock screenshots of videogames",
    prompt: "Screenshot from Silent Hill 2 --style raw --v 6.1 --stylize 50"
  },

];

export default data;