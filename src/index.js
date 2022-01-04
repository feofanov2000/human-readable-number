module.exports = function toReadable (number) {
  const numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const numbers2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 
    'eighty', 'ninety'];

  if (number == 0) {
    return numbers1[0];
  } else if (number % 100 >= 1 && number % 100 <= 19) {
    return (number > 99) ? 
      numbers1[Math.floor(number / 100)] + ' hundred ' + numbers1[number % 100] 
      : numbers1[number];
  } else if (number % 100 == 0) {
    return numbers1[Math.floor(number / 100)] + ' hundred';
  } else if (number % 100 >= 20 && number % 100 <= 99) {
    if (number % 100 % 10 == 0) {
      return (number > 99) ? 
      numbers1[Math.floor(number / 100)] + ' hundred ' + 
      numbers2[number % 100 / 10 - 2] 
      : numbers2[number / 10 - 2];
    }
    return (number > 99) ? 
    numbers1[Math.floor(number / 100)] + ' hundred ' +  
    numbers2[Math.floor(number % 100 / 10) - 2] + ' ' + 
    numbers1[number % 100 % 10] 
    : numbers2[Math.floor(number / 10) - 2] + ' ' + numbers1[number % 10];
  }
}