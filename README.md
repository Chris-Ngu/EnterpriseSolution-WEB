# THIS IS A DEPRECATED REPOSITORY, REFERENCE ONLY. OUTDATED CODE; POOR DESIGN
# PROCEED WITH CAUTION

## EnterpriseSolution-WEB
The full stack implementation of [EnterpriseSolution](https://github.com/Chris-Ngu/EnterpriseSolution) I wrote in C#

* I decided to convert this to a web based application because I had a lot of networking libraries and frameworks I relied on and thought it would be more fluid if it was implemented in the enviornment it was trying to operate in.

*Major disclaimer: this is not intended for production. The styling of the codebase varies ALOT (Using reactstrap, then using bootstrap, coding styles). I used this to learn the MERN stack. There will be a ES-WEB 2.0 branch in the future that will be merged into master. This should fix the biggest underlying bugs that are caused by the structure of the project itself*

# Technologies
* MongoDB
* Express
* React
* NodeJS

# Working features
* Login screen registration/ logging in with JWT integration
* Project Screen pulling from MongoDB to display projects in queue (Not deleted)

# WIP 
# Login Screen
* Double check the JWT integration, I can get passed by using the specific url(JWT Being deleted on some routes/ checks not working)
* Registration screen: overwriting pre-existing user, need to check if user exists first before allowing registration

# Main screen:
* Twitter like feed of employee activities
* Breadcrumbs
* Carousel of logo/ stockholder pictures
* Media page of workers
* Animation with keyframes

# Project screen: 
* Add stats of thumbs down, thumbs up with percentage (Need to get project data)
* Redesign the UI/ navbar integration to the left hand side for fluidity
* Align to the left, add a placeholder picure on the right
* Re-adjust the picture for each project (Layout.css)

# Settings screen
* Allow ability to change password and email

# Ect...
* JWT Timer and refresh token
* Move all jwt needed requests into one file
* REMOVE SECRET KEY/ CREATE NEW 
* Convert console.log error logging to res.json
   
*Yes there are a lot of things to do, but that's the joy of experimenting with a stack :)*


# Photos
* Please not that these are WIP and concepts are subject to change

![image](https://user-images.githubusercontent.com/57853013/75618629-c3d37c00-5b36-11ea-80fd-13a6152c778c.png)

![image](https://user-images.githubusercontent.com/57853013/75618616-94247400-5b36-11ea-8777-c0ee7992a38b.png)

![image](https://user-images.githubusercontent.com/57853013/85085054-3a56c100-b19c-11ea-983d-cf883ea2ff3d.png)

![image](https://user-images.githubusercontent.com/57853013/85236785-87c66e80-b3e6-11ea-84bf-429ba3575c37.png)

![image](https://user-images.githubusercontent.com/57853013/78454232-67470d80-765c-11ea-8e6e-2c591c60ac08.png)

![image](https://user-images.githubusercontent.com/57853013/78454790-e0942f80-765f-11ea-83b3-8488c07baa87.png)


