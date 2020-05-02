# Color Therapy (README draft)

## Introduction
Color Therapy was born out of a jealousy for people with [synthesia](https://en.wikipedia.org/wiki/Synesthesia), and a love for [playlist applications](https://github.com/kabirvirji/singlespotify). More importantly though, we wanted to generate accurate playlists based on emotions and colors, since good music is always such a mood lifter.

## Using Spotify's API
We decided to use Spotify's [Get Recommendations Based on Seeds](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/) endpoint to search for tracks. The "seeds" are a combination of up to 5 artists, tracks, or genres. We decided to use the user's top artists as seeds, since artists have many tracks, and an artist can span multiple genres. 

Additionally, this endpoint takes "tuneable track attributes" as query parameters. This means we can search with filters such as acousticness, danceability, and tempo. The two most interesting track attributes are "energy" and "valence". Energy in this context is measured by perceptual intensity, and valence is measured by musical positiveness. More specifically:
> Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

Working with this endpoint in mind, we devised a way to calculate energy and valence using colors.

## Understanding valence and color
We know that the user will be picking colors, however colors themselves are very subjective - they have no meaning without *context*. There are some generalizations (red is angry, blue is sad, etc), however one of our goals was to make the generated playlists personal. 

![Alt Text](quizGif.gif)

The purpose of the color quiz is to make sense of how the user sees color. The user is asked to rank various colors from sad to happy, internally stored as a value between `0.0` and `1.0`. This value will be the **individual** valence for each "base color" in the quiz. The base colors are as follows:
- `#FF0000 red` 
- `#0000FF blue` 
- `#FFFF00 yellow` 
- `#00FF00 green`
- `#FFFFFF white`
- `#000000 black`

These base colors were cleverly chosen to cover the RGB color model, primary colors, and black/white. The intention here is to have the widest color range possible. 

Assigning valence values to base colors gives our colors *context*, so now we can calculate the **closest** base color to any random color.

> Obtaining the previously mentioned attribute "energy" is straightforward. The first slider of the quiz asks the user about their energy level, and we pass that value directly into Spotify's query parameters.


## Calculating color difference and target valence
We started by calculating the [color difference](https://en.wikipedia.org/wiki/Color_difference) between one chosen color and one base color. Since we are using RGB values, we calculated the [Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance) between the two colors to find their difference. However, after doing some research we realized that Euclidean Distance may not produce the most accurate results for our use case since RGB is not "perceptually uniform". In other words, using Euclidean Distance makes sense for a screen, not for our eyes. We want to relate a chosen color to its **perceptually closest base color**. For this, we need to use [Delta E](http://www.colorwiki.com/wiki/Delta_E:_The_Color_Difference), which calculates **perceived** color difference.

| Delta E | Perception                             |
|:-------:|----------------------------------------|
|  <= 1.0 | Not perceptible by human eyes.         |
|  1 - 2  | Perceptible through close observation. |
|  2 - 10 | Perceptible at a glance.               |
| 11 - 49 | Colors are more similar than opposite  |
| 100     | Colors are exact opposite              |

> source: http://zschuessler.github.io/DeltaE/learn/

We extended this idea of color difference to multiple colors, and were able to calculate an average/target valence value from a collection of user picked colors. The following is an example:

![valence_example](valenceExample.png)

Remember that each "base color" has its own valence value (from the color quiz). The closest "base color" for the user picked colors `u1`, `u2`, `u4`, and `u5` is `b3`, yellow. However, the closest "base color" for `u3` is `b1`, red. This is because the **delta e** of `u3` and `b1` was the smaller compared to `b3`, and the rest of the base colors. The distinction here is important since we care about **perceived** color difference.

For the above example we can calculate valence like so:

```
targetValence = (getValence(b3) * 4 + getValence(b1)) / 5
```

A more general formula for valence would look like this:

![targetValence = \frac{1}{n} * \sum_{i=1}^{n} getValence(baseColor_i)](https://render.githubusercontent.com/render/math?math=targetValence%20%3D%20%5Cfrac%7B1%7D%7Bn%7D%20*%20%5Csum_%7Bi%3D1%7D%5E%7Bn%7D%20getValence(baseColor_i))


Now that we've calculated a valence value, we make a request to get recommendations from Spotify's endpoint. From there we create and populate a playlist using the API response, and we're done!

One highlight is the cover of the generated playlist will actually be the colors the user selected:

![colorHeader](colorHeader.png)

Accomplishing this involved creating an invisible `HTML` canvas element, and induvidually coloring its pixels with RGB values from the chosen colors. Then, converting the image to a `base64` encoded string to make a `PUT` request to Spotify with. [There's more details in the code.](https://github.com/kabirvirji/colortherapy/blob/master/src/components/ColorPicker/ColorPicker.js#L81)

Additionally, the UI is reminiscent of the [old Friv Games](oldfriv.png), but with [randomly generated colors](https://github.com/kabirvirji/colortherapy/blob/master/src/components/ColorPicker/ColorPicker.js#L31) and [infinite scrolling](https://github.com/kabirvirji/colortherapy/blob/master/src/components/ColorPicker/ColorPicker.js#L69) 😊

## Final thoughts

Moving forward, it would be interesting for the quiz to include more questions, and for the user to pick more colors. This would increase valence accuracy, resulting in more accurate playlists. Additionally, if we added a backend we could generate unique data about the relationships between music, color, and valence.

During testing I ended up with **lots** of test playlists. To deal with this I wrote a python package to mass delete Spotify playlists using RegEx. You can install it if you have Python installed `$ pip install spoticlean` or check out the repository [here](https://github.com/kabirvirji/spoticlean).

Despite the relationship between music and color being subjective, we hope people can connect with the playlists generated! Thank you for reading, if you enjoyed [colortherapy.io](https://colortherapy.io/) please star our repo and share with your friends!



 