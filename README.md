# ezstats

### Install

`npm install --save ezstats`

### Functions

```javascript

var ezstats = require('ezstats');

var dataset = getData().from().somewhere();

// get the mean value from a set of numbers
var mean = ezstats.mean(dataset);

// get standard deviation of a dataset

var standardDeviation = ezstats.standardDeviation(dataset);

// get variance of a dataset
var variance = ezstats.variance(dataset);

// get z-scores from a dataset
var zScores = ezstats.zScores(dataset);

```

*Note: The data format for the zScores function is the following:*
```json
[ { value: initialValue, z: zScoreForTheValue } ]
```
