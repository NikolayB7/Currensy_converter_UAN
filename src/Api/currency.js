const urlAllCurrency = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

class CurrencyServise {
    async getAllCurrency() {
        let cachedData = JSON.parse(sessionStorage.getItem('cacheListCur'));
        if (!cachedData) {
            const response = await fetch(urlAllCurrency);
            const data = await response.json();
            cachedData = data;
            sessionStorage.setItem('cacheListCur', JSON.stringify(data));
        }
        return cachedData
    }
}

export default CurrencyServise