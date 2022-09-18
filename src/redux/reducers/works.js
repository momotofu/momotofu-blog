const initialState = [
  {
    title: 'Medatime',
    description: 'A digital clock used to time meditation intervals. You can set the time using a radial dial or using text input (i.e. 1s 1 second etc.)',
    repoURL: 'https://github.com/momotofu/medatime',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://medatime.herokuapp.com/',
    sortPriority: 9,
    tags: ['React.js', 'Gatsby.js', 'Stylus', 'Open Source']
  },
  {
    title: 'Compose Namespace',
    description: 'A digital clock used to time meditation intervals. You can set the time using a radial dial or using text input (i.e. 1s 1 second etc.)',
    repoURL: 'https://github.com/momotofu/compose-namespace',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 2,
    tags: ['Utilities', 'Javascript', 'NPM Package', 'Open Source']
  },
  {
    title: 'OsakaSpots',
    description: 'A Node.js and Knockout.js application that utilizes Google\'s JavaScript API to show all the best places in Osaka.',
    repoURL: 'https://github.com/momotofu/OsakaSpots',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://osakaspots.herokuapp.com/',
    sortPriority: 8,
    tags: ['Fuse.js', 'Knex.js', 'Objection.js', 'Express.js', 'Node.js', 'Knockout.js', 'Nodemon', 'concurrently.js', 'Stylus', 'Pug', 'Webpack', 'SQLite3', 'Google Maps JavaScript API', 'Yelp Fusion API', 'Bash', 'JavaScript', 'Open Source']
  },
  {
    title: 'Catalogger',
    description: 'A web app to login and create your own categories and items. Upload photos, details, and just catalog stuff. Or you can add items to the public catalog, without needing to login.',
    repoURL: 'https://github.com/momotofu/Catalogger',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'http://142.93.30.236',
    sortPriority: 9,
    tags: ['Flask', 'Python', 'JavaScript', 'Webpack', 'Knockout.js', 'SQLite3', 'PostgresSQL', 'Github Oauth 2.0', 'SQLAlchemy', 'ORM', 'CRUD', 'User login', 'Authentication', 'Open Source']
  },
  {
    title: 'Create a Menu',
    description: 'Create and manage restaurants and menus using Flask. Features: OAuth 2.0, API, Session login, Flashing etc.',
    repoURL: 'https://github.com/momotofu/create-a-menu',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['SQLAlchemy', 'httplib2', 'oauth2client', 'passlib', 'itsdangerous', 'flaskhttpauth', 'requests', 'Flask']
  },
  {
    title: 'Qzzr.com',
    description: 'Qzzr.com was a hugely rewarding and challenging project because of the dynamic needs and demands of a fast paced start up environment.  While working with Movement Ventures I took full charge of qzzr.com. I rewrote the entire website from a copy and pasted WordPress hack to clean and functional code (jade, stylus, etc.). I cowboyed and crafted all of the UI features (galleries, forms, mobile, navigation, SEO, and A / B tests) and integrated our contact forms with an integrations server (I built the server from the ground up using Node, Express, and third party API\'s). ',
    repoURL: '',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://www.qzzr.com',
    sortPriority: 10,
    tags: ['React.js', 'Startup', 'JavaScript', 'SEO', 'Pug', 'Google Analytics', 'Stylus', 'Wordpress', 'AJAX', 'Jekyll', 'Stripe', 'signup forms', 'forms', 'HTML', 'CSS Animations', 'Marketo API', 'Mobile development', 'Skunk works', 'Development pipeline', 'Technical documentation', 'SQL'],
  },
  {
    title: '555 comic',
    description: 'I had the pleasure to contract with 555 comic and implement several new features for their iOS App now called "Everyst." First I completed the major task of bringing their tech stack up to date (React-Native from 0.39 to 0.43). Then I added React-Native animations, new swipe and touch functionality, pull up to refresh, and confirmed local notifications and preferences capability.',
    repoURL: '',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://555comic.com',
    sortPriority: 0,
    tags: ['React-Native.js', 'Startup', 'JavaScript', 'iOS Development', 'CocoaPods', 'React-Native Animations', 'Mobile development', 'Contract']
  },
  {
    title: 'Cat clicker',
    description: 'An exercise and example of separation of concerns using vanilla JavaScript. Count user clicks, and customize / edit the cats. Which is the cutest cat and how clickety are they?',
    repoURL: 'https://github.com/momotofu/cat-clicker',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://momotofu.github.io/cat-clicker/',
    sortPriority: 5,
    tags: ['JavaScript', 'MVC', 'MVC-Architecture', 'html', 'css', 'single-page-app']
  },
  {
    title: 'React-Redux-Demo',
    description: 'This app pulls from a mock/stubbed API using Apiary and populates a list with the mock data. The UI (Graphs, bars, etc. ) morphs into several states depending on the received props, and has realtime update capability. The update change-list button demonstrate asynchronous redux and redux-thunk features.',
    repoURL: 'https://github.com/momotofu/React-Redux-Demo',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://react-redux-sample-code.herokuapp.com/',
    sortPriority: 7,
    tags: ['JavaScript', 'Redux', 'React-Redux', 'API-Stub', 'Isomorphic-fetch', 'JSX']
  },
  {
    title: 'Database reporting tool',
    description: 'This is an internal reporting tool that uses information from the database (PostgreSQL) to discover what kind of articles the site\'s readers like. The database contains newspaper articles, slugs, authors etc. as well as the server log for the site. The log has a records row for each time a reader loaded a web page and contains user path, ip, HTTP method, status, time, and user id.',
    repoURL: 'https://github.com/momotofu/database-reporting-tool',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['PostgreSQL', 'SQL', 'Ubuntu', 'Linux', 'Database', 'User reporting', 'console logging', 'print data']
  },
  {
    title: 'BattleShip',
    description: 'A basic battle ship game written in swift that capitalizes on the MVC and Delegate design patterns.',
    repoURL: 'https://github.com/momotofu/BattleShip',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Swift', 'iOS', 'Game', 'iPhone', 'Apple', 'MVC', 'Delegation']
  },
  {
    title: 'Linux Server Config',
    description: 'For the Catalogger app I installed and configured Linux/Ubuntu on virtual machine (Digital Ocean Droplet), by setting up security (limiting user access, SSH public key login, customized ports, firewall config, groups, privileges, file permissions, and package udpates) and installing a LAPP stack (Linux, Apache2, PostgreSQL, Python - python virtual environment and deameons).',
    repoURL: 'https://github.com/momotofu/linux-server-config',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'http://142.93.30.236',
    sortPriority: 6,
    tags: ['Ubuntu', 'Apache2', 'Digital Oceon', 'PostgreSQL', 'PostgreSQL-contrib', 'Python 3.6', 'libapache2-mod-wsgi-py3', 'Flask', 'VirtualEnv', 'SQLAlchemy', 'Bcrypt', 'Github OAuth 2.0', 'Node', 'npm', 'Bootstrap', 'Knockout.js', 'Webpack', 'JavaScript', 'Requests', 'Open Source']
  },
  {
    title: 'Momotofu-API',
    description: 'Backend for all things momotofu',
    repoURL: 'https://github.com/momotofu/momotofu-api',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Flask-restful', 'Gunicorn', 'Yagmail', 'SQLAlchemy', 'API', 'Open Source']
  },
  {
    title: 'A Java Collection',
    description: 'A collection of Java programs from hangman, queues and stacks, tic tac toe, linked lists, to hot chocolate.',
    repoURL: 'https://github.com/momotofu/a-java-collection',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Java', 'Algorithms', 'Data-structures', 'Toy programs']
  },
  {
    title: 'RootMapper',
    description: 'Mind maps made easy. I took advantage of the tree data structure to architect a mind mapping App in Swift and Objective-C. Developed physics and animations using SpriteKit. Added features such as: updating node ancestry with task completion status, collision detection, out of bounds gravity trigger, node status states, priority swapping, node deletion and children transfer, and task timer states. Programmatically drew/animated hierarchical lines and connected task nodes using handrolled trigonometry (vectors) and the CoreGraphics library. Developed the model to persisted node coordinates, details, hierarchy, priority, label etc.',
    repoURL: '',
    thumbnailImageURL: '',
    presentationImageName: 'root-mapper.png',
    liveURL: '',
    sortPriority: 5,
    tags: ['Swift', 'Core-graphics', 'CocoaPods', 'SpriteKit', 'iOS Development', 'GrowingTextView', 'Objective-C', 'MVC', 'Delegation', 'Caching', 'data persistance', 'trigonometery']
  },
  {
    title: 'Bookmark-server',
    description: 'URL shortener written in python',
    repoURL: 'https://github.com/momotofu/bookmark-server',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: '',
    sortPriority: 0,
    tags: ['Python', 'requests', 'url-shortener', 'socketserver', 'urllib.parse', 'threading', 'os']
  },
  {
    title: 'Fresh films (Movie Trailer Website)',
    description: 'Server-side code written in Python to store a list of my favorite movies, including box art imagery and a movie trailer URL. This data is then served to a web page using HTML and CSS allowing visitors to review these movies and watch the trailers.',
    repoURL: 'https://github.com/momotofu/movie-trailer-website',
    thumbnailImageURL: '',
    presentationImageName: '',
    liveURL: 'https://momotofu-api-prod.herokuapp.com/fresh_films',
    sortPriority: 5,
    tags: ['Python', 'Bootstrap 3', 'HTML', 'CSS', 'Movies', 'Movie list', 'lists', 'perviewer']
  }
].sort((a, b) => {
  if (a.sortPriority > b.sortPriority)
    return -1
  if (a.sortPriority < b.sortPriority)
    return 1
  return 0
})

const works = (state = initialState) => {
  return state
}

export default works
