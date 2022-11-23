export interface ICountry {
  id: number;
  area: number;
  name: CountryName;
  flags: Flags;
}

type CountryName = {
  common: string;
  official: string;
};

type Flags = {
  png: string;
  svg: string;
};
