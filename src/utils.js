export function add(x, y) {
    return x + y
}
  
 export function multiply(x, y) {
    return x * y
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
  