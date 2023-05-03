// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Artur',
    lastname: 'Surin',
   },
   position: 'Junior Fullstack JS Developer',
   salary: '600$ в місяц',
   address: 'Ukraine, Kropyvnytskyi',
};

var footer = {
  social: {
    email: {
      text:'Artur.surin@gmail.com',
      href: 'mailto:Artur.surin@gmail.com',
  },
    phone: {
      text: '+380995213676',
      href: 'tel:+380995213676',
  },
    linkedin: {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/artur-surin-85a802252/',
  },
},
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`
      } ,
   
      experience: {
       title: 'Other experience',
       text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
         tournament position, goals etc), analyzing by simple mathematics models and preparing probability
         for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,  
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Skills',
    },

    header,

    main: {
      hobbies: [
        {
          name: 'Волейбол',
          isMain: true,
        },
        {
          name: 'Теніс',
          isMain: true,
        },
        {
          name: 'Шахи',
          isMain: false,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 7,
          isTop: true,
        },
        {
          name: 'Heandlebars',
          point: 3,
        },
        {
          name: 'VS Code & NPM',
          point: 6,
        },
        {
          name: 'Git & Terminal', 
          point: 2,
        },
        {
          name: 'React.js', 
          point: 0,
        },
        {
          name: 'PHP', 
          point: null,
        },
        ],
    },

    footer,  
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Education',
    },

    header,

    main: {
      certificates: [
      {
        name: 'ДС Веселка',
        id: 1991,
      },
      {
        name: 'ЗОШ Геній',
        id: 2002,
      },
      {
        name: 'Івано-Франківський університет нафти і газу',
        id: 2014,
      },
      ],
      
      education: [
        {
          name: 'Дитячий садок',
          isEnd: true,
        },
        {
          name: 'Школа',
          isEnd: true,
        },
        {
          name: 'Технікум',
          isEnd: true,
        },
        {
          name: 'Інститут',
          isEnd: false,
        },
      ],
    },

    footer,  
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Education',
    },

    header,

    main: {
      works: [
      {
        position: 'Junior Fullstack Developer',
        company: {
          name:'BLIZZARD ENTERTAINMENT',
          url: null,
        },
        duration: {
          from: '10.09.2004',
          to: null,
        },
        projectAmount: 3,

        projects: [
          {
            name: 'Portfolio',
            url: 'https://portfolio-largo.netlify.app/',
            about: 'About the developer, his work and skills',
            stackAmoGnt: 4,
            awardAmoGnt: 2,
            stacks: [
              {
               name: 'HTML/CSS', 
              },
              {
                name: 'Node.js', 
               },
               {
                name: 'JS', 
               },
            ],
            awards: [
              {
                name: 'The best work is done by those who do not know Java Script'
              },
              {
                name: 'The best example for designing a portfolio'
              },
            ], 
          },
        ],
      },
      ],
    },

    footer,  
  })
})


          
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================



// Підключаємо роутер до бек-енду
module.exports = router
