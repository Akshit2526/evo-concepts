export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
  id: 1,
  slug: "apr-ignition-coil",
  name: "APR Ignition Coil",
  image: "",
},

  { id: 2, slug: "apr-disc-brakes", name: "APR Disc Brakes", image: "" },
  { id: 3, slug: "apr-cold-air-intake", name: "APR Cold Air Intake", image: "" },
  { id: 4, slug: "apr-coilovers", name: "APR Coilovers", image: "" },

  { id: 5, slug: "apr-turbo", name: "APR Turbo", image: "" },
  { id: 6, slug: "forge-bov-valve", name: "Forge BOV Valve", image: "" },
  { id: 7, slug: "apr-intercooler-system", name: "APR Intercooler System", image: "" },
  { id: 8, slug: "apr-catch-can", name: "APR Catch Can", image: "" },

  { id: 9, slug: "apr-downpipe", name: "APR Downpipe", image: "" },
  { id: 10, slug: "apr-fuel-pump", name: "APR Fuel Pump", image: "" },
  { id: 11, slug: "apr-intake-hose", name: "APR Intake Hose", image: "" },
  { id: 12, slug: "apr-turbo-inlet", name: "APR Turbo Inlet", image: "" },

  { id: 13, slug: "forge-intake", name: "Forge Intake", image: "" },
  { id: 14, slug: "forge-intercooler", name: "Forge Intercooler", image: "" },
  { id: 15, slug: "forge-turbo-blanket", name: "Forge Turbo Blanket", image: "" },
  { id: 16, slug: "forge-wastegate", name: "Forge Wastegate", image: "" },

  { id: 17, slug: "racingline-intake", name: "RacingLine Intake", image: "" },
  { id: 18, slug: "racingline-r600", name: "RacingLine R600", image: "" },
  { id: 19, slug: "racingline-oil-kit", name: "RacingLine Oil Kit", image: "" },
  { id: 20, slug: "racingline-dsg-paddles", name: "RacingLine DSG Paddles", image: "" },

  { id: 21, slug: "cts-turbo-intake", name: "CTS Turbo Intake", image: "" },
  { id: 22, slug: "cts-downpipe", name: "CTS Downpipe", image: "" },
  { id: 23, slug: "cts-intercooler", name: "CTS Intercooler", image: "" },
  { id: 24, slug: "cts-turbo-muffler-delete", name: "CTS Turbo Muffler Delete", image: "" },
];