type Relationship = {
  id: string;
  artwork: string; // Filename in `public/assets/artwork/`
  description: string;
  prompts?: string[]; // Optional prompts used to generate the artwork
}



const data: Relationship[] = [
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Suprematism_Brutalism_geometric_glitch_art_bright_36a7e07c-86e6-43c7-b6c1-31998a770ea7_0.png',
    description: "A kind of metamodern Suprematism? (Midjourney)",
    prompts: [
      `Suprematism, Brutalism, geometric glitch art, bright, garish, vibrant. --v 5.2`
    ]
  },

  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Gooey_--stylize_50_--v_6_31bfff2e-5158-4249-b4da-bee91f289e4c.png',
    description: "Gooey ... (Midjourney)",
    prompts: ["Gooey --stylize 50 --v 6"]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'assets_task_01jrdmb74jfwzvq9zyh07weq8p_img_0.webp',
    description: "Urgh, what's that? Midjourney + upscaled with gpt-image-1",
    prompts: [
      "Octopus squid grasshopper, Lovecraft. --v 5.2 --stylize 50 --style raw",
      "Hey, take a look at this cheeky chappy! :O Can I see a high quality, photorealistic image of him?"
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'assets_task_01jrb8pe0mejzva2dwdx0e7n94_img_0.webp',
    description: "Upscaling Midjourney fashion generations with gpt-image-1",
    prompts: [
      `Fashion: "flight suit" "power suit" punk goth neon industrial astro tech soviet 1980s. --v 5.2 --stylize 50 --style raw`,
      "Can you tidy up this character design from Midjourney, which has artefacts. The character description is: ...",
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'assets_task_01jrbbgqbdfyxa9k8wxhy1a81j_img_0.webp',
    description: "Character design: they live on a space station. She is a gangster. Midjourney + gpt-image-1",
    prompts: [
      `Fashion: "lounge suit" feminism, anarchist punk, chintz neon red. --v 5.2 --stylize 50 --style raw`,
      `This is an image from Midjourney. I want you to tidy up the artefacts. The image I would like from you, from this image, is part of a fictional photojournalism series about life on orbital habitations in a sci-fi fusion punk setting. ...`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: '457561047_1751023048969931_4454549298937477583_n.jpg',
    description: "Experimenting with Comfy UI, in OpenArt. Suprematism, Constructivism, Abstract Expressionism..",
  },
  {
    id: crypto.randomUUID(),
    artwork: '457612919_1054700659589869_1522758849766076460_n.jpg',
    description: "Experimenting with Comfy UI, in OpenArt. Abstract Expressionism",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'Lily Fractasm (download from Prodigi).webp',
    description: "Midjourney blends + OpenArt creative upscaler -- print ready!",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis__9d804b30-f18d-4052-b673-b99e5ba9633f.webp',
    description: "Midjourney blends to create interesting textures. You can see inside the model's braiiiins...",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis__f085cc5e-790e-4202-b705-ab9f9b8b468e.webp',
    description: "It likes organic shapes. Post-scarcity of weird spikey things..."
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis__0303fd93-0823-40f4-9b54-cba033186f58.webp',
    description: "More Midjourney blends ... Grinning Steadman Haring void goblins.",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Non-euclidean_axonometric_48fd0b5c-d422-4c15-a8e3-18becf2e5e8d.webp',
    description: "Isometric vintage structures -- Midjourney",
    prompts: ["Non-euclidean axonometric --s 50"]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'battlecrab-01.png',
    description: "Techno battlecrabs of the future (Midjourney)",
    prompts: [`Illustration: tank crab insect robot, Lovecraft "Warhammer 40K", cyber solarpunk astro. --v 5.2 --stylize 50 --style raw`]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'broccoli-01.png',
    description: "Experiments in post-scarcity of detail (Midjourney)",
    prompts: [`A surreal metamorphic landscape where vitreous blobs of vibrant emerald green transform into precise typographic forms, flowing like waves across a minimalist white canvas. ...`]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Fractal_double_exposure_mechanical_tech_future_86bd4451-6f91-4b46-acc4-3f5665ebbc91.webp',
    description: "Keyword research in Midjourney",
    prompts: [
      `Fractal double exposure: mechanical tech future --s 50 --v 7.0`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis__9fb30766-1f56-4d3c-8c32-6a6a1cf60eb5.webp',
    description: "Midjourney blends to create interesting relationships of pixel patterns..",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis__43df5dfd-f5a2-4a24-bc97-322d40c9b11a.webp',
    description: "It certainly draws the eye ... (More Midjourney blends)",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_A_black_and_white_vintage_photograph_of_an_architec_8956b7c6-406a-472c-a5f3-0e2e214b437a.png',
    description: "Genertive photography (Midjourney)",
    prompts: [
      `A black and white vintage photograph of an architectural space that is an underground parking garage made out of concrete slabs with two rows of columns in the middle, designed in the style of Louis Kahn, featuring brutalist architecture and minimalism. --ar 70:71 --style raw --stylize 50 --v 6.1`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Harbour_with_brutalist_monolith_soaks_evening_lig_3349d387-184b-4d88-b28e-34ae4619a29e_3.png',
    description: "Oil painting 'brushstrokes' (Midjourney). Capturing light was always important ..",
    prompts: [
      `Harbour with brutalist monolith soaks evening light --v 6 --stylize 50`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Screenshot_from_Silent_Hill_2_--raw_--stylize_50_--_8c243a88-b5bd-4bde-8435-e3840f662264.png',
    description: "Using Midjourney to create mock screenshots of videogames",
    prompts: ["Screenshot from Silent Hill 2 --style raw --v 6.1 --stylize 50"]
  },
  {
    id: crypto.randomUUID(),
    artwork: '20250415_2320_Suprematist System Monitor_remix_01jrxrjd0heypb4p975wpvykzz.png',
    description: "Redesigning user interfaces: gpt-image-1",
    prompts: [
      `btop CLI, with a Suprematist aesthetic.`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'assets_task_01jqm13pg2e23vy44sy2zmbenc_img_0.webp',
    description: "Typographical investigations now eminently possible! gpt-image-1",
    prompts: [
      `The words "DON'T TRY NOW" in a striking, creative typeface. Image macro meme.`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: '20250330_1622_Image Generation_remix_01jqktam4bfmjssswv4qewpvxn.png',
    description: "Modern generative portraits of famous historical figures (gpt-image-1)",
    prompts: [
      `A painting of Thomas Cromwell, of the court of Henry VIII`,
      `Make him a cool rapper `,
      `Change the hat text to say "Cromwell"`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Neon_glitch_brutalism_--v_5.2_9fcb48a9-ae40-4e41-bf4b-8bdf469d05b0_3.png',
    description: "Architectural illustrations ... (Midjourney)",
    prompts: [
      `Neon glitch brutalism --v 5.2`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Fashion_jumpsuit_technical_astro_grunge_industrial__18facefb-6f4f-420e-b34e-2b96b1b6813b.png',
    description: "Generative fashion design (Midjourney)",
    prompts: [
      `Fashion: jumpsuit, technical astro grunge industrial, chintz floral, 1980s, vaporwave. --v 5.2 --stylize 50`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_httpss.mj.runQPfjxWkK6pA_httpss.mj.runWoRgiMlZteA_-_d3f44d7f-0ed1-41ad-bb28-e3006a186b72.png',
    description: "Midjourney blend, in response to the Ayahuasca exhibit at the Sainsbury Centre",
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Man_working_--oref_httpss.mj.runDVgKGSbB8rE_--ow__59bbff49-e226-4e76-ab8f-82417f966806_1.png',
    description: "Generative self-portrait, using Midjourney's Omni Reference mode",
    prompts: [
      `Man working --ow 900 --v 7`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_isometric_Kandinsky_--stylize_50_--v_6_d3c485bb-d42f-4962-9430-1c61b6cc53ec.png',
    description: "More potential wall art ... (Midjourney)",
    prompts: [
      `isometric Kandinsky --v 6 --stylize 50`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_batik_glitch_--stylize_50_--v_6_5eab17e7-8a7f-47c9-bf79-7f6505c2554f.png',
    description: "Generative glitch-work shows the model's innards (Midjourney)",
    prompts: [
      `batik glitch --v 6 --stylize 50`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_Fashion_power_suit_feminism_floral_chintz_goth_punk_deccb070-a717-41a3-b460-3e387fe15493.png',
    description: "More fashion design with Midjourney",
    prompts: [
      `Fashion: "power suit", feminism, floral chintz, goth punk, neon, 1990s. --v 5.2 --stylize 50 --style raw`
    ]
  },
  {
    id: crypto.randomUUID(),
    artwork: 'hortfrancis_httpss.mj.runMRp4xgasnMg_httpss.mj.runqaCldjGMm1s_-_934414d1-ccc5-43fa-ae78-7a8b49ecb0a7.png',
    description: "Midjourney blends to create layering in the image composition",
  }
];

export default data;
