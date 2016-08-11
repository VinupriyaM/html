
//var data=fs.readFileSync('Indicators.csv');
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
input: fs.createReadStream('Indicators.csv')
});
//var stringData=data.toString();
//var arrayOne=stringData.split('\r\n');
//var arrayOne=data.split('\r\n');
//var header=arrayOne[0].split(',');
//console.log(header);
//var noOfRow=arrayOne.length;
//console.log(noOfRow);
//var noOfCol=header.length;
//console.log(noOfCol);
var index_countrycode,index_indicatorname,index_year,index_value;

//console.log(index_countrycode);
//console.log(index_indicatorname);
//console.log(index_year);
//console.log(index_value);
//var i=0;j=0;
var jArray=[];
var header=[];
var counter=0;
var final_obj={};
rl.on('line', function (line) {
if (counter === 0)
{
 header=line.split(',');
 index_countrycode = header.indexOf('CountryCode');
 index_indicatorname = header.indexOf('IndicatorName');
 index_year = header.indexOf('Year');
 index_value = header.indexOf('Value');
  counter = 1;
 //console.log(header);
}
//for(i=1;i<noOfRow-1;i++)
  var result=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  //console(result);
//for(j=0;j<noOfCol;j++)
  //if(j<noOfCol-1)

      if((result[index_countrycode]=='IND') && ((result[index_indicatorname] == 'Rural population (% of total population)') || (result[index_indicatorname] =='Urban population (% of total)')))
      //if(result[j] == 'IND' && (result[j+1] == 'Urban population (% of total)' ||  result[j+1] == 'Rural population (% of total population)'))
      {
       final_obj[header[index_indicatorname]]=result[index_indicatorname];
       final_obj[header[index_year]]=result[index_year];
       final_obj[header[index_value]]=result[index_value];
       //console.log(final_obj);
       jArray.push(final_obj);
       final_obj={};
       //console.log(jArray);
      }
  });
  rl.on('close',function(){

    //var file="indiadata.json";
    var obj=JSON.stringify(jArray);
    fs.writeFileSync('indiadata.json',obj);
console.log(jArray);
    console.log('Accomplished');
  });
