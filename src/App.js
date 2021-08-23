import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

import { useSpring, animated } from "react-spring";
import { Fade, Slide } from "@material-ui/core";

const FadeIn = (props) => {
	const fade = useSpring({
		from: {
			opacity: 0,
			// marginLeft: -1000,
			x: -2000,
		},
		to: {
			opacity: 1,
			// marginLeft: 0,
			x: 0,
		},
		delay: 100,
	});

	return <animated.div style={fade}>{props.children}</animated.div>;
};
function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Routes />
		</Router>
	);
}

function Routes() {
	const location = useLocation();
	console.log("Location", location.pathname);

	return (
		<>
			<Switch location={location}>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/users" component={Users} />
			</Switch>
		</>
	);
}

function Home() {
	return (
		<FadeIn>
			<section className="section bg-blue">
				<h2>Home</h2>
			</section>
		</FadeIn>
	);
}

function About() {
	return (
		<Slide
			direction="right"
			in={true}
			// style={{ transitionDelay: "5000ms" }}
			timeout={{
				enter: 500,
				exit: 1000,
			}}
			mountOnEnter
			unmountOnExit
		>
			<section className="section bg-green">
				<h2>About</h2>
			</section>
		</Slide>
	);
}

function Users() {
	return (
		<Fade
			in={true}
			timeout={{ appear: 1000, enter: 1000, exit: 5000 }}
			style={{ transitionDelay: "500ms" }}
		>
			<section className="section bg-red">
				<h2>Users</h2>
			</section>
		</Fade>
	);
}

export default App;
