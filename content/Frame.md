# Frame
---

Frame is a fixed time span in which all actions happen. A frame length is dependent on your FPS / TPS. 
FPS and TPS difference is in their types. FPS stands for Frames Per Second and means render frames. TPS stands for Ticks Per Second and means physics frames.

They both could be calculated using this simple formula: 
\( t = \frac{1}{x} \)
, where t is frame length and x is the current FPS or TPS value.

Until 2.2, TPS was not limited by the game, and was limited to your monitor refresh rate. After the update, TPS is always 240 but could be affected by TimeWarp trigger [1].

## Reference
*Relevant before 2.2*:

60 TPS: 0.01666 seconds

144 TPS: 0.0069444 seconds

360 TPS: 0.002777 seconds

*Relevant after 2.2*:

240 TPS: 0.0041666 seconds

*Extended*:

720 TPS: 0.0013888 seconds

1000 TPS: 0.001 seconds

1440 TPS: 0.00069444 seconds

7200 TPS: 0.00013888 seconds

## Annotations
1) Time warp <1.0x modifies TPS by this formula 
\( TPS = \frac{240}{w} \)
, where w is time warp speed.