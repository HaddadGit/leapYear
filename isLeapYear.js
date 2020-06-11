 /*leap year "a year, occurring once every four years, which has 366 days including 29 February as an intercalary day."

 This is a function for calculate is a year leap-year or not (Boolean)
 
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)

************ you can call with isLeapYear (year) which return a Boolean number ***********
*/
 function isLeapYear (year) {
    if(year % 4 === 0){
            if(year % 100 === 0){
                    if(year % 400 === 0){
                            return true
                    }
                    else{
                            return false
                    }
            }
            else{
                    return true
            }
    }
    else{
        return false
    }
}