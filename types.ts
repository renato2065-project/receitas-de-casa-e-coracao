export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  prepTime: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string[];
  story?: string;
  ingredients?: string[];
  steps?: string[];
  tips?: string[];
  servings?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
}