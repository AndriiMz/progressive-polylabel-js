'use strict';

var polylabel = require('../');
var shape1 = [[131.838399246219,-230.962005480153],
    [143.773398944715,-240.516599999999],
    [165.257310868845,-227.378005570692],
    [162.870598462279,-208.268599999999],
    [166.450698371838,-187.963906566376],
    [184.352997919588,-173.631906928433],
    [177.19279810047,-149.745207531862],
    [193.901797678365,-131.82910798446],
    [185.547310868846,-106.747108618085],
    [199.869597527606,-72.1104094930815],
    [165.257310868845,-88.8311090706811],
    [137.805599095474,-85.2481091611953],
    [102,-63.7491097043057],
    [102,-47.0284101267061],
    [86.4839003919697,-56.5831098853341],
    [73.3550007236336,-44.6397101870498],
    [60.2261010552975,-57.7784098551383],
    [57.8388011156057,-180.797906747404],
    [55.4521011758989,-197.518599999999],
    [70.9677007839418,-198.713906294808],
    [80.516100542729,-196.324306355175],
    [97.2256001206115,-193.935599999999],
    [103.193310868844,-208.268599999999],
    [110.354499788948,-220.21200575172],
    [121.096199517589,-215.434599999999]],
    shape2 = [
        [119.413999560085,-138.493207816111],
        [115.833499650536,-168.94830704675],
        [78.2387006002609,-158.198307318318],
        [85.3994004193664,-122.369208223437],
        [69.2876008263847,-61.4600097621333],
        [88.9800003289129,-74.0000094453462],
        [97.9306001028017,-104.455108675986]
    ];


//Test shape 1
console.log(polylabel([shape1]));
//Test shape 1 with shape 2
console.log(polylabel([shape1, shape2]));
