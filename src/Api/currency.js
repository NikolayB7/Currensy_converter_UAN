import axios from "axios";

const urlAllCurrency = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

class CurrencyServise {
    async getAllCurrency() {
        const response = await fetch(urlAllCurrency);
        return response.json()
    }

}

export default CurrencyServise