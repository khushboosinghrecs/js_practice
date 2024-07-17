function cutIntoSegments(n, length){
    if(n===0) return 0;
    if(n<=1) return -Infinity;

    let maxSegment = -Infinity;
    length.forEach(element => {
        
        maxSegment = Math.max(maxSegment, 1+cutIntoSegments(n-element, length))
    });

    return maxSegment;
}