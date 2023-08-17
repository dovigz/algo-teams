## Getting Started

### Client Setup

1. Navigate to the client directory:
   \`\`\`bash
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the client:
   \`\`\`bash
   npm start
   \`\`\`

### Server Setup

If you want to run your own server, follow the steps below:

1. You will need to create a .env file in the server directory with the following variables:

\`\`\`plaintext
MONGODB_URI="mongodb+srv://...."
PORT=4000
SECRET=YOUR_SECRET_HERE
\`\`\`

2. Update the backendUrl constant to point to your server URL:
   \`\`\`javascript
   const backendUrl = "http://localhost:4000/";
   \`\`\`

3. Navigate to the server directory:
   \`\`\`bash
   cd server
   \`\`\`

4. Install the server dependencies:
   \`\`\`bash
   npm install
   \`\`\`

5. Start the server:
   \`\`\`bash
   npm start
   \`\`\`

### Extension Setup

If you want to run the extension in LeetCode sidebar

1. Change the APP_URL in content.js and panel.js in the extension to point to your own localhost URL.

2. Load the modified extension into Chrome via the Chrome Extensions page.

3. after changing the front end code you can refresh the extension by clicking the refresh button in the extension page.

---

Happy coding and collaborating!
