function bubbleSort(arr) {
    let isSorted;

    while(true) {
      isSorted = true;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                isSorted = false;
            }
       }
        
      if(isSorted === true){
      	break;
      }
    }

    return arr;
} 

console.log(bubbleSort([5, 3, 1, 90, 65, 11111]));