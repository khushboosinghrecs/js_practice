var permute = function(nums) {
    const arr =[];
    
    function fun(nums, l, h ){
        if(l===h){
    
            // console.log(nums, [...nums], 'khuhsi singh')
            arr.push([...nums]);
            return
        }
        for(let i=l; i<=h; i++){
            let temp = nums[l];
            nums[l] = nums[i];
            nums[i] = temp;
    
            fun(nums, l+1 , h)
    
            temp = nums[l];
    
            nums[l] = nums[i];
            nums[i] = temp;
        }
    }
    fun(nums, 0, nums.length-1)
    return arr;
    }