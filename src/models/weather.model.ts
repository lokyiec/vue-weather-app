import { Temperature } from "../utils/temperature-converter";

export interface Weather {
  city: {
    id: string;
    name: string;
  };
  temperature: {
    value: number;
    unit: Temperature;
    icon: string;
    description: string;
  };
}
