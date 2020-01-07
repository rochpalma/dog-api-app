'use strict';

function getDogImages() {
    let num = $('#dogs').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Cannot retrieve dog images. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').empty();
    let dogsArr = responseJson.message;
    for(let element of dogsArr){
        $('.results-img').append(`<img src="${element}">`);
    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    });
}

$(function() {
    console.log('Ready to retrieve cute dog images!');
    watchForm();
});
