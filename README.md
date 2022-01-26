# Ask Phill Assignment – Hayley Miller

For this assignment, I was tasked to remake the mobile menu from STOX Energy Socks website.

## Step 1: Set Up + Clean Up
Step 1 was to make my repository and create my React app. Once I had that, I removed unnecessary files from my React app, added a custom favicon (my logo), renamed the app, etc.

## Step 2: Files + Data
From there, I went to the STOX website and saved images from their menu to use in my recreation. I also saved their logo and a shopping cart icon for the header. Then, I made a data file with mock data from the site.

## Step 3: Components File Structure + Set Up
Next, I created my component folder and all the components I would need for the assignment. I linked all of my components to the other necessary components and then rendered my outermost MenuWrapper within my App.

## Step 4: SCSS + Header Styles
I built the header first, then installed Sass and created a .scss file for my header and added my initial styles. I also made initial styles for the MenuWrapper component at this time.

## Step 5: Slider
Working down the page, I worked on rendering the correct data for the slider. I rendered each image and a BG that would have the gradient effect on top of the image. Then I positioned the text on top of the image.

## Step 6: Dropdown - Outer
Next, I rendered a dropdown button for each dropdown section. I also created the styles for the dropdown button. The square is a temporary placeholder for the arrow.

## Step 7: Dropdown - Submenu
I passed data from each dropdown button to a submenu component that renders each submenu item and the product stock for that item. I worked on the initial styles for the dropdown submenu.

## What's Left?
If I had more time, the next thing to work on was getting the dropdowns to smoothly open and close. I wanted a nice slide down effect. I would have set an active state for whichever dropdown button was clicked and then updated the styles for what a dropdown submenu looked like when it was active and inactive.

Then, I would have created a landing screen and added the open and close functionality to the hamburger button. 

Finally, I would have updated styles further to more closely match the existing design. I hadn't updates fonts or colors yet. The black is too harsh. Additionally, I would have made a reset.scss file to house basic styles and mixins.