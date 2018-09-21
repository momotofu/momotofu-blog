const initialState = [
  {
    title: 'OsakaSpots',
    description: 'A Node.js and Knockout.js application that utilizes Google\'s JavaScript API to show all the best places in Osaka.',
    repoURL: 'https://github.com/momotofu/OsakaSpots',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Fuse.js', 'Knex.js', 'Objection.js', 'Express.js', 'Node.js', 'Knockout.js', 'Nodemon', 'concurrently.js', 'Stylus', 'Pug', 'Webpack', 'SQLite3', 'Google Maps JavaScript API', 'Yelp Fusion API', 'Bash', 'JavaScript', 'Open Source']
  },
  {
    title: 'Catalogger',
    description: 'A web app to login and create your own categories and items. Upload photos, details, and just catalog stuff. Or you can add items to the public catalog, without needing to login.',
    repoURL: 'https://github.com/momotofu/Catalogger',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Flask', 'Python', 'JavaScript', 'Webpack', 'Knockout.js', 'SQLite3', 'PostgresSQL', 'Github Oauth 2.0', 'SQLAlchemy', 'ORM', 'CRUD', 'User login', 'Authentication', 'Open Source']
  },
  {
    title: 'Qzzr.com',
    description: 'Qzzr.com was a hugely rewarding and challenging project because of the dynamic needs and demands of a fast paced start up environment.  While working with Movement Ventures I took full charge of qzzr.com. I rewrote the entire website from a copy and pasted WordPress hack to clean and functional code (jade, stylus, etc.). I cowboyed and crafted all of the UI features (galleries, forms, mobile, navigation, SEO, and A / B tests) and integrated our contact forms with an integrations server (I built the server from the ground up using Node, Express, and third party API\'s). ',
    repoURL: '',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: 'https://www.qzzr.com',
    sortPriority: 0,
    tags: ['React.js', 'Startup','JavaScript', 'SEO', 'Pug', 'Google Analytics', 'Stylus', 'Wordpress', 'AJAX', 'Jekyll', 'Stripe', 'signup forms', 'forms', 'HTML', 'CSS Animations','Marketo API', 'Mobile development', 'Skunk works', 'Development pipeline', 'Technical documentation', 'SQL'],
  },
  {
    title: '96problems.com',
    description: 'I had the pleasure to contract with 96problems.com and to implement several new features to their iOS App now called "Everyst." First I completed the major task of bringing their tech stack up to date (React-Native from 0.39 to 0.43). Then I added React-Native animations, new swipe and touch functionality, pull up to refresh, and confirmed local notifications and preferences capability.',
    repoURL: '',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: 'https://fromeveryst.com/',
    sortPriority: 0,
    tags: ['React-Native.js', 'Startup','JavaScript', 'iOS Development', 'CocoaPods', 'React-Native Animations', 'Mobile development', 'Contract']
  },
  {
    title: 'Cat clicker',
    description: 'An exercise and example of separation of concerns using vanilla JavaScript. Count user clicks, and customize / edit the cats. Which is the cutest cat and how clickety are they?',
    repoURL: 'https://github.com/momotofu/Catalogger',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: 'https://momotofu.github.io/cat-clicker/',
    sortPriority: 0,
    tags: ['JavaScript', 'MVC', 'MVC-Architecture', 'html', 'css', 'single-page-app']
  },
  {
    title: 'React-Redux-Demo',
    description: 'This app pulls from a mock/stubbed API using Apiary and populates a list with the mock data. The UI morphs into several states depending on the received props, and has realtime update capability. The update change-list button demonstrate asynchronous redux and redux-thunk features.',
    repoURL: 'https://github.com/momotofu/React-Redux-Demo',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['JavaScript', 'Redux', 'React-Redux', 'API-Stub', 'Isomorphic-fetch', 'JSX']
  },
  {
    title: 'Database reporting tool',
    description: 'This is an internal reporting tool that uses information from the database (PostgreSQL) to discover what kind of articles the site\'s readers like. The database contains newspaper articles, slugs, authors etc. as well as the server log for the site. The log has a records row for each time a reader loaded a web page and contains user path, ip, HTTP method, status, time, and user id.',
    repoURL: 'https://github.com/momotofu/database-reporting-tool',
    thumbnailImageURL: '',
    presentationImageURL: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['PostgreSQL', 'SQL', 'Ubuntu', 'Linux', 'Database', 'User reporting', 'console logging', 'print data']
  },
  {
    title: 'BattleShip',
    description: 'A basic battle ship game written in swift that capitalizes on the MVC and Delegate design patterns.',
    repoURL: 'https://github.com/momotofu/BattleShip',
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
