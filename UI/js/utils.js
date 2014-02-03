   $(document).ready(function () {
       // Cache the Window object
       $window = $(window);
       $('section[data-type="background"]').each(function () {
           var $bgobj = $(this); // assigning the object
           $(window).scroll(function () {
               // Scroll the background at var speed
               // the yPos is a negative value because we're scrolling it UP!
               var yPos = -($window.scrollTop() / $bgobj.data('speed'));
               // Put together our final background position
               var coords = '50% ' + (yPos) + 'px';
               // Move the background
               $bgobj.css({
                   backgroundPosition: coords
               });
               
            var window_top = $(window).scrollTop() + 70; 
            var div_top = $('#nav-anchor').offset().top;
            if (window_top > div_top) {
                $('nav').addClass('stick');
            } else {
                $('nav').removeClass('stick');
            }
               
           }); // window scroll Ends
       });
   });
   /* 
    * Create HTML5 elements for IE's sake
    */
   document.createElement("article");
   document.createElement("section");

   /*-------*/
   function scrollToDiv(divId) {
       var target = "#" + divId;
       $('html, body').animate({
           scrollTop: $(target).offset().top - 70
       }, 1000);
   };

   /* ---------------- */

   google.setOnLoadCallback(drawChart);

   function drawChart() {
       var container = document.getElementById('education');
       var chart = new google.visualization.Timeline(container);
       var dataTable = new google.visualization.DataTable();

       dataTable.addColumn({
           type: 'string',
           id: 'Role'
       });
       dataTable.addColumn({
           type: 'string',
           id: 'Name'
       });
       dataTable.addColumn({
           type: 'date',
           id: 'Start'
       });
       dataTable.addColumn({
           type: 'date',
           id: 'End'
       });
       dataTable.addRows([
                ['Bachelor of Technology - Electrical', '7.9 CGPA, ITER , Bhubaneswar', new Date(2005, 8, 8), new Date(2009, 8, 8)],
                ['HSC', '82.8%, Jamshedpur Public School, Jamshedpur', new Date(2003, 6, 6), new Date(2005, 6, 6)],
                ['SSC', '85.8%, B.S.S.Pranav Children World, Jamshedpur',new Date(2000, 6, 6), new Date(2003, 6, 6)]
    ]);

       var options = {
           timeline: {
               groupByRowLabel: false
           }
       };

       chart.draw(dataTable, options);
   }
   /* ---------------- */

   var width = 1300,
       height = 900;
   var color = d3.scale.category20();

   var force = d3.layout.force()
       .charge(-2000)
       .friction(0.8)
       .linkDistance(100)
       .size([width, height]);

   var svg = d3.select("#viz").append("svg")
       .attr("width", width)
       .attr("height", height);

   var drawGraph = function (graph) {
       force
           .nodes(graph.nodes)
           .links(graph.links)
           .start();

       var link = svg.selectAll(".link")
           .data(graph.links)
           .enter().append("line")
           .attr("class", "link")
           .style("stroke-width", function (d) {
               return Math.sqrt(d.value);
           });

       var gnodes = svg.selectAll('g.gnode')
           .data(graph.nodes)
           .enter()
           .append('g')
           .classed('gnode', true);

       var node = gnodes.append("circle")
           .attr("class", "node")
           .attr("r", 70)
           .style("fill", function (d) {
               return color(d.group);
           })
           .call(force.drag);

       var labels = gnodes.append("text")
           .text(function (d) {
               return d.name;
           });

       console.log(labels);

       force.on("tick", function () {
           link.attr("x1", function (d) {
               return d.source.x;
           })
               .attr("y1", function (d) {
                   return d.source.y;
               })
               .attr("x2", function (d) {
                   return d.target.x;
               })
               .attr("y2", function (d) {
                   return d.target.y;
               });

           gnodes.attr("transform", function (d) {
               return 'translate(' + [d.x, d.y] + ')';
           });



       });
   };
   var graph = {
       "nodes": [
           {
               "name": "Application Development",
               "group": 0
        },
           {
               "name": "Server",
               "group": 1
        },
           {
               "name": "Browser",
               "group": 1
        },
           {
               "name": "JAVA",
               "group": 2
        },
           {
               "name": "J2EE",
               "group": 2
        },
           {
               "name": "NodeJs",
               "group": 2
        },
           {
               "name": "REST API's",
               "group": 2
        },
           {
               "name": "JAVASCRIPT",
               "group": 3
        },
           {
               "name": "CSS",
               "group": 3
        },
           {
               "name": "HTML",
               "group": 3
        },
           {
               "name": "JMS",
               "group": 3
        },
           {
               "name": "EhCache",
               "group": 2
        },
           {
               "name": "Design Patterns",
               "group": 2
        },
           {
               "name": "Collections",
               "group": 2
        },
           {
               "name": "Multithreading",
               "group": 2
        },
           {
               "name": "Test Driven Development",
               "group": 4
        },
           {
               "name": "Agile",
               "group": 4
        },
           {
               "name": "Data Structures",
               "group": 4
        },
           {
               "name": "Eclipse/Webstorm/Brackets",
               "group": 4
        },
           {
               "name": "SQL",
               "group": 5
        },
           {
               "name": "NoSql",
               "group": 5
        }


  ],
       "links": [
           {
               "source": 0,
               "target": 0,
               "value": 0
        },
           {
               "source": 1,
               "target": 0,
               "value": 0
        },
           {
               "source": 2,
               "target": 0,
               "value": 0
        },
           {
               "source": 3,
               "target": 1,
               "value": 1
        },
           {
               "source": 4,
               "target": 1,
               "value": 1
        },
           {
               "source": 5,
               "target": 1,
               "value": 1
        },
           {
               "source": 6,
               "target": 1,
               "value": 1
        },
           {
               "source": 7,
               "target": 2,
               "value": 1
        },
           {
               "source": 8,
               "target": 2,
               "value": 1
        },
           {
               "source": 9,
               "target": 2,
               "value": 1
        },
           {
               "source": 10,
               "target": 1,
               "value": 1
        },
           {
               "source": 11,
               "target": 1,
               "value": 1
        },
           {
               "source": 12,
               "target": 1,
               "value": 1
        },
           {
               "source": 13,
               "target": 1,
               "value": 1
        },
           {
               "source": 14,
               "target": 2,
               "value": 1
        },
           {
               "source": 15,
               "target": 2,
               "value": 0
        },
           {
               "source": 16,
               "target": 3,
               "value": 0
        },
           {
               "source": 17,
               "target": 3,
               "value": 0
        },
           {
               "source": 18,
               "target": 3,
               "value": 0
        },
           {
               "source": 19,
               "target": 4,
               "value": 0
        },
           {
               "source": 20,
               "target": 4,
               "value": 0
        }

  ]
   };
   drawGraph(graph);



   /* ------------ */