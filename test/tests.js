var expect = require('totes').expect;

var stats = require('../index');

describe('mean', function(){
	it('should return null for an empty list', function(){
		var mean = stats.mean([]);

		expect(mean).isExactly(null);
	});

	it('should return null when any item is not a number', function(){
		var mean = stats.mean([1,2,3,'a']);

		expect(mean).isExactly(null);

		var mean2 = stats.mean([1,2,null,function(){}]);

		expect(mean2).isExactly(null);
	});

	it('should return 2 when the input is [2]', function(){
		var mean = stats.mean([2]);

		expect(mean).is(2);
	});

	it('should return 2 when the input is [1,3]', function(){
		var mean = stats.mean([1,3]);

		expect(mean).is(2);
	});
});

var dataset = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];

describe('variance', function(){
	it('should return null for an empty list', function(){
		var variance = stats.variance([]);

		expect(variance).isExactly(null);
	});

	it('should return null when any item is not a number', function(){
		var variance = stats.variance([1,2,3,'a']);

		expect(variance).isExactly(null);

		var variance2 = stats.variance([1,2,null,function(){}]);

		expect(variance2).isExactly(null);
	});

	it('should return 0 for a list with all the same numbers', function(){
		var variance = stats.variance([1,1,1,1,1,1]);

		expect(variance).isZero();

		var variance2 = stats.variance([5,5,5,5,5,5]);

		expect(variance2).isZero();
	});

	it('should return the correct value', function(){
		// example solution from http://chemistry.about.com/od/workedchemistryproblems/a/Population-Standard-Deviation-Example-Calculation.htm

		var variance = stats.variance(dataset);

		expect(variance).is(8.9);
	});
});

describe('standardDeviation', function(){
	it('should return null for an empty list', function(){
		var standardDeviation = stats.standardDeviation([]);

		expect(standardDeviation).isExactly(null);
	});

	it('should return null when any item is not a number', function(){
		var standardDeviation = stats.standardDeviation([1,2,3,'a']);

		expect(standardDeviation).isExactly(null);

		var standardDeviation2 = stats.standardDeviation([1,2,null,function(){}]);

		expect(standardDeviation2).isExactly(null);
	});

	it('should return 0 for a list with all the same numbers', function(){
		var standardDeviation = stats.standardDeviation([1,1,1,1,1,1]);

		expect(standardDeviation).isZero();

		var standardDeviation2 = stats.standardDeviation([5,5,5,5,5,5]);

		expect(standardDeviation2).isZero();
	});

	it('should return the correct value', function(){
		// example solution from http://chemistry.about.com/od/workedchemistryproblems/a/Population-Standard-Deviation-Example-Calculation.htm

		var standardDeviation = stats.standardDeviation(dataset);

		expect(standardDeviation).is(Math.sqrt(8.9));
	});

});

describe('zScores', function(){	
	it('should return null for an empty list', function(){
		var zScores = stats.zScores([]);

		expect(zScores).isExactly(null);
	});

	it('should return null when any item is not a number', function(){
		var zScores = stats.zScores([1,2,3,'a']);

		expect(zScores).isExactly(null);

		var zScores2 = stats.zScores([1,2,null,function(){}]);

		expect(zScores2).isExactly(null);
	});

	it('should return an array with the same length as the input', function(){
		var zScores = stats.zScores([1,2,3]);

		expect(zScores.length).is(3);
	});

	it('should return an array of objects', function(){
		var zScores = stats.zScores([1,2,3]);

		expect(zScores.every(isObj)).isTruthy();

		function isObj(score){
			return typeof score === 'object';
		}
	});
});

