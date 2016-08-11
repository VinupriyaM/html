/*var fs=require("fs");
var data=fs.readFileSync('Indicators.csv');
var stringData=data.toString();
var arrayOne=stringData.split('\r\n');
//var arrayOne=data.split('\r\n');
var header=arrayOne[0].split(',');
//console.log(header);
var noOfRow=arrayOne.length;
//console.log(noOfRow);
var noOfCol=header.length;
//console.log(noOfCol);*/

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
input: fs.createReadStream('Indicators.csv')
});
var index_countrycode,index_indicatorname,index_year,index_value;

var Asian_Country = ["Arab World","East Asia & Pacific (all income levels)","East Asia & Pacific (developing only)",
"South Asia","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China",
"Georgia","Indonesia","Iran, Islamic Rep.","Iraq","Israel","Japan","Jordan","India"];
var obj_final = {};
//var obj_Rural = {};
var tot=[];
//var arry=[];
var i=0;j=0;
var jArray=[];
var counter=0;
var header=[];
//var final_obj={};
for(i=0;i<Asian_Country.length;i++)
{
  tot[i]=0;
}
rl.on('line', function (line){
  if (counter === 0)
  {
   header=line.split(',');
   index_countryname = header.indexOf('CountryName');
   index_indicatorname = header.indexOf('IndicatorName');
   index_year = header.indexOf('Year');
   index_value = header.indexOf('Value');
    counter = 1;
   //console.log(header);
  }


  var result=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  ind=Asian_Country.indexOf(result[index_countryname]);

  if(Asian_Country.indexOf(result[index_countryname]) != -1 && (result[index_indicatorname] == 'Urban population'|| result[index_indicatorname] == 'Urban population'))
{
  if(tot[ind]==undefined)
  {
  tot[ind]+=parseInt(result[index_value]);
}
else {
    tot[ind]+=parseInt(result[index_value]);
}
  obj_final[header[index_countryname]]=result[index_countryname];
  obj_final[header[index_year]]=result[index_year];
  obj_final[header[index_value]]=result[index_value];
  obj_final[header[index_indicatorname]]=result[index_indicatorname];
  obj_final['total']=tot[ind];
  jArray.push(obj_final);

}
obj_final={};
//console.log(jArray);

});
  //console.log(ind);
  rl.on('close', function (){
  //var file = 'population.json';

 for(i=0;i<jArray.length;i++)
 {
   //console.log("***********");
     jArray[i].totpop=tot[Asian_Country.indexOf(jArray[i][header[index_countryname]])];
     console.log(jArray[i].totpop);
 }

 jArray.sort(function(a,b){
   return b.totpop-a.totpop;
 });


 var obj1=JSON.stringify(jArray);
 fs.writeFileSync('Asian1.json',obj1);
 	console.log('It\'s saved!');
 });
