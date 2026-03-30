# Web Development Project 4 - *Wizarding World Discovery*

Submitted by: **Chau Cao**

This web app: **A StumbleUpon-style discovery application that allows users to explore random characters from the Harry Potter universe using the HP-API. Users can view a character's image, House, Ancestry, and Species. By clicking on these attributes, users can add them to a custom "Ban List" to dynamically filter out and prevent similar characters from appearing in future discoveries.**

Time spent: **5.5** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [ ] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [x] Instead of filtering out API results that lacked an image URL (which reduced the pool to ~30 characters and caused frequent repeats), the app assigns a custom "Hogwarts Crest" placeholder image to image-less characters. This expanded the randomized pool to over 400 characters while still satisfying the "must display an image" requirement.
* [x] Implemented a dark-mode magical UI and replaced the default browser pointer with a custom Magic Wand cursor across the application.
* [x] Handled empty string attributes from the API by conditionally rendering them as "Unknown", ensuring all attributes remain clickable and bannable even if the API data is missing.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/U0PRZJm.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

1. I quickly realized that while the API had over 400 characters, only a small fraction had photo URLs. Filtering out characters without photos caused the randomizer to repeat the same 30 characters constantly. I solved this by injecting a placeholder image into the UI for any character missing a photo, preserving the large data pool.
2. I attempted to use a custom image for the mouse cursor, but the browser ignored it. I learned that browsers have a strict size limit for cursor images (typically 32x32 pixels). Once I resized the source image URL from 512px down to 32px and added a fallback (`auto`), the magic wand cursor worked perfectly!

## License

    Copyright [2026] [Chau Cao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.