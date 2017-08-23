import response from  './response'
response();

import * as d3 from 'd3'
import Walkway from 'walkway.js'
import 'normalize.css'
import './index.css'
import root from './china.json';

var windowWidth=document.documentElement.clientWidth;
var windowHeight=document.documentElement.clientHeight;

var rate = windowWidth/ 10;
var g3 = Math.sqrt(3);

var svg = d3.select('#app')
    .append('svg')
    .attr('id', 'svgMain')
    .attr('width', '12.5rem')
    .attr('height', '12.5rem')


var lines = [[1, 0], [0, g3], [1, 4 / g3], [1, 0]].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
var lines2 = [[0, g3], [1, 2 * g3], [2, g3 + 2 / g3], [0, g3]].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
var lines3 = [[1, 2 * g3], [3, 2 * g3], [3, 4 / g3], [1, 2 * g3]].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
var lines4 = [[3, 2 * g3], [4, g3], [3, 2 * g3 - 4 / g3], [3, 2 * g3]].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
var lines5 = [[4, g3], [3, 0], [2, g3 - 2 / g3], [4, g3]].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
var lines6 = [[3, 0], [1, 0], [1, 2 * g3 - 4 / g3], [3, 0],].map(function (e) {
    return [e[0] * rate, e[1] * rate]
})
svg.append('path')
    .attr('d', d3.line()(lines))
svg.append('path')
    .attr('d', d3.line()(lines2))
svg.append('path')
    .attr('d', d3.line()(lines3))
svg.append('path')
    .attr('d', d3.line()(lines4))
svg.append('path')
    .attr('d', d3.line()(lines5))
svg.append('path')
    .attr('d', d3.line()(lines6))

svg.selectAll('path')
    .attr('stroke', 'white')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')


// 重写默认值
var svgMain = new Walkway({
    selector: '#svgMain',
    duration: '3000',
    // easing: 'easeOutQuint'
});
svgMain.draw(function () {
    document.getElementById('logo').className = 'show';
    setTimeout(function () {
        document.querySelector('#page').onclick = function () {
            this.remove();
        }
    }, 1000)
});


var projection = d3.geoMercator()
    .center([104, 31])
    .scale(rate * 9)
    .translate([windowWidth / 2, windowHeight / 2])

var path = d3.geoPath()
    .projection(projection)
// .pointRadius(5)
// var color = d3.scaleOrdinal(d3.schemeCategory10)


var svg = d3.select('#page2').append('svg')
    .attr('width',windowWidth)
    .attr('height', windowHeight);

var groups = svg.append('g');
groups.selectAll('path')
    .data(root.features)
    .enter()
    .append('path')
    .attr('class', 'province')
    .style('fill', function (d, i) {
        //return color(i)
        return '#ddd'
    })
    .style('stroke', 'white')
    .style('stroke-width', '1px')
    .attr('d', path)


var sizeCreator = function (i) {
    var array = [15, 14, 20, 16]
    return array[i] ? array[i] : 5;
}

groups.selectAll('circle')
    .data(root.features)
    .enter()
    .append('circle')
    .attr('class', 'centroid')
    .attr('cx',
        function (d) {
            return path.centroid(d)[0]
        })
    .attr('cy',
        function (d) {
            return path.centroid(d)[1]
        })
    .style('fill', function () {
        return Math.random() > 0.5 ? '#CE6F6C' : '#4987BA'
    })
    .attr('r', function (d, i) {
        return sizeCreator(i)
    })
