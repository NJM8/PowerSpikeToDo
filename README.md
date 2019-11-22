# powerspiketodo


Project Brief: To-Do App 
 
Description: The goal of this project is to see how you work by creating a simple to-do application. The creativity and complexity of the project is up to you. Creativity and complexity will help your score, but there has to be a balance with timeframe. Submitting a well executed project sooner than the due date will also help your score. Your goal is to create an application that shows the todo items for the user, allows new ones to be added, and allows items to be deleted. You do not need to worry about how the user is determined, an authentication key will be given. 
 
Timeframe: You will have one week from the assignment of the project to submit a GitHub repository containing your work. 
 
Project Requirements: - Should be able to run out of the box - Should complete an action that utilizes each of the API endpoints - Should have a clean UI - Should be responsive to page size change 
 
You will be given access to a very basic to-do API, found at http://todo.powerspike.gg, consisting of the following endpoints: 
 
- GET / 
- POST /new 
- DELETE /delete/{id} 

Todo properties: 
- id
- title
- content
- created (a timestamp)

Id and created are immutable properties. Only title and content can be set.
 
You will need to attach an Authorization header to your requests to utilize this API.  


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
