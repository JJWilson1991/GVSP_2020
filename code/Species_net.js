var data=[["African buffalo","Cattle",9],
["American bison","White-tailed deer",1],
["Cattle","African buffalo",1],
["Cattle","Alpine chamois",2],
["Cattle","Alpine ibex",1],
["Cattle","Asiatic black bears",1],
["Cattle","Deer",2],
["Cattle","Eland",1],
["Cattle","Elk",1],
["Cattle","European bison",2],
["Cattle","Fallow deer",2],
["Cattle","Malayan sun bear",1],
["Cattle","Mongolian gazelle",1],
["Cattle","Mouflon",1],
["Cattle","Mule deer",1],
["Cattle","Red deer",3],
["Cattle","Roe deer",2],
["Cattle","Sable antelope",1],
["Cattle","Sambar deer",1],
["Cattle","Waterbuck",1],
["Cattle","White-tailed deer",2],
["Cattle","Wild boar",2],
["Elk","Cattle",2],
["Elk","Goat",1],
["Elk","Horse",2],
["Elk","Pigs",1],
["Elk","Sheep",1],
["Elk","White-tailed deer",1],
["Goats","African buffalo",1],
["Goats","Alpine chamois",1],
["Goats","Deer",1],
["Goats","Grant's gazelle",1],
["Goats","Impala",1],
["Goats","White-tailed deer",1],
["Goats","Wildbeest",1],
["Impala","Cattle",4],
["Kudu","Cattle",1],
["Mule deer","Cattle",2],
["Mule deer","Cattle",2],
["Mule deer","Horse",2],
["Mule deer","Horse",2],
["Pigs","Alpine chamois",1],
["Pigs","Asiatic black bears",1],
["Pigs","Deer",1],
["Pigs","Malayan sun bear",1],
["Pigs","Mink",1],
["Pigs","Mongoose",1],
["Pigs","Wild boar",19],
["Pigs","Wild hogs",1],
["Pygmy hogs","Wild hogs",1],
["Red deer","Pigs",1],
["Roe deer","Cattle",1],
["Roe deer","Goat",1],
["Roe deer","Horse",1],
["Roe deer","Pigs",1],
["Roe deer","Sheep",1],
["Sheep","African buffalo",1],
["Sheep","Alpine chamois",1],
["Sheep","Deer",1],
["Sheep","Grant's gazelle",1],
["Sheep","Impala",1],
["Sheep","Wild boar",1],
["Sheep","Wildbeest",1],
["Water buffalo","Cattle",1],
["White-tailed deer","Cattle",2],
["Wild boar","Pigs",13],
["Badger","Cattle",1],
["Badger","Goat",1],
["Badger","Horse",1],
["Badger","Pigs",1],
["Badger","Sheep",1],
["Dog","Alpine chamois",1],
["Dog","Camel",1],
["Dog","Cattle",2],
["Fox","Camel",1],
["Fox","Cattle",5],
["Fox","Dog",1],
["Fox","Donkey",1],
["Fox","Goat",1],
["Fox","Horse",2],
["Fox","Pigs",1],
["Fox","Sheep",1],
["Mink","Wild boar",2],
["Mink","Wild boar",2],
["Pine marten","Cattle",1],
["Pine marten","Goat",1],
["Pine marten","Horse",1],
["Pine marten","Pigs",1],
["Pine marten","Sheep",1],
["Polecat","Cattle",1],
["Polecat","Goat",1],
["Polecat","Horse",1],
["Polecat","Pigs",1],
["Polecat","Sheep",1],
["Raccoon","Cattle",1],
["Raccoon","Horse",1],
["Raccoon dogs","Cattle",2],
["Raccoon dogs","Dog",1],
["Raccoon dogs","Goat",1],
["Raccoon dogs","Horse",1],
["Raccoon dogs","Pigs",1],
["Raccoon dogs","Sheep",1],
["Skunk","Cattle",1],
["Skunk","Horse",1],
["Wolf","Cattle",1],
["Wolf","Goat",1],
["Wolf","Horse",1],
["Wolf","Pigs",1],
["Wolf","Sheep",1],
["Brazilian free-tailed bat","Cattle",1],
["Flying fox","Pigs",1],
["Horseshoe bats","Pigs",1],
["Vampire bat","Cattle",3],
["Vampire bat","Horse",1],
["Domestic rabbits","Wild rabbits",1],
["Wild rabbits","Domestic rabbits",1],
["Horse","African buffalo",1],
["Horse","Cattle",2],
["Horse","Cotton-tailed rabbit",1],
["Horse","Coyote",1],
["Horse","Dog",1],
["Horse","Elephants",1],
["Horse","Fallow deer",1],
["Horse","Giraffes",1],
["Horse","Goat",1],
["Horse","Goats",1],
["Horse","Lion",1],
["Horse","Peccary",1],
["Horse","Pocket gopher",1],
["Horse","Raccoon",1],
["Horse","Roan antelope",1],
["Horse","Sheep",1],
["Horse","White-tailed deer",1],
["Horse","Wild hogs",1],
["Horse","Zebra",1],
["Norway rats","Pigs",1]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','African buffalo':'green','Cattle':'green','Raccoon':'red','ch':'yellow','la':'blue','pe':'purple','ro':'black'};




var g1 = svg.append("g").attr("transform","translate(325,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(1)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.primary])
.sortSecondary(sort(["African buffalo","Alpine chamois","Alpine ibex","Camel","Cattle","Deer","Eland","Elephants","Elk","European bison","Fallow deer","Giraffes","Goat","Goats","Grant's gazelle","Impala","Mongolian gazelle","Mouflon","Mule deer","Peccary","Pigs","Red deer","Roan antelope","Roe deer","Sable antelope","Sambar deer","Sheep","Waterbuck","White-tailed deer","Wild boar","Wild hogs","Wildbeest","Asiatic black bears","Coyote","Dog","Lion","Malayan sun bear","Mink","Mongoose","Raccoon","Cotton-tailed rabbit","Domestic rabbits","Wild rabbits","Donkey","Horse","Zebra","Pocket gopher"]))
.sortPrimary(sort(["African buffalo","American bison","Cattle","Elk","Goats","Impala","Kudu","Mule deer","Pigs","Pygmy hogs","Red deer","Roe deer","Sheep","Water buffalo","White-tailed deer","Wild boar","Badger","Dog","Fox","Mink","Pine marten","Polecat","Raccoon","Raccoon dogs","Skunk","Wolf","Brazilian free-tailed bat","Flying fox","Horseshoe bats","Vampire bat","Domestic rabbits","Wild rabbits","Horse","Norway rats"]))
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Primary");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Secondary");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("Freq");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -50:44))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -255:240))
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


