export type ForecastDayModel = {
  shift: 'dawn' | 'morning' | 'afternoon' | 'night';
  temperature: number;
  conditionCode: number
  condition: string
  time: string;
  icon: string;
};
