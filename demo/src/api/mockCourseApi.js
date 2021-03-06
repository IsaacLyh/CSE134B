import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "Stuffed-MushRoom",
    title: "Stuffed MushRoom",
    watchHref: "https://www.foodnetwork.com/recipes/giada-de-laurentiis/stuffed-mushrooms-recipe-1941818",
    authorId: "cyka-blyat",
    length: "",
    Style: "Vegetable"
  },
  {
    id: "Corned-Beef-and-Cabbage",
    title: "Corned Beef and Cabbage",
    watchHref: "https://www.foodnetwork.com/recipes/tyler-florence/corned-beef-and-cabbage-recipe-1953631",
    authorId: "cyka-blyat",
    length: "",
    Style: "St.Patrick"
  },
  {
    id: "Egg-Stuffed-Ravioli",
    title: "Egg-Stuffed Ravioli",
    watchHref: "https://www.foodnetwork.com/recipes/food-network-kitchen/egg-stuffed-ravioli-4538678",
    authorId: "cyka-blyat",
    length: "",
    Style: "Food Network Kitchen"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `https://www.foodnetwork.com`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          return course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
