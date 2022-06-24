function squares(first, last){
    let sr = Math.sqrt(first);
    let count = 0;

    while ((sr * sr) <= last) {
        if ((sr * sr) >= first){
            count++;
        }
        sr++;
    }

    return count;
}
