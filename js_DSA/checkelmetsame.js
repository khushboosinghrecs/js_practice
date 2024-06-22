function checkEle(list){
    
    list.map(ele=> {
        let st = new Set(...ele);
        if(st.size !== ele.length){
            return false;
        }
    })

    return true;
}