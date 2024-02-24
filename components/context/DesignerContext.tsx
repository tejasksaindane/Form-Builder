"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { FormElementInstance } from "../FormElements";

type DesignerContextType = {
  elements: FormElementInstance[];
  // setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
  addElement: (index: number, element: FormElementInstance) => void;
  removeElement: (id: String) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: String) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <DesignerContext.Provider value={{ elements, addElement, removeElement }}>
      {children}
    </DesignerContext.Provider>
  );
}
