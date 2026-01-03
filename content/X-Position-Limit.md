# X Position Limit
---

Not to be confused with [Float Inaccuracy](Float-Inaccuracy) or [Scroll Speed Bug](Scroll-Speed-Bug).

X Position Limit (aka. X-Pos Wall) is a side-effect from [float inaccuracy](Float-Inaccuracy) that causes the player to completely stop at certain coordinates.
Until 2.2, X Position Limit happened on specific coordinates, speed and TPS. After the update, TPS had been locked to 240 and now it's only related to current player velocity.

This bug is closely related to [Scroll Speed Bug](Scroll-Speed-Bug) since it also affects movement on far coordinates.

## Usage
As an example, the level "Sakupen Wall CC" by M0nSt33r could be used. This level forces the player to change their FPS when at the wall to freeze their X position and let them climb it. 
After climbing, they can change their FPS back to normal to let them beat this level. Showcase of this level: https://www.youtube.com/watch?v=hP_HxuxmyaY

X Position Limit can be abused to make [X Position Timers](X-Position-Timers) that let the player finish the level only after defined amount of time had passed, afterwards "removing" the X Position Limit by increasing player speed. 
This makes the level be beatable with an X-Pos Wall and without changing FPS midway through the level.