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

	it('should calculate the scores correctly given a known data set', function(){
		var zScores = stats.zScores([100,99,101,125,100,123,96,90,98,116]);

		expect(zScores[0]).propertyIs('value', 100)
						  .propertyIs('z', -0.42);

		expect(zScores[1]).propertyIs('value', 99)
						  .propertyIs('z', -0.51);

		expect(zScores[2]).propertyIs('value', 101)
						  .propertyIs('z', -0.33);

		expect(zScores[3]).propertyIs('value', 125)
						  .propertyIs('z', 1.77);

		expect(zScores[4]).propertyIs('value', 100)
						  .propertyIs('z', -0.42);

		expect(zScores[5]).propertyIs('value', 123)
						  .propertyIs('z', 1.60);

		expect(zScores[6]).propertyIs('value', 96)
						  .propertyIs('z', -0.77);

		expect(zScores[7]).propertyIs('value', 90)
						  .propertyIs('z', -1.30);

		expect(zScores[8]).propertyIs('value', 98)
						  .propertyIs('z', -0.60);

		expect(zScores[9]).propertyIs('value', 116)
						  .propertyIs('z', 0.98);


	});
});

