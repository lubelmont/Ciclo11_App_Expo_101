

async function searchCountryByName(country) {
    try {
      const response = await fetch("https://restcountries.com/v3.1/name/argentina");
      const data = await response.json();
      return data; 
    } catch (error) {
      console.log(error);
      return null; 
    }
  }
  
export default searchCountryByName;