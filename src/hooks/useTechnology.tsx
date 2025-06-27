import { useState } from "react";
import { type Technology } from "../types/customTypes";
import technologyData from "../data/technology.json";

export default function useTechnology() {
  const technologyList: Technology[] = technologyData;
  const [technology, setTechnology] = useState<Technology>(technologyList[0]);

  const setTechnologyByName = (name: string) => {
    const foundTechnology: Technology | undefined = technologyList.find(
      (tech) => tech.name === name
    );
    if (foundTechnology) {
      setTechnology(foundTechnology);
    }
  };

  return { technology, setTechnologyByName };
}
