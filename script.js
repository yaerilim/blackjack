$(document).ready(function() {
    radomize_cards();
});
var card_arr = [
    {src: 'img/c2.png', value: 2},{src: 'img/c3.png', value: 3},{src: 'img/c4.png', value: 4},{src: 'img/c5.png', value: 5},
    {src: 'img/c6.png', value: 6},{src: 'img/c7.png', value: 7},{src: 'img/c8.png', value: 8},{src: 'img/c9.png', value: 9},
    {src: 'img/c10.png', value: 10},{src: 'img/c_ace.png', value: 1 || 11},{src: 'img/c_jack.png', value: 10},{src: 'img/c_king.png', value: 10},
    {src: 'img/c_queen.png', value: 10},{src: 'img/d2.png', value: 2},{src: 'img/d3.png', value: 3},{src: 'img/d4.png', value: 4},{src: 'img/d5.png', value: 5},
    {src: 'img/d6.png', value: 6},{src: 'img/d7.png', value: 7},{src: 'img/d8.png', value: 8},{src: 'img/d9.png', value: 9},
    {src: 'img/d10.png', value: 10},{src: 'img/d_ace.png', value: 1 || 11},{src: 'img/d_jack.png', value: 10},{src: 'img/d_king.png', value: 10},
    {src: 'img/d_queen.png', value: 10},{src: 'img/h2.png', value: 2},{src: 'img/h3.png', value: 3},{src: 'img/h4.png', value: 4},{src: 'img/h5.png', value: 5},
    {src: 'img/h6.png', value: 6},{src: 'img/h7.png', value: 7},{src: 'img/h8.png', value: 8},{src: 'img/h9.png', value: 9},
    {src: 'img/h10.png', value: 10},{src: 'img/h_ace.png', value: 1 || 11},{src: 'img/h_jack.png', value: 10},{src: 'img/h_king.png', value: 10},
    {src: 'img/h_queen.png', value: 10},{src: 'img/s2.png', value: 2},{src: 'img/s3.png', value: 3},{src: 'img/s4.png', value: 4},{src: 'img/s5.png', value: 5},
    {src: 'img/s6.png', value: 6},{src: 'img/s7.png', value: 7},{src: 'img/s8.png', value: 8},{src: 'img/s9.png', value: 9},
    {src: 'img/s10.png', value: 10},{src: 'img/s_ace.png', value: 1 || 11},{src: 'img/s_jack.png', value: 10},{src: 'img/s_king.png', value: 10},
    {src: 'img/s_queen.png', value: 10}
];
var dealer_arr = [];
var you_arr = [];
var dealer_back = [];
var dealer_back_number = dealer_back[0].value;
var dealer_number = 0;
var you_number = 0;
function radomize_cards() {
    card_arr.sort(function(a, b){return 0.5 - Math.random()});
}
function first_round(){
    setTimeout(function(){
        you_arr.push(card_arr[0]);
        $('.you').append($('<img>').attr({'src': card_arr[0].src}));
        you_number = card_arr[0].value;
        card_arr.splice(0,1);
        dealer_arr.push(card_arr[0]);
        dealer_back.push(card_arr[0]);
        $('.dealer').append($('<img>').attr({'src': 'img/back.png'}).addClass('dealer_back'));
        dealer_number = card_arr[0].value;
        card_arr.splice(0,1);
        play_cards();
    }, 3000);
}
function play_cards() {
    setTimeout(function () {
        you_arr.push(card_arr[0]);
        $('.you').append($('<img>').attr({'src': card_arr[0].src}));
        you_number += card_arr[0].value;
        card_arr.splice(0,1);
        dealer_arr.push(card_arr[0]);
        $('.dealer').append($('<img>').attr({'src': card_arr[0].src}));
        dealer_number += card_arr[0].value;
        card_arr.splice(0,1);
    }, 1000);
}
function hit(){
    you_arr.push(card_arr[0]);
    $('.you').append($('<img>').attr({'src': card_arr[0].src}));
    you_number += card_arr[0].value;
    card_arr.splice(0,1);
    setTimeout(function () {
        if(you_number === 21){
            alert('you won');
        }else if(you_number > 21){
            alert('dealer won');
        }
    },2000);
    // else if(dealer_number-dealer_back_number>=19){
    //     setTimeout(function () {
    //         $('.dealer_back').attr({'src': dealer_back[0].src});
    //         if(dealer_number === 21){
    //             alert('dealer won!');
    //         }
    //     },1000)
    // }
    dealer_arr.push(card_arr[0]);
    $('.dealer').append($('<img>').attr({'src': card_arr[0].src}));
    dealer_number += card_arr[0].value;
    card_arr.splice(0,1);
    setTimeout(function () {
        if(dealer_number-dealer_back_number>21){
            alert('you won');
        }
    },2000);
}
function stand(){
    $('.dealer_back').attr({'src': dealer_back[0].src});
    setTimeout(function () {
        if(dealer_number>you_number && dealer_number<=21){
            alert('dealer won');
        }else if(dealer_number === 21){
            alert('dealer won');
        }else if(dealer_number>21){
            alert('you won');
        }else if(dealer_number<you_number && dealer_number<21){
            $('.dealer').append($('<img>').attr({'src': card_arr[0].src}));
            dealer_number += card_arr[0].value;
            card_arr.splice(0,1);
            stand();
        }
    },1500);
}
// function toggle(){
// $('.player_mode_select').slideToggle("slow");
// }