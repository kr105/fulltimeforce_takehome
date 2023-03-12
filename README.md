# fulltimeforce_takehome

The goal of this test will be to create an app that shows git commit history on the same project you are working on. You need to do well-stated and defined commits while working on this test and regularly push them up.

## Design decisions
- Next.js 13 has been selected since it provides features like server-side rendering, it is very easy to create routes and automatically manages front-end/back-end code using modern techniques to send as little code as possible to the client.
- Even though the Github API has octokit, a nice wrapper library, I decided to use the REST API directly since the required API calls were simple enough and using `fetch()` instead of octokit functions would allow us get the caching functionality working with Next.js
- An extra API call was used to get repository info, just to showcase how I would handle multiple endpoints.
- The takehome document was included on the "About" section, trying to emulate a word document page

## How to run the code
You can change the repository that will be used to show the information with an `.env` file. Please see the `.env.example` file for info about parameters. You can also specify a custom token for using it with the Github API calls.

To start the server, simply run

	npm install
	npm run dev

It will start listening for requests on port 3000

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.