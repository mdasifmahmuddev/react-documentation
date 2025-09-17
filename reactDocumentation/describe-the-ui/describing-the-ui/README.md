
📘 React Export / Import Summary  

1️⃣ Syntax  

| Type      | Export Statement                           | Import Statement                                |
|-----------|-------------------------------------------|------------------------------------------------|
| **Default** | `export default function Button() {}`      | `import Button from './Button.js';`             |
| **Named**   | `export function Button() {}`              | `import { Button } from './Button.js';`         |

----------------------------------------------------------

2️⃣ Export / Import Techniques  

🔹 Default Export  
- When a file has only one component  
- You can use any name while importing  

// Profile.js
export default function Profile() { ... }

// App.js
import Profile from './Profile.js';

----------------------------------------------------------

🔹 Named Export  
- When a file has multiple components/variables  
- The name must match exactly while importing  

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
