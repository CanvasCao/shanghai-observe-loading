import * as d3 from 'd3'
import Walkway from 'walkway.js'
import 'normalize.css'
import response from  './response'
response();

var rate = window.outerWidth / 10;
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
var lines6 = [[1, 0], [3, 0], [1, 2 * g3 - 4 / g3], [1, 0]].map(function (e) {
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
svgMain.draw(function(){
    document.getElementById('logo').className='show'
});
