# Welcome to cheatsheets-angular
Demonstration repository about Angular major features & best pratices.

See wiki for more information on Angular history & features.
> _https://github.com/FGAUTREAULT/cheatsheets-angular/wiki_

Checkout branches to see different implementation of the demonstration project for different features and versions of Angular. This project evolve with the goal of demonstration of Angular history, along with new features added and best practices appearance.

# 📰 Blogging 📰
> [Complete Angular History](https://github.com/FGAUTREAULT/cheatsheets-angular/wiki)  
> [Angular vs React](https://github.com/FGAUTREAULT/cheatsheets-angular/wiki)  

# 💻 Coding 💻
This repository uses gitflow. 
* Develop branch get the current stable work in progress. 
* Features will start from the develop branches and be closed if they are ment to be part of the main development. 
* Releases will be created when master steps have been achieved.
* Main branch will contain the production ready code.

Current status: 💻
<pre>
├── main
├── releases
├── develop
    ├── v5xx_Angular_Base_Project
    ├── v5xx_Angular_Base_Components
    └── v5xx_Angular_Base_Navigation
└── features
    └── v5xx_Angular_Base_Project
</pre>

Please prefix your features with the version of angular they have to be built with: <pre>vXXX_Human_readable_short_description</pre>

# Versions compatibility
To use older versions of angular you will be required the compatible versions of <kbd>nodejs</kbd>, <kbd>npm</kbd> and <kbd>@angular/cli</kbd>

Here are easy steps to ensure that.
1. Install nvm (check latest script first)
> _https://github.com/nvm-sh/nvm_
2. To enable nvm close & reopen your terminal
<pre>
nvm --version
nvm ls-remote
</pre>
3. Choose the compatible <kbd>nodejs</kbd> version for your project
> _https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3_
4. Install and use it
<pre>
nvm intall vXXX
nvm use vXXX
node -v
npm -v
</pre>
5. Install the particular version of <kbd>@angular/cli</kbd>
<pre>
npm install -g @angular/cli@X.X.X
</pre>
6. Finally create your project with cli.
<pre>
npm cache clean --force
ng new my-app
cd my-app
ng serve --open
</pre>

# 🎓 Learning 🎓

# Design Experiments
> _https://codepen.io/FGAUTREAULT/pen/BapZZgG_  

# ⚡️ Performance Optimization ⚡️
> _https://t.co/HSi1qcePBu_  // Bundle optimization  
> _https://t.co/XlYJqfurP6_  // Profiling apps in @ChromeDevTools  
> _https://t.co/ete6KJtpXE_  // Using the Angular extension for @ChromeDevTools  
> _https://t.co/d6uF14KjOi_  // Angular performance checklist
