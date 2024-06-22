function fun(i) {
    for (let j = i; j < 3; j++) {
        console.log(i, 'ssss');
        fun(i + 1);
        console.log(i, 'endd');
    }
}

fun(0);

// fun(0)
//   |
//   |--- j=0 (first iteration)
//   |    |
//   |    |--- fun(1)
//   |    |     |
//   |    |     |--- j=1 (first iteration)
//   |    |     |    |
//   |    |     |    |--- fun(2)
//   |    |     |    |     |
//   |    |     |    |     |--- j=2 (first iteration)
//   |    |     |    |     |    |
//   |    |     |    |     |    |--- fun(3)
//   |    |     |    |     |    |    (base case, does nothing)
//   |    |     |    |     |    |--- print "2 endd"
//   |    |     |    |     |
//   |    |     |    |     |--- print "1 endd"
//   |    |     |
//   |    |     |--- j=2 (second iteration)
//   |    |          |
//   |    |          |--- fun(2)
//   |    |          |    |
//   |    |          |    |--- j=2 (first iteration)
//   |    |          |    |    |
//   |    |          |    |    |--- fun(3)
//   |    |          |    |    |    (base case, does nothing)
//   |    |          |    |    |--- print "2 endd"
//   |    |          |    |
//   |    |          |    |--- print "1 endd"
//   |    |
//   |    |--- print "0 endd"
//   |
//   |--- j=1 (second iteration)
//   |    |
//   |    |--- fun(1)
//   |    |     |
//   |    |     |--- j=1 (first iteration)
//   |    |     |    |
//   |    |     |    |--- fun(2)
//   |    |     |    |     |
//   |    |     |    |     |--- j=2 (first iteration)
//   |    |     |    |     |    |
//   |    |     |    |     |    |--- fun(3)
//   |    |     |    |     |    |    (base case, does nothing)
//   |    |     |    |     |    |--- print "2 endd"
//   |    |     |    |     |
//   |    |     |    |--- print "1 endd"
//   |    |     |
//   |    |     |--- j=2 (second iteration)
//   |    |          |
//   |    |          |--- fun(2)
//   |    |          |    |
//   |    |          |    |--- j=2 (first iteration)
//   |    |          |    |    |
//   |    |          |    |    |--- fun(3)
//   |    |          |    |    |    (base case, does nothing)
//   |    |          |    |    |--- print "2 endd"
//   |    |          |    |
//   |    |          |    |--- print "1 endd"
//   |    |
//   |    |--- print "0 endd"
//   |
//   |--- j=2 (third iteration)
//        |
//        |--- fun(1)
//             |
//             |--- j=1 (first iteration)
//             |    |
//             |    |--- fun(2)
//             |    |    |
//             |    |    |--- j=2 (first iteration)
//             |    |    |    |
//             |    |    |    |--- fun(3)
//             |    |    |    |    (base case, does nothing)
//             |    |    |    |--- print "2 endd"
//             |    |    |
//             |    |    |--- print "1 endd"
//             |
//             |--- j=2 (second iteration)
//                  |
//                  |--- fun(2)
//                  |    |
//                  |    |--- j=2 (first iteration)
//                  |    |    |
//                  |    |    |--- fun(3)
//                  |    |    |    (base case, does nothing)
//                  |    |    |--- print "2 endd"
//                  |    |
//                  |    |--- print "1 endd"
//             |
//             |--- print "0 endd"
