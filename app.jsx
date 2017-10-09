class Home extends React.Component {
	render() {
		return (
			<div className="main-content home">
				<h2>HOME</h2>
				<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
				<p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
				<p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
				<hr/>

			</div>
		);
	}
}

class About extends React.Component {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}
}

class Teachers extends React.Component {
	render() {
		return (
			<div className="teachers">
				<h2>Teachers</h2>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/angie.png" alt="" />
						<div className="content">
							<h3 className="title">Angie McAngular</h3>
							<p>Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/nodestradamus.png" alt="" />
						<div className="content">
							<h3 className="title">NodeStradamus</h3>
							<p>'NodeStra' is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/geo.png" alt="" />
						<div className="content">
							<h3 className="title">Geo 'Lo' Cation</h3>
							<p>Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code.</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/ecma.png" alt="" />
						<div className="content">
							<h3 className="title">Ecma Scriptnstuff</h3>
							<p>Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/jay.png" alt="" />
						<div className="content">
							<h3 className="title">Jay Query</h3>
							<p>Jay is a developer, author of CSS: The Missing Manual, JavaScript & jQuery: The Missing Manual, and web development teacher.</p>
						</div>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src="img/teachers/json.png" alt="" />
						<div className="content">
							<h3 className="title">Json Babel</h3>
							<p>All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job.</p>
						</div>
					</div>
				</div>
			</div>)
	}
}

class Courses extends React.Component {
	render() {
		const {route} = this.props;
    let CurrentList = null;
    let HTMLCourse = [
			{
				imgSrc: "img/courses/HTML/How.png",
        title: "How to Make a Website",
        content: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web."
			},
			{
				imgSrc: "img/courses/HTML/HTMLForms.png",
        title: "HTML Forms",
        content:"The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis."
			},
			{
				imgSrc: "img/courses/HTML/HTMLVideoyAudio.png",
        title: "HTML Video and Audio",
        content:"Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text."
			},
			{
				imgSrc: "img/courses/HTML/SVGBasics.png",
        title: "SVG Basics",
        content:"Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density."
        },
        {
				imgSrc: "img/courses/HTML/ResponsiveImg.png",
        title: "Responsive Images",
        content:"Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible."
			}, {
				imgSrc: "img/courses/HTML/IntroHTMLyCSS.png",
        title: "Introduction to HTML and CSS",
        content:"Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like."
			}
		];
		switch (route) {

			case 'css':
				CurrentList = ['How to Make a CSS', 'HTML CSS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			case 'javascript':
				CurrentList = ['How to Make a JS', 'HTML JS'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
			default: //'html'
				CurrentList = ['How to Make a Website', 'HTML Forms'].map( (item, index) => {
					return <li key = {index}> {item} </li>
				});
				break;
		}
		return (
			<div className="main-content courses">
				<div className="course-header group">
					<h2>Courses</h2>
					<ul className="course-nav">
						<li><a href='#/repos/html'>HTML</a></li>
						<li><a href='#/repos/css'>CSS</a></li>
						<li><a href='#/repos/javascript'>JavaScript</a></li>
					</ul>

					<ul>
						{CurrentList}
					</ul>
				</div>

				{/* Write routes here... */}
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			route: window.location.hash.substr(1)
		};
	}
	//  $(document).ready ()
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			//<a href="#/about">About</a>
			//<li><a href='#/repos/html'>HTML</a></li>
			console.log ( window.location.hash.substr(1) );

			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		let propsForRepos = null;
		switch (this.state.route) {
    	case '/about':
				Child = About;
        break;
      case '/teachers':
				Child =Teachers;
				break;
      case '/courses':
				Child = Courses;
				break;
			case '/repos/html':
				Child = Repos;
				propsForRepos = 'html';
				break;
			case '/repos/css':
				Child = Repos;
				propsForRepos = 'css';
				break;
			case '/repos/javascript':
				Child = Repos;
				propsForRepos = 'javascript';
				break;
			default:
				Child = Home;
		}
		return (
         <div>
         <span class="icn-logo"><i class="material-icons">code</i></span>
            <header>App</header>{' '}
            <menu>
               <ul >
               <li>
                    <a href="#/Home">Home</a>
                  </li>{' '}
                  <li>
                     <a href="#/about">About</a>
                  </li>{' '}
                  <li>
                     <a href="#/teachers">Teachers</a>
                  </li>{' '}
                  <li>
                     <a href="#/courses">Courses</a>
                  </li>
               </ul>{' '}
            </menu>
	         {
	         	propsForRepos?
			         <Child route = {propsForRepos} />
		         :
			         <Child />
	         }
         </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));