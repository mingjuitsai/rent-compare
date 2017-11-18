// Rent calculation helpers
export const RentCalc = {
  getMontlyRent(weeklyRent) {
    return Math.round(weeklyRent/7*365/12);
  }
}


