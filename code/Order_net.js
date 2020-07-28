var data=[["Artiodactyla","Artiodactyla",109],
["Carnivora","Artiodactyla",38],
["Chiroptera","Artiodactyla",6],
["Perissodactyla","Artiodactyla",13],
["Rodentia","Artiodactyla",1],
["Artiodactyla","Carnivora",7],
["Carnivora","Carnivora",2],
["Perissodactyla","Carnivora",4],
["Lagomorpha","Lagomorpha",2],
["Perissodactyla","Lagomorpha",1],
["Artiodactyla","Perissodactyla",5],
["Carnivora","Perissodactyla",10],
["Chiroptera","Perissodactyla",1],
["Perissodactyla","Perissodactyla",1],
["Perissodactyla","Rodentia",1]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked ':'#3366CC','Artiodactyla':'#7FC97F','Carnivora':'#BEAED4','Chiroptera':'#FDC086','Perissodactyla':'#FFFF99','Rodentia':'#386CB0','Lagomorpha':'#F0027F'};




var g1 = svg.append("g").attr("transform","translate(245,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(1)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.primary])
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Reservoir Host Order");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Spillover Host Order");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("Frequency");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -36.8:36.8))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -189:204))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.0%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 

function mouseover(d){
bp1.mouseover(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}

                     function mouseout(d){
bp1.mouseout(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}


