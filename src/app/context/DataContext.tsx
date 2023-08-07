// DataContext.tsx
import { createContext } from 'react';

interface ChildrenData {
  empresa: string;
  rol: string;
  fecha: string;
  proceso: string;
  link: string;
  
}

export const DataContext = createContext<ChildrenData[] | null>(null);
