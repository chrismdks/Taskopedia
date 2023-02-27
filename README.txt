Create Taskopedia repository @ github.com
Open terminal, cd to desired path and: git clone https://github.com/chrismdks/taskopedia.git

Open VS Code, ctrl+` to open terminal
cd to project path
run: npx create-react-app taskopedia
run: cd taskopedia
run: npm start
ctrl+C to stop it

First push:
git status
git add path path2
git commit -m "...."
git push origin main

*** RULES OF JSX COMPONENTS ***
1. Component names must be PASCAL casing
--- function Footer() {} , <Footer />
2. Props (attributes) must be camel casing
--- <input maxLength={5}>
3. Inline style is an Object, so it must be enclosed in double curly brackets
--- <p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>
4. In props, Integer and Bool will go in {} and String in ""
--- <input maxLength={5} readOnly={false} placeholder="Ben">
5. 'class' need to be replaced with 'className'
--- <h1 className="myClass">


*** 3rd PARTY LIBRARIES ***
* Example:
Go to: https://fakerjs.dev/guide/
Scroll to Installation section and copy npm command (npm install @faker-js/faker --save-dev)
Paste in terminal and press enter.
When done, you can see the installed library in package.json file
Go back to: https://fakerjs.dev/guide/usage.html
Copy import command and paste in Student.jsx file (import {faker} from '@faker-js/faker';) 
Go to: https://fakerjs.dev/api/
Search for the desired image (e.g. type "avatar")
Copy usage command and paste where needed (e.g. in <img> tag: src={faker.image.avatar()})

Others: 
-> lorem.space
Scroll down to Random Face Picture section and copy the command.
Use it as prop.
For example, in index.js file, in MainBody, paste the link as a prop with name "pic" (pic="https://api.lorem.space/image/face?w=150&h=150").
If you use it in more than one different objects, change the height a bit to render a different image (pic="https://api.lorem.space/image/face?w=150&h=152").
Fetch it in Student.jsx file

-> https://icons.getbootstrap.com/
Scroll down to CDN section and copy the link command
Paste in index.html (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">)
Go back to https://icons.getbootstrap.com/ and search for desired icon (e.g. type "thumbs up")
In Icon font section, copy link and paste in your <div> tag.