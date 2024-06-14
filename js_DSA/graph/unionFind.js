class Solution{
    constructor(){
        this.par= [];
        this.size= [];
    }

    find(node) {
        if (node === this.par[node]) {
            return node;
        }
        this.par[node] = this.find(this.par[node]);
        return this.par[node];
    }

    union(a, b){
        const parentA= this.find(a);
        const parentB = this.find(b);

        if(parentA === parentB) return;

        const rankA = this.size[parentA];
        const rankB = this.size[parentB];

        if(rankA >= rankB){
            this.par[parentB] = parentA;
            this.size[parentA] = this.size[parentB] + this.size[parentA];
        }
        else{
            this.par[parentA] = parentB;
            this.size[parentB] = this.size[parentA] + this.size(parentB); 
        }
    }


    makeConnected(n, connection){
        if(connection.length < n-1){
            return -1;
        }

        this.par = Array.from({length: n}, (_, i)=>i);
        this.size = Array.fill(1);

        connection.forEach(([a, b])=>{
            this.union(a, b);
        })

        const findParList = this.par.map(node=> this.find(node));
        return new Set(finalParList).size - 1;
    }

}