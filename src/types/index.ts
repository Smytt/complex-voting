export interface Store {
  properties: {
    all: Property[],
    loading: boolean;
    error: any;
  };

}

export interface Property {
  name: string;
  area: number
}