/*
jquery.percentageloader.js 
 
Copyright (c) 2012, Better2Web
All rights reserved.

This jQuery plugin is licensed under the Simplified BSD License. Please
see the file license.txt that was included with the plugin bundle.

*/

/*global jQuery */
Zepto(function ($) {

/*(function ($) {*/
    /* Strict mode for this plugin */
    "use strict";
    /*jslint browser: true */

    /* Our spiral gradient data */
    $.fn.percentageLoader = function (params) {
        var settings, canvas, percentageText, valueText, items, i, item, selectors, s, ctx, progress,
            value, cX, cY, lingrad, innerGrad, tubeGrad, innerRadius, innerBarRadius, outerBarRadius,
            radius, startAngle, endAngle, counterClockwise, completeAngle, setProgress, setValue,
            applyAngle, drawLoader, clipValue, outerDiv, type ,width ,height;

    var gradient = new Image();
	
	
	var background = new Image();
	background.src = './images/bg01.png';

        settings = {
            width: 415,
            height: 415,
            progress: 0,
            value: '0',
            controllable: true,
			type: 'jjb'
        };

        if (params !== undefined) {
            $.extend(settings, params);
        } else {
            params = settings;
        }
		
		if (settings.type == 'tyb')
		{
			gradient.src = './images/bg03.png';
		} else {
			gradient.src = './images/bg02.png';
		}
		
        outerDiv = document.createElement('div');
        outerDiv.style.width = settings.width + 'px';
        outerDiv.style.height = settings.height + 'px';
        outerDiv.style.position = 'absolute';

		var imgBackgoundDiv = document.createElement('div');
		imgBackgoundDiv.style.width = settings.width + 'px';
        imgBackgoundDiv.style.height = settings.height + 'px';
        imgBackgoundDiv.style.position = 'absolute';



		background.style.width = settings.width + 'px';
		background.style.height = settings.height + 'px';

		$(this).append(imgBackgoundDiv);
        $(this).append(outerDiv);

		
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', settings.width);
        canvas.setAttribute('height', settings.height);
		canvas.style.zIndex = '1000';
		
		background.style.zIndex = '0';
		background.style.left = 0;
		background.style.top = 0;

		imgBackgoundDiv.appendChild(background);
		outerDiv.appendChild(canvas);

        valueText = document.createElement('div');
        valueText.style.width = (settings.width - 2).toString() + 'px';
        valueText.style.textAlign = 'center';
        valueText.style.height = '0px';
        valueText.style.overflow = 'hidden';
        valueText.style.left = 0;
        valueText.style.position = 'absolute';
        valueText.setAttribute("top","13rem");
        //noselection
        items = [valueText];
        for (i  = 0; i < items.length; i += 1) {
            item = items[i];
            selectors = [
                '-webkit-user-select',
                '-khtml-user-select',
                '-moz-user-select',
                '-o-user-select',
                'user-select'];

            for (s = 0; s < selectors.length; s += 1) {
                $(item).css(selectors[s], 'none');
            }
        }

		//wtf
        //outerDiv.appendChild(valueText);

        ctx = canvas.getContext("2d");

        cX = (canvas.width / 2) - 1;
        cY = (canvas.height / 2) - 1;

        innerBarRadius = cX - 40;
        outerBarRadius = cX + 1;

        startAngle =0.57 + (Math.PI * 0.5);
        endAngle = (Math.PI * 2.5) - 0.57;

        counterClockwise = false;
		//border
        ctx.lineWidth = 0;
		//angleTransformer
        applyAngle = function (point, angle, distance) {
            return {
                x : point.x + (Math.cos(angle) * distance),
                y : point.y + (Math.sin(angle) * distance)
            };
        };

        drawLoader = function () {
            //clear
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            function makeInnerTubePath(startAngle, endAngle) {
                var centrePoint, startPoint, controlAngle, capLength, c1, c2, point1, point2;
                centrePoint = {
                    x : cX,
                    y : cY
                };

                startPoint = applyAngle(centrePoint, startAngle, innerBarRadius);

                ctx.moveTo(startPoint.x, startPoint.y);

                point1 = applyAngle(centrePoint, endAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, endAngle, outerBarRadius);

                controlAngle = endAngle + (3.142 / 2.0);
                //cap
                capLength = 0;

                c1 = applyAngle(point1, controlAngle, capLength);
                c2 = applyAngle(point2, controlAngle, capLength);

                ctx.arc(cX, cY, innerBarRadius, startAngle, endAngle, false);
                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point2.x, point2.y);
                ctx.arc(cX, cY, outerBarRadius, endAngle, startAngle, true);

                point1 = applyAngle(centrePoint, startAngle, innerBarRadius);
                point2 = applyAngle(centrePoint, startAngle, outerBarRadius);

                controlAngle = startAngle - (3.142 / 2.0);

                c1 = applyAngle(point2, controlAngle, capLength);
                c2 = applyAngle(point1, controlAngle, capLength);

                ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, point1.x, point1.y);
            }

            completeAngle = startAngle + (progress * (endAngle - startAngle));

            ctx.beginPath();
            makeInnerTubePath(startAngle, completeAngle);

            //save
            ctx.save();
            //apply
            ctx.clip();
            //draw over canvas
            ctx.drawImage(gradient, 0, 0, canvas.width, canvas.height);
			//undo
            ctx.restore();
        };

        clipValue = function () {
            if (progress < 0) {
                progress = 0;
            }

            if (progress > 1.0) {
                progress = 1.0;
            }
        };

        setProgress = function (value) {
            progress = value;
            clipValue();
            drawLoader();
        };

        this.setProgress = setProgress;

        setValue = function (val) {
            value = val;
            //valueText.innerHTML = value;
        };

        this.setValue = setValue;
        this.setValue(settings.value);

        progress = settings.progress;
        clipValue();
		//init
        drawLoader();

        return this;
    };
/*}(jQuery));*/
});