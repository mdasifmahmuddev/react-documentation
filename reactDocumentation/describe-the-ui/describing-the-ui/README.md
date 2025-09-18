📘 React Export / Import Summary

----------------------------------------------------------
1️⃣ Syntax  

Type        | Export Statement                     | Import Statement
----------- | ------------------------------------ | -------------------------------
Default     | export default function Button() {}   | import Button from './Button.js';
Named       | export function Button() {}           | import { Button } from './Button.js';

----------------------------------------------------------
2️⃣ Export / Import Techniques

🔹 Default Export
- Use when a file has only one component
- Can use any name while importing

// Profile.js
export default function Profile() { ... }

// App.js
import Profile from './Profile.js';

----------------------------------------------------------
🔹 Named Export
- Use when a file has multiple components/variables
- Name must match exactly while importing

// Gallery.js
export function Profile() { ... }
export function Gallery() { ... }

// App.js
import { Profile, Gallery } from './Gallery.js';

----------------------------------------------------------
🔹 Usage Rule
- Small / single component file → Default Export
- Large / multiple component file → Named Export
- A file can have both Default + Named exports, but use carefully

----------------------------------------------------------
🔹 Root Component
- Usually App.js
- Renders all other components

----------------------------------------------------------
3️⃣ Writing Markup with JSX

👉 JSX is HTML-like syntax inside JavaScript

function Welcome() {
  return <h1>Hello, World!</h1>;
}

----------------------------------------------------------
4️⃣ JavaScript in JSX with Curly Braces {}

👉 Use {} to write JavaScript expressions inside JSX

const name = "Asif";

function Welcome() {
  return <h1>Hello, {name}!</h1>;
}

----------------------------------------------------------
5️⃣ Props (Passing Data)

- To pass props: add them to JSX like HTML attributes
- To read props: use destructuring syntax

function Avatar({ person, size = 100 }) { ... }
<Avatar {...props} />

Notes:
- Props send data from parent → child. Example:
  <App>
    <Card> <h1>Card name: {props.namename}</h1> </Card>
  </App>

- Destructuring is a JS style: function({a, b}) instead of function(a,b)
- Props are read-only snapshots in time; to update dynamically, use state
- Nested JSX like <Card><Avatar/></Card> appears as children prop

----------------------------------------------------------
6️⃣ Conditional Rendering

- Components often need to display different things depending on conditions
- Use if statements, &&, and ?: operators in JSX
- Common use: login/logout buttons, dynamic views, etc.
