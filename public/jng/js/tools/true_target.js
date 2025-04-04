
// const {true_target} = require('./lib/tools/true_target.js');
const valueChecker = require('./value_checker.js');

  export const true_target = function(targ,dataStr,tp,lv)
  {
    //note: dataStr takes multiple values in array form
    //let targEl = boss.true_target(ev.target,'moving');
    //boss.true_target(boss_cont,"moduletable","className");
    var current_el = targ;
    var lvl = lv || 5;
    var type = tp || "dataset";
    var data_string = (typeof dataStr != "object") ? [dataStr] : dataStr;
    let target_acquired = false;
    while(!target_acquired && current_el && lvl > 0){

      if(type == "dataset")
      {
        data_string.forEach((entry) => {
          if(current_el.dataset[entry] != undefined){
            target_acquired = true;
            return current_el;
          }//if
        });
      }
      //if(type == "className" && current_el.className.indexOf(dataStr) != -1) return current_el;

      // if(type == "className"){
      //    var is_in_array = valueChecker.value_checker({"array":dataStr,"string":current_el.className,"mod":"index","type":"ans"})
      //    if(is_in_array[0] != -1)
      //    {
      //       return current_el;
      //     }
      //  }//if
      if(type.includes("class")){
        data_string.forEach((entry) => {
          if(current_el.classList.contains(entry))
          {
            target_acquired = true;
            return current_el;
          }
        })
       }//if

       if(!target_acquired){
        current_el = current_el.parentNode;
      }

      lvl --;
    }//end while

    return current_el;
  }//true_target
