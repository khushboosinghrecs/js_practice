function isSymmetric(root){
    function isIsMirror(t1,t1){
        if(t1 === null && t1 === null) return true;
        if(t1 == null && t2 === null) return false;

        return (t1.data === t2.data) && isIsMirror(t1.left, t2.right) && isIsMirror(t1.right, t2.left);
    }

    return isIsMirror(root, root);
}