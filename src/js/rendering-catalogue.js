const axios = require('axios').default;

export class getApiData {
  constructor() {
    this.searchKey = 's';
    this.searchValue = 'margarita';
  }

  async getParsedApiData() {
    const params = {
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php`,
      [this.searchKey]: `${this.searchValue}`,
    };

    try {
      const response = await axios.get(params.url, { params });
      const data = response.data.drinks;
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  get key() {
    return this.searchKey;
  }

  set key(newKey) {
    this.searchKey = newKey;
  }

  get value() {
    return this.searchValue;
  }

  set value(newValue) {
    this.searchValue = newValue;
  }
}
