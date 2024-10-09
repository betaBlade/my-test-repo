/**
*@param planet: a string with the name of a planet
*@paran secs: number of seconds to convert to years 
*in the specified in the planet parameter
*@return: The number of year in the specified planet
*/
export const age = (planet, secs) => {
   const orbitalPeriods = {
      'mercury':0.2408467,
      'venus':0.61519726,
      'earth':1.0,
      'mars':1.8808158,
      'jupiter':11.802615,
      'saturn':29.447498,
      'uranus':84.016846,
      'neptune':164.79132
   };
   let factor = orbitalPeriods[planet.toLowerCase()];
   return Number((secs / (factor * 31557600)).toFixed(2));
};
