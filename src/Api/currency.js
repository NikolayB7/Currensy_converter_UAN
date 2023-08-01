const urlAllCurrency = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
const urlCurrencyDate = (date) => {
    return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;
}

class CurrencyServise {
    uah = {
        "txt": "Українська гривня",
        "rate": 1,
        "cc": "UAH",
    }
    async getAllCurrency() {
        let cachedData = JSON.parse(sessionStorage.getItem('cacheListCur'));
        if (!cachedData) {
            const response = await fetch(urlAllCurrency);
            const data = await response.json();
            cachedData = data;
            sessionStorage.setItem('cacheListCur', JSON.stringify(data));
        }
        cachedData.unshift(this.uah)
        return cachedData
    }
    async getDateCurrency(date) {
        const response = await fetch(urlCurrencyDate(date));
        const data = await response.json()
        data.unshift(this.uah)
        return data;
    }
}

export default CurrencyServise