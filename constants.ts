import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Nights",
    category: "Music Video",
    thumbnailUrl: "https://picsum.photos/id/10/800/450",
    description: "A cyberpunk-inspired visual journey through the city streets at night, capturing the raw energy of the underground synth-wave scene.",
    client: "The Midnight Echo",
    year: "2023"
  },
  {
    id: 2,
    title: "Summit",
    category: "Documentary",
    thumbnailUrl: "https://picsum.photos/id/29/800/450",
    description: "Follow the harrowing journey of three alpinists as they attempt to conquer one of the most dangerous unclimbed peaks in the Andes.",
    client: "Nat Geo Wild",
    year: "2024"
  },
  {
    id: 3,
    title: "Velocity",
    category: "Automotive",
    thumbnailUrl: "https://picsum.photos/id/133/800/450",
    description: "High-octane commercial spot featuring the latest electric supercar. Filmed on location in the salt flats.",
    client: "Tesla Motors",
    year: "2023"
  },
  {
    id: 4,
    title: "Urban Flow",
    category: "Lifestyle",
    thumbnailUrl: "https://picsum.photos/id/91/800/450",
    description: "A kinetic exploration of parkour athletes moving through brutalist architecture.",
    client: "Red Bull",
    year: "2022"
  },
  {
    id: 5,
    title: "Essence",
    category: "Commercial",
    thumbnailUrl: "https://picsum.photos/id/64/800/450",
    description: "Luxury perfume commercial focusing on texture, light, and macro cinematography.",
    client: "Chanel",
    year: "2024"
  },
  {
    id: 6,
    title: "Echoes",
    category: "Short Film",
    thumbnailUrl: "https://picsum.photos/id/58/800/450",
    description: "An award-winning sci-fi short about memory and loss in a digital age.",
    client: "Independent",
    year: "2023"
  }
];

export const SYSTEM_INSTRUCTION = `
You are Lumina AI, the virtual production assistant for a high-end video production studio called 'Lumina'.
Your tone is professional, creative, and cinematic.
You are here to help potential clients understand our services, which include:
1. Commercial Cinematography (Starting at $5,000)
2. Music Video Production (Starting at $3,500)
3. Documentary Filmmaking
4. Post-Production & Color Grading

Key Equipment:
- Red Komodo X
- Sony FX3
- Cooke Cinema Lenses
- DaVinci Resolve Studio

If a user asks for a video concept, be extremely creative and describe visual scenes, lighting, and camera movements (dolly zoom, tracking shots, anamorphic flares).
Keep responses concise (under 100 words unless generating a concept).
`;