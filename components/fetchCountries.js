

async function searchCountry() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/region/America?fields=name,capital");
      const data = await response.json();
      return data; 
    } catch (error) {
      console.log(error);
      return null; 
    }
  }
  
export default searchCountry;