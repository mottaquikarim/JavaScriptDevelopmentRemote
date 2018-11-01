(function($, Drupal, document) {
    'use strict';

    var scottsBrand;
    if(window.location.href.indexOf("scotts") > -1) {scottsBrand = "#block-scotts-scotts-content";} else if(window.location.href.indexOf("miraclegro") > -1) {scottsBrand = "#block-scotts-miraclegro-content";} else if(window.location.href.indexOf("ortho") > -1) {scottsBrand = "#block-scotts-ortho-content";} else if(window.location.href.indexOf("roundup") > -1) {scottsBrand = "#block-scotts-roundup-content";}

    var brandIsolation = 'body.node--type-product ' + scottsBrand + ' .node--view-mode-full_width_content_product';

    // TLC Weather API
    if($(brandIsolation + ' #time-location-condition').length > 0) { // only executes if Time Location Condition is on the page
        // Get user zip code from cookie

        var cookie = document.cookie;
        var splitCookie = cookie.split(';');

        for(var i = 0; splitCookie.length > i ; i++) {
            if(splitCookie[i].match('Drupal.visitor.zip')) {
                zipCode = splitCookie[i];
                break;
            }
        }
        
        var zipCode = splitCookie[i].split('=');
        var userZip = zipCode[1];

        var messageCheck;

        var tlcCondition = drupalSettings.timeLocationCondition;
        if(tlcCondition && tlcCondition.product_id && tlcCondition.display && tlcCondition.display === 1 && userZip) {

            var brandID = tlcCondition.product_id;

            var requestURL = 'https://dev.scottsmylawnapp.com';
            if (window.location.hostname.indexOf('acsftest.') >= 0) {
                requestURL = 'https://dev2.scottsmylawnapp.com';
            } else if (window.location.hostname.indexOf('www.') >= 0) {
                requestURL = 'https://www.scottsmylawnapp.com';
            }
            requestURL += '/LawnApp/api/services/weatherProduct?zipCode=' + userZip + '&pid=' + brandID; // Storing the json variable

            var request = new XMLHttpRequest(); // creating the request
            request.open('GET', requestURL); // opening new request
            request.responseType = 'json'; // setting response type so that XHR knows that the server will be returning JSON. Converts into JS object.
            request.send(); // send the request.

            request.onload = function() {
                var weather = request.response;
                $(brandIsolation + ' #weather-bar').html('');
                $(brandIsolation + ' #use-banner').html('');
                statusHandler(weather.response.statusCode);
                messageHandler(weather.response.responseData.message);
                if(messageCheck !== undefined) {
                    showWeather(weather.response.responseData.currentWeather);
                }
            }
        }

        function statusHandler(statusCode) {
            if(statusCode == '01') {
                $(brandIsolation + ' #time-location-condition').show();
            }
        }

        function messageHandler(message) {
            if(message !== undefined) {
                $(brandIsolation + ' #use-banner').html(message);
            }
            messageCheck = message;
        }

        function showWeather(weatherBlocks) {
            for (var i = 0; i < weatherBlocks.length-1; i++) {

                var dayContainer = document.createElement('div');
                dayContainer.className += 'day-container';
                var WB = weatherBlocks[i];

                var day = shortDay(WB.dayOfWeek);
                var raw = '<p class="day">' + '<span class="mobile">' + day.mobile + '</span>' + '<span class="desktop">' + day.desktop + '</span>'+ '</p>';
                raw += '<p class="temp">' + WB.lowTemp + '° / ' + WB.highTemp + '°</p>';
                raw += '<div class="third-row">';
                raw += '<div class="scotts-product-icon '+ ((WB.precipitation === 0) ? 'scotts-bundle-icon-droplet-null': 'scotts-bundle-icon-droplet-full') + '"></div>';
                raw += '<p class="precipitation">' + WB.precipitation + '% </p>';
                raw += '</div>' // closing bracket for third-row div
                raw += '<div class="inner-border"></div>';
                dayContainer.innerHTML = raw;

                var weather = document.getElementById('weather-bar');
                weather.append(dayContainer);
            }

            function shortDay(dayOfWeek) {
                switch(dayOfWeek.toLowerCase()) {
                    case 'sunday':
                        return {
                            desktop: 'SUN',
                            mobile: 'S'
                        };
                        break;

                    case 'monday':
                        return {
                            desktop: 'MON',
                            mobile: 'M'
                        };
                        break;

                    case 'tuesday':
                        return {
                            desktop: 'TUES',
                            mobile: 'T'
                        };
                        break;

                    case 'wednesday':
                        return {
                            desktop: 'WED',
                            mobile: 'W'
                        };
                        break;

                    case 'thursday':
                        return {
                            desktop: 'THUR',
                            mobile: 'Th'
                        };
                        break;

                    case 'friday':
                        return {
                            desktop: 'FRI',
                            mobile: 'F'
                        };
                        break;

                    case 'saturday':
                        return {
                            desktop: 'SAT',
                            mobile: 'Sa'
                        };
                        break;

                    default:
                        return null;
                    break;
                }
            }
            function removeFirstBorder() {
                $(brandIsolation + ' .inner-border').eq(0).hide();
            }
            removeFirstBorder();
        }
    }

    // Detect time/location/condition component - add parent class for styling
    $(window).load(function(){
        $(brandIsolation + ' .section-outer-wrapper #time-location-condition #weather-bar .day-container').each(function(){
            if ($(this).length > 0) {
                $(brandIsolation + ' .scotts-vertical-blocks').addClass('tlc-active');
            }
        })
    })

})(jQuery, Drupal, document);
