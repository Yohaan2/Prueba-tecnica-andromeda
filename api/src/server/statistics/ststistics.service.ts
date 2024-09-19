abstract class StatisticsImpl {
  abstract getStatistics(): Record<string, any>;
}

export class StatisticsServiceClass implements StatisticsImpl {
  getStatistics(): Record<string, any> {
    return {
      "sales": [
        { "name": "January", "value": 45000 },
        { "name": "February", "value": 52000 },
        { "name": "March", "value": 48000 },
        { "name": "April", "value": 51000 },
        { "name": "May", "value": 60000 },
        { "name": "Jun", "value": 65000 },
        { "name": "July", "value": 68000 },
        { "name": "August", "value": 72000 },
        { "name": "September", "value": 58000 },
        { "name": "October", "value": 55000 },
        { "name": "November", "value": 62000 },
        { "name": "December", "value": 70000 }
      ],
      "statistics": {
        "annualTotal": 706000,
        "monthlyAverage": 58833,
        "highestSalesMonth": "August",
        "lowestSalesMonth": "January"
      }
    }
  }
}