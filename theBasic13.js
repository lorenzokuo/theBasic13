//1v
function print1To255() {
	for (var i = 1; i<256; i++){
		console.log(i);
	}
}

//2=
function printOdds1To255(){
	/*for (var i = 1; i<256; i+=2){
		if(i%2==1){
			console.log(i)
		}
	}*/
	for (var i = 1; i<256; i++){
		if(i%2==1){
			console.log(i);
		}
	}
}

//3=
function printIntsAndSum0To255(){
	//let sum = 0; let stays in block{}, var could overlapping with others' function.
	let sum = 0;
	for (var i = 0; i<256; i++){
		sum += i;
		console.log(i, sum);
	}
}

//4v
function printArrayVals(arr){
	console.log(arr);
}

//5v
function printMaxOfArray(arr){
	let max = arr[0];
	for (var i = 0; i<arr.length; i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	console.log(max);
}

//6 avg no needed
function printAveOfArr(arr){
	var sum = 0;
	var avg =0;
	for (var i = 0; i<arr.length; i++){
		sum+=arr[i];
	}
	avg = sum/arr.length;
	console.log(avg);
}

//7 i+=2
function returnOddsArr1To255(){
	let arr =[];
	for (var i = 1; i<256; i++){
		if(i%2==1){
			arr.push(i);
		}
	}
	return arr;
}

//8
function squareArrVals(arr){
	/*
	for (var i =0; i<arr.length; i++){
		arr[i]*=arr[i];
	}
	return arr;
	*/
	var newArr = [];
	for (var i =0; i<arr.length; i++){
		newArr.push(arr[i]*arr[i]);
	}
	return newArr;
}

//9x
function returnArrCounterGreaterThanY(arr,y){
	for(var i =0; i<arr.length; i++){
		if(arr[i]>y){
			count++
		}
	}
	console.log(count);
}

//10x
function zeroOut(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i]<0){
			arr[i]=0;
		}
	}
	return arr;
}

//11x
function maxMinAvge(arr){
	var sum = 0, min = arr[0], max = arr[0];
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
		if (arr[i]<min){
			min=arr[i];
		}
		if (arr[i]>max){
			max = arr[i];
		}
	}
	let avg = sum/arr.length;
	console.log(min, max. avg);
}

//12x

function shiftArrayValues(arr) {
	for(var i=0; i<arr.length-1; i++){
		arr[i]= arr[i+1];
	}
	arr[arr.length-1]=0;
}

//13x
function swapString(arr){
	for(var i=0; i<arr.length; i++){
		if(arr[i]<0){
			arr[i]="dojo"
		}
	}
}

















//3
function (){}
//3
function (){}
//3
function (){}
//3
function (){}