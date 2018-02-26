"use strict";
// primitive
var myAge;
myAge = 27;
// array
var hobbies = ["Cooking", "Shopping"];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Green"] = 101] = "Green";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
