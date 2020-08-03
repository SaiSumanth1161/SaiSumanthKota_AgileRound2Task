
chart = anychart.column();
document.onreadystatechange=function(){
chart.title('Sales By Month for:');
chart.xAxis().title('Months');
chart.yAxis().title('Sales');

chart.container("container").draw();  
}

function chart1(){
 data = d;
 chart.removeAllSeries();
 chart.addSeries(data);
 chart.container("container").draw();  
}

function ddselect(){
var de1=document.getElementById("drag1");
var dp1=de1.options[de1.selectedIndex].text;
var de2=document.getElementById("drag2");
var dp2=de2.options[de2.selectedIndex].text;
var de3=document.getElementById("drag3");
var dp3=de3.options[de3.selectedIndex].text;

if(dp1=="option1"&&dp2=="option1"&&dp3=="option1"){
d=anychart.data.set([{x: "January", value: 100}, {x: "February", value: 200},{x: "March", value: 300}, {x: "April", value: 400}
 ]);
}

else if(dp1=="option1"&&dp2=="option1"&&dp3=="option2"){
d=anychart.data.set([{x: "January", value: 200}, {x: "February", value: 100}, {x: "March", value: 600}, {x: "April", value: 300}
 ]);
}

else if(dp1=="option1"&&dp2=="option2"&&dp3=="option2"){
d=anychart.data.set([{x: "January", value: 300}, {x: "February", value: 300}, {x: "March", value: 50}, {x: "April", value: 200}
 ]);
}

else if(dp1=="option1"&&dp2=="option2"&&dp3=="option1"){
d=anychart.data.set([{x: "January", value: 50}, {x: "February", value: 150}, {x: "March", value: 200}, {x: "April", value: 10}
 ]);
}

else if(dp1=="option2"&&dp3=="option1"&&dp2=="option1"){
d=anychart.data.set([{x: "January", value: 400}, {x: "February", value: 800}, {x: "March", value: 100}, {x: "April", value: 150}
 ]);
}

else if(dp1=="option2"&&dp2=="option1"&&dp3=="option2"){
d=anychart.data.set([{x: "January", value: 300}, {x: "February", value: 0}, {x: "March", value: 200}, {x: "April", value: 240}
 ]);
}

else if(dp1=="option2"&&dp2=="option2"&&dp3=="option1"){
d=anychart.data.set([{x: "January", value: 200}, {x: "February", value: 100}, {x: "March", value: 100}, {x: "April", value: 120}
 ]);
}

else if(dp1=="option2"&&dp2=="option2"&&dp3=="option2"){
d=anychart.data.set([{x: "January", value: 100}, {x: "February", value: 200}, {x: "March", value: 300}, {x: "April", value: 430}
 ]);
}

else if((dp1=="option1"&&dp2=="option2")||(dp1=="option2"&&dp2=="option1")||(dp1==dp2)){
d=anychart.data.set([{x: "January", value: 100}, {x: "February", value: 200}, {x: "March", value: 300}, {x: "April", value: 430}
 ]);
}

else if((dp2=="option1"&&dp3=="option2")||(dp2=="option2"&&dp3=="option1")||(dp3==dp2)){
d=anychart.data.set([{x: "January", value: 10}, {x: "February", value: 40}, {x: "March", value: 300}, {x: "April", value: 430}
 ]);
}

else if((dp3=="option1"&&dp1=="option2")||(dp3=="option2"&&dp1=="option1")||(dp1==dp3)){
d=anychart.data.set([{x: "January", value: 500}, {x: "February", value: 600}, {x: "March", value: 365}, {x: "April", value: 450}
 ]);
}


else {
d=anychart.data.set([{x: "January", value: 1}, {x: "February", value: 1}, {x: "March", value: 1}, {x: "April", value: 1}
 ]);
}

chart1();

}

