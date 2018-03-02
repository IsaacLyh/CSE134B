import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const comments = [
  {
    id: "Looks-good",
    title: "Looks good",
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (comment) => {
  return replaceAll(comment.title, ' ', '-');
};

class CommentApi {
  static getAllComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], comments));
      }, delay);
    });
  }

  static saveComment(comment) {
    //alert(comment);
    comment = Object.assign({}, comment); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (comment.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (comment.id) {
          const existingCourseIndex = comments.findIndex(a => a.id == comment.id);
          comments.splice(existingCourseIndex, 1, comment);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          comment.id = generateId(comment);
          comment.watchHref = `https://www.foodnetwork.com`;
          comments.push(comment);
        }

        resolve(comment);
      }, delay);
    });
  }

  static deleteComment(commentId) {
    //alert("deleting comment");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = comments.findIndex(comment => {
          return comment.commentId == commentId;
        });
        alert(comments);
        //console.log(comments);
        comments.splice(indexOfCourseToDelete, 1);
        //console.log(comments);
        alert(comments);
        resolve();
      }, delay);
    });
  }
}

export default CommentApi;
