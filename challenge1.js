let nums1 = [1,3];
let nums2 = [2];
let totalLength=nums1.length+nums2.length;
let halfLength=totalLength/2;
let go = true;
let i;
let j;

function medianArray(A1, A2){
    let l=0;
    let r=0;
    let tempArray;

    if(A1.length>A2.length){
        tempArray=A1;
        A1=A2;
        A2=tempArray;;
    }
    while(go){
        i=(l+r)/2;
        j=halfLength-i-2;

        if(i>=0){
            A1Left=A1[i];
            A1Right=A1[i+1];
            A2Left=A2[j];
            A2Right=A2[j+1];
        }
        else{
            i=0
            A1Left=A1[i];
            A1Right=A1[i+1];
            A2Left=A2[j];
            A2Right=A2[j+1];
        }
    }
}

medianArray(nums1, nums2);