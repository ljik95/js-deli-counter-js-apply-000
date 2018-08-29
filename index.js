var katzDeliLine = [];

// function takeANumber(katzDeliLine, name) {
//   katzDeliLine.push(name);
//   return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.';
// }

function takeANumber(katzDeliLine) {
  let numOfPerson = 1;
  katzDeliLine.push(numOfPeron);
  numOfPerson++;
  return 'Welcome, ' + numOfPerson - 1;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine) {
  let lineAnnouncement = 'The line is currently: ';
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      lineAnnouncement += (i + 1) + '. ' + katzDeliLine[i] + ', ';
    }
    lineAnnouncement += katzDeliLine.length + '. ' + katzDeliLine[katzDeliLine.length - 1];
    return lineAnnouncement;
  }
}