import img1 from '../assets/art/Broadcast_the_Season.png';
import img2 from '../assets/art/Distribution_in_Progress.png';
import img3 from '../assets/art/Hold_the_Signal.png';
import img4 from '../assets/art/Load_Bearing_Winter.png';
import img5 from '../assets/art/Payload_in_Motion.png';
import img6 from '../assets/art/Silent_Compression.png';

export interface Artwork {
  id: number;
  title: string;
  image: string;
  year: string;
  type: string;
}

export const ARTWORKS: Artwork[] = [
  { 
    id: 1, 
    title: 'Broadcast the Season', 
    image: img1, 
    year: '2024',
    type: 'TRANSMISSION'
  },
  { 
    id: 2, 
    title: 'Distribution in Progress', 
    image: img2, 
    year: '2024',
    type: 'LOGISTICS'
  },
  { 
    id: 3, 
    title: 'Hold the Signal', 
    image: img3, 
    year: '2024',
    type: 'INTERCEPT'
  },
  { 
    id: 4, 
    title: 'Load Bearing Winter', 
    image: img4, 
    year: '2024',
    type: 'STRUCTURAL'
  },
  { 
    id: 5, 
    title: 'Payload in Motion', 
    image: img5, 
    year: '2024',
    type: 'KINETIC'
  },
  { 
    id: 6, 
    title: 'Silent Compression', 
    image: img6, 
    year: '2024',
    type: 'ARCHIVAL'
  },
];
