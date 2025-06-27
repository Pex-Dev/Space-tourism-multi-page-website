import { useState } from "react";
import destinationData from "../data/destination.json";
import { type Destination } from "../types/customTypes";

export default function useDestination() {
  const destinations: Destination[] = destinationData;
  const [destination, setDestination] = useState<Destination>(destinations[0]);

  const setDestinationByName = (name: string) => {
    const foundDestination: Destination | undefined = destinations.find(
      (destination) => destination.name === name
    );
    if (foundDestination) {
      setDestination(foundDestination);
    }
  };

  return { destination, setDestination, setDestinationByName };
}
