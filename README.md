# Jamcamp

A fullstack bandcamp.com replica.

[Live Site](https://jamcamp.herokuapp.com/)

### Overview

Jamcamp was created as a repository for Grateful Dead and other jam band albums using Bandcamp as a model. Music found on the site is sourced from archive.org.

In the Jamcamp product environment, users can: 

  * Sign up or log into their user account, either as a fan or as an artist. 
  * Explore the site as a demo user.
  * Follow other users and bands.
  * Add albums to their profile collection.
  * View featured and notable sets on the splash page. 
  * Play songs through the custom audio player on album pages. 
  
### Technologies

Jamcamp uses the Ruby on Rails API on the backend with React/Redux as the web framework on the frontend.

- Backend technologies
  * Database: PostgreSQL
  * Routing, Controllers, and Models: Rails
  * Auth: BCrypt
- Frontend technologies
  * React with Redux for state management
  * jQuery(only for AJAX requests)
  * jBuilder for backend requests
  * Styling and animations done with SCSS/CSS

### Highlights

TBC (graphic + code + description)

### Features

* User Authentication 
  * Effectively logs in user as a fan or an artist 
  * Users can sign in using the demo log in


* Modals
  * Implemented draggable modals using an outside draggable library (React-draggable) in order to mimic user experience in the Bandcamp production environment. 
  * Implemented modals for user auth as well as other pop ups.
  
* Profile Page (Editable)
  * Users can sign up as a fan or artist
  * Users can edit the information presented on their profile page, such as user name, location, website, and bio. 
  * Profile page edit button insights a change in the Redux state to open or close the edit function within the profile page.  
  
* Profile Page (Grid)
  * React NavLink tabs route the “grid” section of the page, mapping relevant props to print child components to the window (i.e., collections, discography, followers, and followees).
  * Tabs are only present if a user has one or more elements within those props. The exception to this is the Collections page, which will always appear even with no music, and provides a link to redirect to the home page so user is prompted to find music to add to their collection. 
  * **Child elements in the grid mimic the UI of Bandcamp’s site: When a user removes a collect or a follow from their profile page, the database and state updates but those albums or users remain on the page, allowing users to re-add or re-follow in case their action was unintentional.**
  
* Collections & Follows
  * Two separate joins tables that allow the user to collect albums and followers/followees. 

* **Width-responsive CSS**
  * The website has responsive CSS. 
  * Using media queries, when a user shrinks or expand the profile page, the grid can scale from having three up to five columns.
  * On the home page, image scaling is responsive to window size change, and the Notable Sets section will also scale based on window size.  

* Logo design
  * I designed the terrapin logo featured in the header and footer using Adobe Photoshop.

* Redirects
  * When a user is not logged in and attempts to follow or collect an item, a modal will appear prompting the user to sign up, log in, or use the demo log-in. 
  * If a user types gibberish onto the end of the url, the user will be redirected to an error page with dancing bears, which prompts the user to return to the home page.

* Audio Player
  * Album pages feature a custom audio player for users to play Grateful Dead music, which will automatically load the first song in the queue. 
  * Users can set other songs onto the audio player by clicking on tracks in the album list. 
  * Users can move forward and backward through the queue.
  * The player features a clock at the top, indicating the listener’s location in the track.
  * The slider bar allows the user to move to another location in the track. The slider is animated to correlate with a given location in the track. 
  * A buffer bar animates how much of the track has buffered. The buffer will update to a new position on the slider, if a user moves ahead in the song. However, if a user rewinds a song, the buffer will stay in its most buffered position. 
  * Event listeners are added to respond to the clicking on, dragging, and releasing of the slider bar.

### Walkthrough

Add video

### Future Features

List
