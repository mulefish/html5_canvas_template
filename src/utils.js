
let currentId = undefined
export function getNextId() {
  currentId = _logic(currentId)
  return currentId
}

function _logic(str) {
  if (! str) {
    return 'A'
  }			
  let tail = ''
  let i = str.length -1
  let char = str[i]
  // find the index of the first character from the right that is not a 'Z'
  while (char === 'Z' && i > 0) {
    i--
    char = str[i]
    tail = 'A' + tail   // tail contains a string of 'A'
  }
  if (char === 'Z') {  // the string was made only of 'Z'
    return 'AA' + tail
  }
  // increment the character that was not a 'Z'
  return str.slice(0, i) + String.fromCharCode(char.charCodeAt(0) + 1) + tail
}


export function findXY_givenAngle_andDistance (x, y, angle, distance) {
    var result = {}
    result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x)
    result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y)
    return result
  }
  
export function getAngle_twoPoints (x1, y1, x2, y2) {
    // REMEMBER! Flipflop your intuitions! Screen 'more Y' = 'lower'
    // TODO! Maybe flip the sign of ( y2 - y1 ) to better match human intuitions?
    var angle_in_degrees = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
    return angle_in_degrees
  }
  
export function getDistance_twoPoints (x1, y1, x2, y2) {
  
}
  