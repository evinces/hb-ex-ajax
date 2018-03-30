"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {
    $('#fortune-text').load('/fortune');
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(e) {
    e.preventDefault();
    
    $.get('/weather.json', $("#zipcode-field").serialize(), function (r) {
        $('#weather-info').html(r.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(e) {
    e.preventDefault();

    $.post('/order-melons.json', $('#order-form').serialize(), function (r) {
        $('#order-status').html(r['msg']);
        if (r['code'] === "ERROR") {
            $('#order-status').addClass('order-error');
        } else {
            $('#order-status').removeClass('order-error');
        }
    });
}

$("#order-form").on('submit', orderMelons);
