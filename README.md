# website
Hacktivate Nation website

npm install
In order to build the project run: npm run build
To serve the project run: npx @11ty/eleventy --serve

** Note - when adding new tailwind classes to elements that are not already being used (meaning they have been added to the stylesheet by the build step), you will have to stop the server, run the build step and restart the server. Kind of annoying I know, this should be added to an improved build workflow.

** Note - It can be slow for the browser to re-render and new changes to show up after adding new classes and building so it takes a little patience sometimes. It takes a little bit to get used to the flow.
