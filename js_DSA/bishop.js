// int posx, posy;
//     cin >> posx >> posy;
//     for(int i = 0; i < 8; ++i){
//         int sum = posx + posy;
//         int req = sum - i;
//         if(req >= 0 && req < 8) a[i][req] = 1;
//         // cout << i << " " << req << endl;
//     }

//   while(posx < 7 && posy < 7){
//         posx++; posy++;
//         a[posx][posy] = 1;
//   }
//   while(posx > 0 && posy > 0){
//         posx--; posy--;
//         a[posx][posy] = 1;
//    }

//   for(int i = 0; i  < 8; ++i){
//     for(int j = 0; j < 8; ++j){
//         cout << a[i][j] << " ";