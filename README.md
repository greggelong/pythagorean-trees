# pythagorean-trees
## some p5js sketches to visualize pythagrean-trees in recursive and non recursive ways
A non-recursive Pythagorean tree plotted by binary tracing. (see last post for more context)
This non-recursive Pythagorean tree is made converting integers to binary numbers and tracing them according to simple rules. it uses a function that  takes in an integer and  converts it first to a binary string then to an array and plots the path according to simple rules:
the initial '1' of the binary number is the first square then subsequent squares are reduced by  the square root of two. if the next number is if '0' turn right if '1' turn left. finally it prints the target number or not.

I animate the process by calling the function from draw() using frameCount, or by calling the function on a random number.
#p5js #creativecoding #math #fractal



frameCount animate
https://editor.p5js.org/greggelong/present/DS2mrw4XK

random animate

https://editor.p5js.org/greggelong/full/fgF5HZoB8
