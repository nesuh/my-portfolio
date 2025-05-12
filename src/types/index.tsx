export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export interface Service {
    icon: React.ReactNode
    title: string
    detail: string
  }