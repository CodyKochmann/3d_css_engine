|Project Name|3d_css_engine|
|---|---|
|Description|Large scale CSS3 based game engine for html games. |
| Author | Cody Kochmann |
| Last Modified | Sat May 9 19:59:10 UTC 2015 |
| Version | 0.8 |
| Contact | kochmanncody@gmail.com |
| License | cody.pw/license |


This was created because I find squeezing complex CSS rendering of 3d objects into JavaScript's single thread easier than trying to do vector calculus with clever timing. In order to create the 3D models, there is one original div for each 3d object. Inside that div are divs positioned by transform3d functions in relation to that spot in order to create small pieces of each 3D model (such as a window on a house). 

There were two main problems that I ran into while designing this to be snappy while still managing to render a lot of information:
	1. If you stacked divs to be positioned relationally to each other too high (I found the limit for the iPad mini 2 was about 7 levels deep) the GPU would become overloaded and simply give up on any transforms.
	2. If you avoided the div stacking entirely, the CPU would quickly become overloaded with attempting to calculate where the next position of each part of each object would be. 

The trick to being able to stack both relative div positions not overloading the GPU or the CPU was to create an architecture that consisted of purpose based levels that held everything together. On top of that, adding a limit of 32 child nodes per element on the topmost level resulted in a solid and stable system that was able to still have room to compute the game itself and be immediately ready for touch events. 

# Div level layout
	1. Scene container
	2. Game map
	3. 3D object containers
	4. 3D object pieces

Note: Complex 3D object pieces that would make more sense being one more level deep to keep those parts together (or just to be a canvas) will add an unnecessary level of complexity for the GPU that will degrade the stability of the engine. Tests have shown that pre-rendering the graphics in a canvas and using extracted base64 encoding to make a pre-rendered background for a div works quite well. I haven't found time to engineer a pre-rendering function that does this yet, but it's on the list of things to build.

In the demo in index.html, you'll be able to test things out for yourself to see that creating a 3D game world purely out of html elements would be a lot easier than most would assume. There is a menu to the left that activates certain generators to see different building processes that can be used. 

Warning: The "Forest" button was built to show how much time an array of unique 3D objects could be rendered on the fly. The function was designed to test the limits of hardware and the stability of the system. If the button seems unresponsive, give it a few seconds to finish because the algorithm makes the browser run well over 20,000 calculations to generate 400 unique trees. If pressed again, it doubles the workload. (purposefully left that way in order to test the resilience of different browsers and devices)