#  Web base Interactive Design

  In summary, this code is used to create an interactive visual effect that involves dots moving around on an HTML canvas and connecting to each other within a defined area. The effect is responsive to mouse and touch interactions, and the dots' movement and connections create an aesthetic and dynamic display. This kind of code can be used for creative and artistic web-based projects, interactive designs, or simply to showcase a visually engaging animation on a webpage.*/

  
1. **Strict Mode:**
     The code starts with `'use strict';`, which is an authoritative instruction to enable strict mode in JavaScript. Strict mode helps catch common coding mistakes and "unsafe" actions, improving code quality and preventing potential bugs.
  
  2. **Constants and Math Functions:**
     - `PI2` is a constant defined as twice the value of Math.PI, which is used for circular calculations.
     - `map()` is a function that takes a value (`s`) and maps it from a range defined by `a1` and `a2` to a new range defined by `b1` and `b2`. This function is used to map values from one range to another, commonly used for scaling values.
  
  3. **Class Definitions:**
     - `Connect` class: This class encapsulates the main functionality of the graphical effect. It manages the dots, connections between them, and their behavior.
       - The constructor initializes various properties and settings related to the canvas, dots, and connection areas.
       - The `resize()` method updates canvas and element sizes based on the window dimensions.
       - `onMove()` and `onLeave()` methods handle mouse or touch movement and leave events, updating the destination coordinates of the connection area.
       - `connectDots()` method connects dots with lines based on certain conditions.
       - `update()` method orchestrates the animation loop, updating the dots and connections.
     - `Dot` class: This class defines the characteristics and behavior of individual dots.
       - The constructor initializes the properties of a dot, including its position, velocity, radius, and color.
       - `draw()` method draws the dot on the canvas.
       - `update()` method updates the position of the dot based on its velocity and ensures it bounces off canvas boundaries.
  
  4. **Canvas Setup and Interaction:**
     - The code selects the canvas element and gets its 2D rendering context (`ctx`).
     - An instance of the `Connect` class is created (`connect`), which manages the graphical effect.
     - Event handlers are defined to handle mouse and touch interactions.
     - A window resize event listener triggers the `resize()` method of the `Connect` instance.
  
  5. **Animation Loop:**
     - The code defines a self-invoking function that serves as the animation loop using `requestAnimationFrame()`.
     - Inside the loop, the `update()` method of the `Connect` instance is called to update the graphical effect.
