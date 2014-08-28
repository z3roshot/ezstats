
/**
 * Calculates the mean of an array of numbers
 */
exports.mean = mean;

function mean(vals){
	if(!isValid(vals)){
		return null;
	}

	var valSum = sum(vals);

	return valSum / vals.length;
}

function sum(vals){
	return vals.reduce(next, 0);

	function next(acc, value){
		return acc + value;
	}
}

exports.variance = variance;

function variance(vals){
	if(!isValid(vals)){
		return null;
	}

	var valMean = mean(vals);

	var squaredDifferences = vals.map(function(value){
		return subtractAndSquare(value);
	});

	var sumOfSquaredDifferences = sum(squaredDifferences);

	return sumOfSquaredDifferences / vals.length;

	function subtractAndSquare(x){
		return (x - valMean) * (x - valMean);
	}
}

exports.standardDeviation = standardDeviation;

function standardDeviation(vals){
	var valVariance = variance(vals);

	return valVariance && Math.sqrt(valVariance);
}

exports.zScores = zScores;

function zScores(vals){
	if(!isValid(vals)){
		return null;
	}

	var valMean = mean(vals);

	var valStandardDeviation = standardDeviation(vals);

	return vals.map(zScore);

	function zScore(value){
		var z = (value - valMean) / valStandardDeviation;
		return { value: value, z: z };
	}
}

function isValid(vals){
	if(!vals || !vals.length){
		return null;
	}

	if(!vals.every(isNum)){
		return false;
	}

	return true;

	function isNum(value){
		return !isNaN(value);
	}
}