$(document).ready(function(){
	$('#menu_dropdown').hide();

	setTimeout(function() {
		$( "#info_text, #enny" ).animate({
    	opacity: 1,
    	top: "-=50px"
  	}, 600, function() {
    	// Animation complete.
  	});
	}, 2000);


		//animate scroll button
			function downAnimate(){
  			$( '#down').delay(4000).animate({
  				top: '+=30px'
  			}, 500, function() {
						$('#down').animate({
								top: '-=30px'
								},500, function(){
										downAnimate();
								});
					});
				}

				downAnimate();


				//animate logo  ????????????
				$( "#logo" ).click(function() {
  				$("#logo" ).animate({
    				rotate: ('180deg'),
  					}, 5000, function() {
    				// Animation complete.
  				});
				});


				//icons description pop up


			function removeText(){
				$('#symbol_underline').fadeOut();
			}

				$('#icon_coding').hover(
				  function() {
						removeText();
				    $('#coding_description').css('opacity', '1');
				  }, function() {
				    $('#coding_description').css('opacity', '0');
				  });

					$('#icon_strategy').hover(
					  function() {
							removeText();
					    $('#strategy_description').css('opacity', '1');
					  }, function() {
					    $('#strategy_description').css('opacity', '0');
					  });

						$('#icon_design').hover(
						  function() {
								removeText();
						    $('#design_description').css('opacity', '1');
						  }, function() {
						    $('#design_description').css('opacity', '0');
						  });

							$('#icon_analytics').hover(
							  function() {
									removeText();
							    $('#analytics_description').css('opacity', '1');
							  }, function() {
							    $('#analytics_description').css('opacity', '0');
							  });




				//menu slide down and slide up
			$('#menu_icon').mouseenter(function(){
				$('#menu_dropdown').slideToggle('slow');
			});

			$('#menu_dropdown').mouseleave(function(){
				$('#menu_dropdown').slideToggle('slow');
			});

			//scrolling down with button
			$("#down_button").click(function() {
    		$('html, body').animate({
        	scrollTop: $("#square1").offset().top
    		}, 2000);
			});

			//scrolling up with button
			$("#footer").click(function() {
				$('html, body').animate({
					scrollTop: $("#top_div").offset().top
				}, 2000);
			});




// scrolling using the menu dropdown
	$('#list_about_me').click(function() {
		$('html, body').animate({
				scrollTop: $("#square1").offset().top
		}, 2000);
	});

	$('#list_project_1').click(function() {
		$('html, body').animate({
				scrollTop: $("#project_1").offset().top
		}, 2000);
	});

	$('#list_project_2').click(function() {
		$('html, body').animate({
				scrollTop: $("#project_2").offset().top
		}, 2000);
	});

	$('#list_project_3').click(function() {
		$('html, body').animate({
				scrollTop: $("#project_3").offset().top
		}, 2000);
	});

	$('#list_project_4').click(function() {
		$('html, body').animate({
				scrollTop: $("#project_4").offset().top
		}, 2000);
	});

	$('#list_curriculum').click(function() {
		$('html, body').animate({
				scrollTop: $("#curriculum_div").offset().top
		}, 2000);
	});


	// portfolio image changes
$('#adventuring').mouseenter(function() {
	$( "#adventuring").attr( "src", "pictures/project_adventuring_hover.png");
});
$('#adventuring').mouseleave(function() {
	$( "#adventuring").attr( "src", "pictures/project_adventuring.png");
});


$('#miljosymboler').mouseenter(function() {
	$( '#miljosymboler').attr( "src", "pictures/project_miljosymboler_hover.png");
});
$('#miljosymboler').mouseleave(function() {
	$('#miljosymboler').attr( "src", "pictures/project_miljosymboler.png");
});


$('#weathermap').mouseenter(function() {
	$( '#weathermap').attr( "src", "pictures/project_weathermap_hover.png");
});
$('#weathermap').mouseleave(function() {
	$('#weathermap').attr( "src", "pictures/project_weathermap.png");
});


$('#hangman').mouseenter(function() {
	$( '#hangman').attr( "src", "pictures/project_hangman_hover.png");
});
$('#hangman').mouseleave(function() {
	$('#hangman').attr( "src", "pictures/project_hangman.png");
});




// Chartist graph

// new Chartist.Bar('.ct-chart', {
//   labels: ['HTML & CSS', 'jQuery', 'Javascript', 'node.js', 'D3.js', 'Illustrator', 'Sketch', 'Google Analytics', 'Working in Teams'],
//   series: [
//     [90000, 60000, 30000, 20000, 20000, 70000, 20000, 50000, 100000],
//   ]
// }, {
//   stackBars: true,
//   axisY: {
//     labelInterpolationFnc: function(value) {
//       return (value / 1000) + '%';
//     }
//   }
// }).on('draw', function(data) {
//   if(data.type === 'bar') {
//     data.element.attr({
//       style: 'stroke-width: 10%'
//     });
//   }
// });
//
// });


// D3.js

var dataset = [85, 90, 50, 10, 20, 60, 70, 60, 90, 20, 40];
var textData = ["HTML5", "CSS", "Javascript", "Node.js", "Terminal", "Data analysis", "Design", "Illustrator", "Collaboration", "SEO", "Marketing"];

var svgWidth = 700, svgHeight = 190, barPadding = 30;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", 40 + svgHeight);

//making the bars adjust to svg height and width

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

//create bars
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    })
		.on('mouseover', function(d){
			// alert(d);
		  //   $('#square2').append('<p>' + d + '</p>');
		});
		// .on('mouseleave', function(d, i){
		// 		d3.select(this).attr('fill', 'rgba(124,44,153,1)')
		// });;

//append text to the data
		var text = svg.selectAll("text")
		    .data(textData)
		    .enter()
		    .append("text")
		    .text(function(d) {
		        return d;
		    })
		    .attr("y", svgHeight + 30)
		    .attr("x", function(d, i) {
					 return barWidth * i;
		    })
		    .attr("fill", "white")
				.attr("class", "bar-chart-label");

var hover = svg.selectAll('rect')
						.style("");

//end of jquery I think
});
