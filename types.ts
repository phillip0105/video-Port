export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  client: string;
  year: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ModalState {
  CLOSED,
  OPEN
}