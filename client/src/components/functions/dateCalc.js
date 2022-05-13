function dateCalc(dayName, date, month, year) {
  let str = ''

  switch (dayName) {
    case 'Mo':
      str += 'Montag'
      break;
    case 'Di':
      str += 'Dienstag'
      break;
    case 'Mi':
      str += 'Mittwoch'
      break;
    case 'Do':
      str += 'Donnerstag'
      break;
    case 'Fr':
      str += 'Freitag'
    break;
    case 'Sa':
      str += 'Samstag'
      break;
    case 'So':
      str += 'Sonntag'
      break;

    default:
      str += 'no day defined'
      break;
  }
  str += ', '

  str += date < 10 && '0'
  str += date + '.'

  switch (month) {
    case 'Jan':
      str += '01'
      break;
    case 'Feb':
      str += '02'
        break;
    case 'Mar':
      str += '03'
      break;
    case 'Apr':
      str += '04'
      break;
    case 'Mai':
      str += '05'
      break;
    case 'Jun':
      str += '06'
      break;
    case 'Jul':
      str += '07'
      break;
    case 'Aug':
      str += '08'
      break;
    case 'Sep':
      str += '09'
      break;
    case 'Okt':
      str += '10'
      break;
    case 'Nov':
      str += '11'
      break;
    case 'Dez':
      str += '12'
      break;

    default:
      str += 'no month defined'
      break;
  }
  str += '.' + year

  return str
}

export default dateCalc;