class Graph{
    constructor(numberOfVertices){
        this.adjacncyMat= new Array(numberOfVertices);
        for(let i=0; i<numberOfVertices; i++){
            this.adjacncyMat[i]= new Array(numberOfVertices);
            for(let j=0; j<numberOfVertices; j++){
                this.adjacncyMat[i][j]=0;
            }

        }
    }
    addEdge(v1, v2){
        this.adjacncyMat[v1][v2]=0;
        this.adjacncyMat[v2][v1]=0;
    }

    removeEdge(v1, v2){
        this.adjacncyMat[v1][v2]=0;
        this.adjacncyMat[v2][v1]=0;
    }
    printMat(){
        for(let i=0; i< this.adjacncyMat.length; i++){
            console.log(this.adjacncyMat[i]);
        }

    }

    addVertex(){
        this.adjacncyMat.push(new Array(this.adjacncyMat.length));
        for(let i=0; i< this.adjacncyMat.length; i++){
            this.adjacncyMat[i].push(0);
        }

    }
}