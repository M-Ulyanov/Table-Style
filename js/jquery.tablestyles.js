(function($){
	jQuery.fn.tablestyles = function(options){
		var options = $.extend({

			//Global
			theme : 	null,
			size  : 	null,
			reset : 	null,

			//User settings
			tableWidth: 	null,
			tableBorder: 	null,
			trBorderBottom: null,
			trBorderLeft:   null,
			thBorderLeft:   null, 
			fontSize: 		null,
			fontSizeH: 		null, 
			bgRow: 			null, 
			bgRowH: 		null, 
			bgRowEven: 		null,
			bgRowOdd:  		null,
			colorText: 		null,
			colorTextH: 	null, 
			colorTextEven:  null,
			colorTextOdd: 	null,
			bgColFirst: 	null, 
			colorColFirst:  null,
			wColFirst:      null,  
			bgColLast: 		null,
			colorColLast: 	null

		},options);

		return this.each(function(){


			//Global
			$(this).attr('class', options.theme);
			if(options.theme == 'GreyGreen-Simple'){
				$(this).find('tr > td:last-child, tr > th:last-child').addClass('greyG-last');
			}
			else if(options.theme == 'DarkGrey-Simple'){
				$(this).find('tr:last-child td:first-child')
				.addClass('priceH');
				$(this).find('tr:last-child td:not(:first-child)')
				.addClass('priceN');
				$(this).find('tr').eq(1).children('td').eq(0)
				.addClass('rad');
			}

			else{
				options.theme = null;
			}

			if(options.reset == 'yes'){
				$(this).css('border-collapse', 'collapse');
			}
			else{
				options.reset = null;
			};

			if(options.size == 'small'){
				$(this).find('th, td').css('padding', '5px');
			}
			else if(options.size == 'middle'){
				$(this).find('th, td').css('padding', '10px');
			}
			else if(options.size == 'large'){
				$(this).find('th, td').css('padding', '15px');
			}


			//Users
			$(this).css('width', options.tableWidth + '%');
			$(this).css('border', options.tableBorder);

			$(this).find('tr:not(:last-child)')
			.css('border-bottom', options.trBorderBottom);

			$(this).find('tr > td:not(:first-child)')
			.css('border-left', options.tdBorderLeft);

			$(this).find('tr > th:not(:first-child)')
			.css('border-left', options.thBorderLeft);

			$(this).find('tr').css('font-size', options.fontSize + 'px');
			$(this).find('th').css('font-size', options.fontSizeH + 'px');
			$(this).find('tr td').css('background', options.bgRow);
			$(this).find('th').css('background', options.bgRowH);
			$(this).find('tr:even td').css('background', options.bgRowEven);
			$(this).find('tr:odd td').css('background', options.bgRowOdd);
			$(this).find('tr td').css('color', options.colorText);
			$(this).find('tr th').css('color', options.colorTextH);
			$(this).find('tr:even > td').css('color', options.colorTextEven);
			$(this).find('tr:odd > td').css('color', options.colorTextOdd);

			$(this).find('tr > td:first-child').css({
				'background': options.bgColFirst,
				'color': 	  options.colorColFirst,
				'width': 	  options.wColFirst + 'px'
			});

			$(this).find('tr > td:last-child, tr > th:last-child')
			.css({
				'background':   options.bgColLast,
				'color': 		options.colorColLast
			});

		});

	};
})(jQuery)