# Units
---

Unit is a metric that is used to define distance. 1 grid space (1 full block) is equivalent to 30 units.

Units are usually defined as a 32-bit floating-point value, and can go and as high as 2^128 (3.402823466e+38), same for the negatives. 
As a side-effect from being a `float` data type, they are subject to [loss of precision](Float-Inaccuracy). 
Therefore objects that use this metric as x/y position inherit bugs related to [float inaccuracy](Float-Inaccuracy). 

Note that objects placed further than 2^24 units on horizontal axis are not effective due to [X position limit](X-Position-Limit). 

## Information & Usage
Until 2.2, Move Trigger only had the ability to move objects in increments of 3 units. 
After the update, an option had been added called "Small Step", which gave the ability to directly move objects in units. 
Though, you still cannot move objects precisely (e.g. 0.005 units) without using [cheat software](Cheat-Software). 

