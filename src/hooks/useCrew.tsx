import { useState } from "react";
import crewData from "../data/crew.json";
import { type Crew } from "../types/customTypes";

export default function useCrew() {
  const crew: Crew[] = crewData;
  const [crewMember, setCrewMember] = useState<Crew>(crew[0]);

  const setCrewMemberByName = (name: string) => {
    const foundCrewMember: Crew | undefined = crew.find(
      (crewM) => crewM.name === name
    );
    if (foundCrewMember) {
      setCrewMember(foundCrewMember);
    }
  };

  return { crewMember, setCrewMemberByName };
}
