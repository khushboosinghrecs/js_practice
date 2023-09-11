// debouncing and throtling are two ways to optimise event handeling in javascript 
// debouncing ->it limits the rate at which a function gets invoked. Debouncing in JavaScript is a practice used to improve browser performance.
// it limits the execution of function call and wait for cetiain time before running again
// ex- text type in search box
 

 // Debouncing and Throttling in js
 //Que 1 => Create button UI and add debounce ad follows
    // --->show Button pressed <X> time every time button is pressed
    // -->Increase 'Triggered' <Y> times count after 800ms of debounce


    const btn = document.querySelector('.increament_btn');
    const btnPress = document.querySelector('.increament_pressed')
    const count = document.querySelector('.increament_count')
    let prssedCount = 0;
    let triggerCount = 0

    
    const debounceCount = _.debounce(()=>{
      count.innerHTML = ++triggerCount;
    }, 800)

    mydebounce =(cb , d) =>{
      let timer;
      return function(...args){
         if(timer) clearTimeout(timer);
         timer = setTimeout(()=>{
            cb(...args)
         }, d)
      }
    }

    const customdebounceCount = mydebounce(()=>{
      count.innerHTML = ++triggerCount;
    }, 800)

    btn.addEventListener("click", ()=>{
      btnPress.innerHTML = ++prssedCount;
      debounceCount();
    })

    // throteling -> multiple events are there and we want to execute some callback after certain delay

// ex- by scrolling get if scrolling height will be 500px from bottom then call the api 
// infinite scroll
// a technique that limits the number of times a function can be called over a given period of time

     //Que 1 => Create button UI and add throttle ad follows
    // --->show Button pressed <X> time every time button is pressed
    // -->Increase 'Triggered' <Y> times count after 800ms of throttle


   //  const btn = document.querySelector('.increament_btn');
   //  const btnPress = document.querySelector('.increament_pressed')
   //  const count = document.querySelector('.increament_count')
   //  let prssedCount = 0;
   //  let triggerCount = 0

    const start = new Date().getTime();
    const throttleeCount = _.debounce(()=>{
      const now = new Date().getTime();
      console.log(now -start)
      count.innerHTML = ++triggerCount;
    }, 800)

    function mythrottle(func, delay) {
      let lastCallTime = 0;
      let timeout;
    
      return function (...args) {
        const now = Date.now();
    
        if (now - lastCallTime >= delay) {
          func(...args);
          lastCallTime = now;
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            func(...args);
            lastCallTime = now;
          }, delay - (now - lastCallTime));
        }
      };
    }
    

    const customthrottleCount = mythrottle(()=>{
      count.innerHTML = ++triggerCount;
    }, 800)

    
    btn.addEventListener("click", ()=>{
      btnPress.innerHTML = ++prssedCount;
      throttleeCount();
    })