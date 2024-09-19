export interface StatisticsResponse {
  message: string;
  statistics: {
    sales: Sales[];
  }
}
export interface Sales {
  name: string;
  value: number;
}