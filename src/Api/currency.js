const urlAllCurrency = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
const urlCurrencyDate = (date) => {
    return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;
}

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
    async getDateCurrency(date) {
        const response = await fetch(urlCurrencyDate(date));
        const data = await response.json()
        return data;
    }
}

export default CurrencyServise