UDACITY FRONT END P3: Frogger Game
==================================

Screen Shot
-----------
![This is a screenshot of the game](/images/Capture.jpg "Game Screenshot")

How to Run
----------
**Open index.html**

How to Play
-----------
- Avoid the bugs crossing the road.
- Use arrow keys to navigate the player.
- Run into Gems to pick them up.
- Navigate player to the water tile.
- *CAUTION* Running into enemies resets the location of gems.

How I approached the problem:
-----------------------------

1. Identify what properties each class needs (location, velocity, input responses)
2. Implement classes required and place them at an initial position
3. Instantiate the classes: 3 enemies and 1 player for this game.
4. Implement update function so that requestAnimationFrame function runs smoothly.
5. Modify update function so that when completely outside of the canvas, enemies revert back to initial position.
6. Implement player movement by changing the location of the player object according to input handled
7. Wallchecking function needs to be implemented in order for the player object to not overflow the canvas.
8. Reset player position function needs to be implemented when the player object reaches the end of the map.
9. Collision detection needs to be implemented so that each enemy class has a defined region and if player object position falls within the range, collision is set to true.
10. Added Gem Element!
