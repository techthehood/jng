
// const valueChecker = require('./tools/value_checker.js');

  export const value_checker = function(sObj)
  {
    /*
    if found returns an array of string or index values

    example use:
    var isString =  value_checker({"array":icon_keys,"string":target_string,"mod":"string","type":"ans","action":"match"});
    if(isString[0] == -1)

    ans = array in string - (was checkStringForArray2) checkStringForArray2
    sna = string in array - (was check array for string)
    */

    var testString = sObj.string;
    var testArray = sObj.array;
    var modifier = sObj.mod || "index";//other value is name
    var type = sObj.type || "ans";
    var strIndx = [];
    var action = (sObj.action != undefined && sObj.action == "match") ? "match" : "compare";


    strIndx[0] = (modifier == "index") ? -1 : "none";

    for(var i = 0; i < testArray.length; i++)
    {
      var targetString = (type == "ans") ? testString : testArray[i];//
      var testValue = (type == "ans") ? testArray[i] : testString;
      var is_present = "false";

      //does the string - (usually long) have any of the array values
      //"https://youtube.com/#*(&$)*&*(*)whatever".indexOf("youtube")

      if(action == "compare")
      {
        if(targetString.indexOf(testValue) != -1)
        {
          var is_present = "true";
        }
      }else
      {
        if(targetString == testValue)
        {
          var is_present = "true";
        }
      }//end else

      if(is_present == "true")
      {
        if(modifier == "index")
        {
          if(strIndx[0] == -1)
          {

            strIndx = [];
            strIndx = strIndx.concat(i);

          }else
          {
            strIndx = strIndx.concat(i);
          }//end else


        }else{

          if(strIndx[0] == "none")
          {
            strIndx = [];
            strIndx = strIndx.concat(testArray[i]);

          }else
          {
            strIndx = strIndx.concat(testArray[i]);
          }//end else

        }//end else modifier

      }//end if targetString

    }//end for

    return strIndx;

  }//value_checker
