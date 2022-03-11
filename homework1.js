//HomeWork: Write a JavaScript program that  sorts the items of an array.
//Array Input :
var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var x, i, j;

for (i = 0; i <= arr.length; i++) {

    for (j = i + 1; j <= arr.length; j++) {

        if (arr[j] <= arr[i]) {
            x = arr[j];
            arr[j] = arr[i];
            arr[i] = x;
        }

    }

}


console.log("our sorted array is:" + arr);



//Output : 
//-4,-3,1,2,3,5,6,7,8