Comments App
In this project, let's build a Comments App by applying the concepts we have learned till now.

Refer to the image below:

comments output

Design Files
Click to view
Extra Small (Size < 576px) and Small (Size >= 576px)
Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)
Set Up Instructions
Click to view
Download dependencies by running npm install
Start up the app using npm start
Completion Instructions
Functionality to be added

The app must have the following functionalities

Initially, the list of comments should be zero and the inputs fields should be empty
When non-empty values are provided and Add Comment button is clicked,
A new comment should be added to the list of comments
The comments count should be incremented by one
The value of the input fields for name and comment should be updated to their initial values
When the Like button of a comment is clicked, if the image for Like is
Like image, then it should be changed to the Liked image
Liked image, then it should be changed to the Like image
When the Delete button of a comment is clicked, the comment should be deleted from the list of comments and the comments count should be decremented by one
Components Structure

component breakdown structure

Implementation Files

Use these files to complete the implementation:

src/components/Comments/index.js
src/components/Comments/index.css
src/components/CommentItem/index.js
src/components/CommentItem/index.css
Quick Tips
Click to view

The formatDistanceToNow function in the date-fns package is used to return the gap between the given date and now in words.
JAVASCRIPT
Important Note
Click to view

The following instructions are required for the tests to pass

HTML input element for name should have the placeholder as Your Name
HTML textarea element for comment should have the placeholder as Your Comment
The Like image for each comment should have the alt as like
The Delete button for each comment should have the data-testid as delete
To display how much time ago the comment was posted, we will use formatDistanceToNow function from date-fns package
Resources
Image URLs
https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png alt should be comments
https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png alt should be delete
https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png
https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png
Colors

Hex: #dee0e3
Hex: #1e293b
Hex: #475569
Hex: #cbd2d9
Hex: #0284c7
Hex: #f59e0b
Hex: #0b69ff
Hex: #f97316
Hex: #10b981
Hex: #b91c1c
Hex: #0ea5e9
Hex: #334155
Hex: #94a3b8
Hex: #64748b
Hex: #7e858e
Font-families
Roboto
Things to Keep in Mind
All components you implement should go in the src/components directory.
Don't change the component folder names as those are the files being imported into the tests.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.