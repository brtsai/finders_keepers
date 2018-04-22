# Finders Keepers

## Background and Overview

Finders Keepers is a webapp that utilizes the MERN that allows users to post free
giveaways for others to pick up. Users with an account can create a post of a picture of an
item they wish to give away for free. Causal users, users without an account, will
see a Google map and live feed of posts within their area.

## Functionality
  + Users will be able to login and sign up using google OAuth.

  + Listers will be able post their Freebie with an image and pin it onto the map.

  + Users will have a dashboard and profile that will show their giveaway score. This score will be an aggregate of up/down votes from other users who have picked up their Freebies.

  + Users will be able to comment and upvote/downvote on Freebie listings.

  + Users can select a pin on the map interface and indicate that they are going to pick it up.

  + When a user selects a Freebie, it will show an estimated availability time based on the location of other users who have indicated that they will `Pick Up`.

  + Identify items in pictures using google Vision API, to allow easy form prefilling when uploading a Freebie posting.
  
  + Allow users to pin their Freebies at a location within the google maps interface, and doing so will subsequently update the Freebies side-feed to show their item at the top.  

## MVPs
  + Display listing with comments
  + Upvote/Downvote Listings
  + Listings CRUD actions
  + Have main UI map 
  + Auto-categorize listings by image
  + Form for Users to add listing
  + Searchable live listings feed 
  + User Auth
  + User Profile 

## Technologies and Technical Challenges

### Technologies

- MongoDB - Database
- Express.js - Routing
- React - Frontend Views
- Redux - Frontend State Management
- Node.js - Controllers
- Mongoose - MongoDB driver/ORM for Node.js
- Google Maps API
- Google Vision API
- Paper Clip / AWS - for image handling

### Challenges

- Displaying listings in realtime on the google maps using the google maps api.
- Having cloud vision API to detect images and automatically categorize pictures.
- Creating different google maps markers based on categories.
- Learning and implemeting the MERN stack.


## Things Accomplished Over the Weekend

+ wireframes


## Group Members and Work Breakdown

### Nima Partovi
### Steven Choi
### Bryan Tsai
### Yujie Zhu

### 
