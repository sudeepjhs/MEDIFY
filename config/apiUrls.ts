export const stateUrl = "https://meddata-backend.onrender.com/states";
export const cityUrl = (state: string) =>
  `https://meddata-backend.onrender.com/cities/${state}`;

export const getHospitalUrl = (state: string, city: string) => `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`