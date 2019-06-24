
export function renderdate(date) {
    var one: any = new Date(date); // дата, до которой считаем.
    var two = Date.now(); // текущее время
    var remaining = one - two; // миллисекунды до даты
    remaining /= 1000; // секунды до даты
    remaining /= 60;    // минуты до даты
    remaining /= 60;    // часы до дат
    remaining /= 24;    // дни до даты
  
    let hours: number = (remaining - Math.floor(Number(remaining))) * 24;
    let minutes: number = ((hours - Math.floor(Number(hours))) * 60);
  
    if (remaining < 0 || hours < 0 || minutes < 0) {
      return ("истекло")
    }
    else {
      return (` дней: ${remaining.toFixed(0)} часов: ${hours.toFixed(0)} минут: ${minutes.toFixed(0)}`);
    }
  }