import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!
const svg = d3.select(".svg");

const cercle1 = svg.select(".cercle-1");
const cercle2 = svg.select(".cercle-2");
const cercle3 = svg.select(".cercle-3");

cercle2.attr("fill", "pink");

cercle2.attr("cx", "200");
cercle1.attr("cx", "100");

svg.append("text").text("Cercle 1").attr('x', 80).attr('y', 105);
svg.append("text").text("Cercle 2").attr('x', 180).attr('y', 205);
svg.append("text").text("Cercle 3").attr('x', 230).attr('y', 305);


cercle3.on("click", () => {
    svg.selectAll("circle, text").attr("cx", "250").attr('x', 230);
})

const data = [20, 5, 25, 8, 15];

svg.selectAll("svg")
   .data(data)
   .enter()
   .append("rect")
   .attr('x', (d,i) => i*25)
   .attr('y', (d) => 500-d)
   .attr('width', 20)
   .attr('height', (d) => d);