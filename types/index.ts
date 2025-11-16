export interface Event {
  id: number;
  name: string;
  type: string;
  date: string;
  location?: string;
  poster?: string;
  tagline?: string;
  description?: string;
  past?: boolean;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  linkedin_url: string;
  email: string;
}

export interface Colloquium {
  id: number;
  name: string;
  speaker?: string;
  abstract: string;
  date: string;
  speakerBio?: string;
  references?: string[];
}
