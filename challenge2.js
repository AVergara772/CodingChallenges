let lists = [[1,4,5],[1,3,4],[2,6]];

function mergeSortedList(l1){
    let mergedList = [];
    for(let i=0;i<l1.length;i++){
        for(let j=0;j<l1[i].length;j++){
            mergedList.push(l1[i][j]);
        }
    }
    mergedList.sort();
    for(let i=0;i<l1.length;i++){
        for(let j=0;j<l1[i].length;j++){
            console.log(mergedList);
        }
    }
}
    