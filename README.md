# JS SPA Weekend Warrior Project



![Spa](https://media.giphy.com/media/qYPuZHf0vFB6g/giphy.gif "Kitty 'SPA'")

You're going to be building a **SPA** or *S*ingle *P*age *A*pplication. Your frontend will be built with HTML, CSS, and JavaScript. You will also be tasked with constructing your own backend API built with Ruby on Rails. The frontend application will communicate with the backend by making requests and receiving responses. This is a really exciting moment, the whole course up until this point is coming together!

Building out each feature you want for your application will be challenging, but you all are awesome and can do it. Remember for this weekend project focus on an MVP (Minimum Viable Project). This will be great practice, getting you ready for the module 3 project.

### Requirements

1. Must be a HTML/CSS/JS frontend with a Rails API backend. These should live in two separate repositories. All interactions between the client and the server should be handled asynchronously (using fetch).

2. Must render out **only two resources** total in the JSON. For example, if we were building Instagram, we might display a list of photos with associated comments. Both resources should be editable.

3. Must use your Rails API and a form generated by the client to create a resource and render the response without a page refresh. For example, if you create a new Photo post, the form data would be submitted via a fetch POST request, with the response being the new object in JSON, which can then be used for appending that new photo to the DOM using JavaScript.

4. **No user authentication with passwords. When the page refreshes the current user will effectively be signed out**. The way you learned this in the previous module relied on the fact that Rails was sending small pieces of data (cookies/sessions) back and forth along with every request and response. Now, we have two separate applications and need to use a slightly different pattern. We'll look at patterns for dealing with client-side auth later in the semester, so you'll have plenty of time to deal with this case.

   * If your application requires a user model you can have users "sign in" or "sign up" by providing a username and/or email, but hold off on passwords for now.

## Example Project Setup

[This repository](https://github.com/learn-co-curriculum/mod3-project-week-setup-example) goes through the first few steps of setting up an example project for both the frontend and backend applications. **Please spend some time looking through this before getting started**. If your question (ex: "How do i set up the `rack-cors` gem?") can be answered by reading this repository, you will be directed there.




*THURSDAY GOALS*
- User can click on the items in their pouch and they can do cute things, bark etc **READ**
- Seed API with more items, some are more random than others, add multiples of the same items with different id numbers
- Add more geodes


*REACH GOALS*
- when a geode is found it is spit out to the center of the screen: https://www.w3schools.com/howto/howto_js_animate.asp
- DRAG AND DROP Set up method to delete items **DELETE**
- Adding multiple users and login
  - Set up method to reassign the items to a different user thus sending them to another User's pouch **EDIT**
  - USER can package up their items into a geode before they are sent to another user, so that the user can open it  **EDIT**
  - Alert when a user receives  a new item from someone else-
