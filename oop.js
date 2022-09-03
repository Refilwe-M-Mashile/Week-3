class Track {
  /* constructor(name, projects, topics, groupProjects){
    this.name = name;
    this.projects = projects;
    this.topics = topics;
    this.groupProjects = groupProjects;
 } */
}

class Web extends Track {
  constructor() {
    this.name = "Web Dev";
    this.projects = 10;
    this.topics = 25;
    this.groupProjects = 2;
  }
  info() {
    console.table(this);
  }
}

class Java {
  constructor() {
    this.name = "Java";
    this.projects = 15;
    this.topics = 32;
    this.groupProjects = 4;
  }
  info() {
    console.table(this);
  }
}

class UmuziStudents {
  constructor() {
    this.students = [
      {
        name: "Jake",
        track: "web",
        cohort: 27,
      },
      {
        name: "Martha",
        track: "java",
        cohort: 30,
      },
      {
        name: "Zola",
        track: "web",
        cohort: 35,
      },
      {
        name: "Junior",
        track: "web",
        cohort: 34,
      },
      {
        name: "Jasmine",
        track: "java",
        cohort: 28,
      },
      {
        name: "Carly",
        track: "web",
        cohort: 30,
      },
      {
        name: "Melisa",
        track: "web",
        cohort: 26,
      },
      {
        name: "Sheldon",
        track: "web",
        cohort: 33,
      },
      {
        name: "Alicia",
        track: "java",
        cohort: 34,
      },
      {
        name: "Jake",
        track: "web",
        cohort: 28,
      },
      {
        name: "Howard",
        track: "web",
        cohort: 35,
      },
      {
        name: "Bernadette",
        track: "java",
        cohort: 26,
      },
      {
        name: "Amy",
        track: "web",
        cohort: 29,
      },
      {
        name: "Harvey",
        track: "java",
        cohort: 30,
      },
      {
        name: "Messy",
        track: "web",
        cohort: 31,
      },
    ];
    this.totalRecruits;
  }

  getStudentsTrack(student) {
    //To-Do
  }

  filterStudents(track, cohort) {
    let students = [];
    students.filter((s) => s.name == track);
    return students;
  }
}

/* Problem Statement
 Filter the students 
 return Alumni if the cohort is 31 or <
 return '
*/

const umuzi = new UmuziStudents();
umuzi.filterStudents("Web", 27);


//Take Homes:
/*
isFunctions
OOP
Math Functions
Ascii Table
 */