let [one, two, three] = [1, 2, 3]; 
console.log(`One: ${one}, Two: ${two}, Three: ${three}`);
import {PI, area} from "./math";
console.log(area(PI));

import * as math from "./math"; 
console.log(math.area(math.PI));

console.log('Changes');