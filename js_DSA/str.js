vector<string> v={"apple", "appe", "appril"};
sort(v.begin(),v.end(),comp);
if(v.size()==1)cout<<v[0];
else {
    int i=0;
    string str="";
    while(i<v[0].size()&&v[0][i]==v[1][i]){
str+=v[0][i];
i++;
    }
    cout<<str;
}