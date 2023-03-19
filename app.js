var obj=new Date();
var date=obj.getDate();
console.log(date)
var com=new Date('23/mar/2023')
var comDate=com.getDate();
console.log(comDate)
var total=comDate-date;
console.log(total)
document.getElementById('id').innerHTML=total