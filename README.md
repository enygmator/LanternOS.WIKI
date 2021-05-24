# LanternOS.WIKI

[![deploy](https://github.com/enygmator/LanternOS.WIKI/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/enygmator/LanternOS.WIKI/actions/workflows/deploy.yml)

This is the GitHub repository (source code) for the `LanternOS WIKI` website where the WIKI for LanternOS is hosted. It is open source under the APACHE 2.0 License.

We are using [`Docusaurus`](https://docusaurus.io/) to generate the documentation website from Markdown (`MDX`) combined with `React` for some of the hosted pages.

The GitHub Repository for the `LanternOS` project can be found [here](https://github.com/enygmator/LanternOS).

## Viewing the source code

If you want to view the source code conveniently without downloading/cloning the repo, you can just go to [this link](https://github1s.com/enygmator/LanternOS.WIKI) which opens the repo in an environment like that of Visual Studio Code where you can easily study the source code. We are using an open-source project called `GitHub1s` to power the viewing experience.

## Installation

In order to run the documentation website locally (on your machine) or another server:

1. Just download the source code (i.e. clone the repo from GitHub) 
2. Make sure you have `npm` and `node` installed. It should be `Node.js` version >= 12.13.0 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed.
3. Open a terminal in the root folder of the project and run the command `npm run start` which will build the source code into a website and serve it on `https://localhost:3000`.

## Local Development

If you want to modify the website/files locally on you machine, just follow the installation instructions. Once installed, you can leave the server running (using `npm run start`) as each time you change a file, the website automatically rebuilds and refreshes, thus saving you the time of running the `start` command over and over again, which also takes more time to compile.

> If there are issues with the auto re-building of the repo when you make changes, just stop the server and start it again using the same command. Some changes don't show up on the webpage due to caching. The simplest way to solve that problem is to refresh the webpage using the `Ctrl + F5` command which force refreshes all the website files.

You can use the resources (documentation) found [here](https://docusaurus.io/docs/) in order to understand how `docusaurus` works and how you can edit the files and various configurations on getting the website to work the way you want it to.

## License

This repo is open source under the `APACHE 2.0` License which can be found in the root folder of the Repo.

## Contribution

If you want to contribute to the documentation, do read the contribution guidelines (not yet created). 

You need to first `fork` this repo using your GitHub account and then follow the [Installation](#installation) and [Local Development](#local-development) steps.

After making the changes, commit them to the fork you created and then open a pull request into this repo from your repo. Make sure the commit and pull request details all the changes you made. Thank you!

TODO: THIS README IS INCOMPLETE
