
/** API LINKS*/

const urlAllCurrency = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
const urlCurrencyDate = (date) => {
    return `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;
}
const urlCurrencyPeriod = ({start, end, valcode = 'usd'}) => {
    console.log(`https://bank.gov.ua/NBU_Exchange/exchange_site?start=${start}&end=${end}&valcode=${valcode}&sort=exchangedate&order=desc&json`)
    return `https://bank.gov.ua/NBU_Exchange/exchange_site?start=${start}&end=${end}&valcode=${valcode}&sort=exchangedate&order=desc&json`;
}


/** Formattig Time*/

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

function addTimeToDate(date, timeUnit, duration) {
    const newDate = new Date(date);
    switch (timeUnit) {
        case 'years':
            newDate.setFullYear(newDate.getFullYear() + duration);
            break;
        case 'months':
            newDate.setMonth(newDate.getMonth() + duration);
            break;
        case 'weeks':
            newDate.setDate(newDate.getDate() + duration * 7);
            break;
        case 'days':
            newDate.setDate(newDate.getDate() + duration);
            break;
        default:
            break;
    }
    return newDate;
}

function getPeriodFromCurrentDay(timeUnit, duration) {
    const today = new Date();
    const endDate = addTimeToDate(today, timeUnit, duration);

    const startDate = formatDate(today);
    const endDateFormatted = formatDate(endDate);
    return {
        start:endDateFormatted,
        end:startDate
    }
}
/** Examples of usage:
 console.log(getPeriodFromCurrentDay('years', -1));  // One year period
 console.log(getPeriodFromCurrentDay('months', -6)); // Six months period
 console.log(getPeriodFromCurrentDay('weeks', -2));  // Two weeks period
 console.log(getPeriodFromCurrentDay('days', -30));  // 30 days period
 */
class CurrencyServise {
    uah = {
        "txt": "Українська гривня",
        "rate": 1,
        "cc": "UAH",
    }
    async getAllCurrency() {
        let cachedData = JSON.parse(localStorage.getItem('cacheListCur'));
        if (!cachedData) {
            const response = await fetch(urlAllCurrency);
            const data = await response.json();
            cachedData = data;
            localStorage.setItem('cacheListCur', JSON.stringify(data));
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
    async getPeriod(period){
        let time;
        switch (period) {
            case 'week':
                time = getPeriodFromCurrentDay('weeks', -1)
                break;
            case 'month':
                time = getPeriodFromCurrentDay('days', -30)
                break;
            case 'half-year':
                time = getPeriodFromCurrentDay('months', -6)
                break;
        }

        const response = await fetch(urlCurrencyPeriod(time));
        console.log(response,'____1')
        const data = await response.json()
        console.log(data,'____2')
        return data;
    }
}

export default CurrencyServise