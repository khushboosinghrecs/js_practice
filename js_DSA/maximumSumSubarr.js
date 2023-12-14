let arr= [-3, -4, 5, -1, 2, -4, 6, -1];

let sum =0;
let brr =[];
let obj= {}

let l=0;
let r =0;
for(let i =0; i<arr.length-1; i++){
    let inner_sum= arr[i]
    for(let j=i+1; j<arr.length; j++){
        inner_sum= arr[j]+inner_sum;
        if(inner_sum<sum) {
            l=i;
            r=j;
            sum = Math.max(sum, inner_sum )
            break;
        } 
        
    }
}
console.log(obj);

int n=v.size();
int maxi=INT_MIN;
int end=0;
int maxl=0;

int cnt=0;
int sum=0;
for(int j=0;j<n;j++){
sum+=v[j];
cnt++;
if(sum>maxi){
    maxi=sum;
    maxl=cnt;
    end=j;
}
if(sum<0){
    sum=0;
    cnt=0;
}
}
int k=end;
cout<<maxi<<endl;
while (maxl--)
{
    cout<<v[k--]<<" ";
}

console.log(sum, " ll ", l, " rr ", r);