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
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Gooey_--stylize_50_--v_6_31bfff2e-5158-4249-b4da-bee91f289e4c.png',
    description: "Gooey ... (Midjourney)",
    prompt: "Gooey --stylize 50 --v 6"
  },


];

export default data;