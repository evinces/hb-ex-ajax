"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {
    $.get('/fortune', (r) => $('#fortune-text').html(r));
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(e) {
    e.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function (r) {
        $('#weather-info').html(r.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(e) {
    e.preventDefault();

    let formData = $('#order-form').serialize();

    $.post('/order-melons.json', formData, function (r) {
        $('#order-status').html(r['msg']);
        if (r['code'] === "ERROR") {
            $('#order-status').addClass('order-error');
        } else {
            $('#order-status').removeClass('order-error');
        }
    });
}

$("#order-form").on('submit', orderMelons);
