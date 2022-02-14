interface ICourseService {
    getCourses(): Promise<ICourse>
  }
  
  class CourseService implements ICourseService{
    getCourses() {
      //...
    }
  }
  
  class CourseController {
    constructor(courseService: ICourseService) {
      this.courseService = courseService;
    }
  
    async get() {
      // ...
      const data = await courseService.getCourses()
      // ...
    }
  }