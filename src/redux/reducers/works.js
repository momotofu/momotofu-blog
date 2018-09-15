const initialState = [
  {
    title: 'OsakaSpots',
    description: 'A Node.js and Knockout.js application that utilizes Google\'s JavaScript API to show all the best places in Osaka.',
    repoUrl: 'https://github.com/momotofu/OsakaSpots',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Fuse.js', 'Knex.js', 'Objection.js', 'Express.js', 'Node.js', 'Knockout.js', 'Nodemon', 'concurrently.js', 'Stylus', 'Pug', 'Webpack', 'SQLite3', 'Google Maps JavaScript API', 'Yelp Fusion API', 'Bash', 'JavaScript', 'Open Source']
  },
  {
    title: 'Catalogger',
    description: 'A web app to login and create your own categories and items. Upload photos, details, and just catalog stuff. Or you can remain add items to the public catalog, without needing to login.',
    repoUrl: 'https://github.com/momotofu/Catalogger',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Flask', 'Python', 'JavaScript', 'Webpack', 'Knockout.js', 'SQLite3', 'PostgresSQL', 'Github Oauth 2.0', 'SQLAlchemy', 'ORM', 'CRUD', 'User login', 'Authentication', 'Open Source']
  },
  {
    title: 'Cat clicker',
    description: 'An exercise and example of separation of concerns using vanilla JavaScript. Count user clicks, and customize / edit the cats. Which is the cutest cat and how clickety are they?',
    repoUrl: 'https://github.com/momotofu/Catalogger',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: 'https://momotofu.github.io/cat-clicker/',
    sortPriority: 0,
    tags: ['JavaScript', 'MVC', 'MVC-Architecture', 'html', 'css', 'single-page-app']
  },
  {
    title: 'React-Redux-Demo',
    description: 'This app pulls from a mock/stubbed API using Apiary and populates a list with the mock data. The UI morphs into several states depending on the received props, and has realtime update capability. The update change-list button demonstrate asynchronous redux and redux-thunk features.',
    repoUrl: 'https://github.com/momotofu/React-Redux-Demo',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['JavaScript', 'Redux', 'React-Redux', 'API-Stub', 'Isomorphic-fetch', 'JSX']
  },
  {
    title: 'Database reporting tool',
    description: 'This is an internal reporting tool that uses information from the database (PostgreSQL) to discover what kind of articles the site\'s readers like. The database contains newspaper articles, slugs, authors etc. as well as the server log for the site. The log has a records row for each time a reader loaded a web page and contains user path, ip, HTTP method, status, time, and user id.',
    repoUrl: 'https://github.com/momotofu/database-reporting-tool',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['PostgreSQL', 'SQL', 'Ubuntu', 'Linux', 'Database', 'User reporting', 'console logging', 'print data']
  },
  {
    title: 'BattleShip',
    description: 'A basic battle ship game written in swift that capitalizes on the MVC and Delegate design patterns.',
    repoUrl: 'https://github.com/momotofu/BattleShip',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Swift', 'iOS', 'Game', 'iPhone', 'Apple', 'MVC', 'Delegation']
  }
]

const works = (state = initialState) => {
  return state
}

export default works
