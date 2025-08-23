<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FundChain: Transparent Charity on Aptos - README</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 0.75rem;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #edf2f7;
            padding-bottom: 0.5rem;
        }
        h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #2d3748;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2d3748;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
        }
        p {
            margin-bottom: 1rem;
        }
        ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }
        ol {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }
        li {
            margin-bottom: 0.5rem;
        }
        code {
            background-color: #edf2f7;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: 'monospace', monospace;
            color: #e53e3e;
        }
        pre {
            background-color: #2d3748;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-bottom: 1rem;
        }
        pre code {
            background-color: transparent;
            padding: 0;
            border-radius: 0;
            color: #e2e8f0;
        }
        a {
            color: #3182ce;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        hr {
            border: 0;
            border-top: 1px solid #edf2f7;
            margin: 2rem 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>FundChain: Transparent Charity on Aptos 🌟</h1>

        <h2>Project Overview</h2>
        <p>FundChain is a decentralized application (dApp) built on the Aptos blockchain, designed to bring transparency and accountability to charity donations and expense tracking. It allows users to connect their Petra Wallet, make donations in APT, and view a public record of all funds raised and spent by the charity. Donors can also see their total contributions, fostering trust and engagement.</p>

        <hr>

        <h2>Features ✨</h2>
        <ul>
            <li><strong>Petra Wallet Integration</strong>: Seamlessly connect and disconnect your Aptos Petra Wallet.</li>
            <li><strong>Transparent Donations</strong>: Donate APT to the charity address with on-chain verification.</li>
            <li><strong>Real-time Tracking</strong>: View the charity's current balance, total funds raised, and total funds spent in a modern, scrollable dashboard.</li>
            <li><strong>Donor Profile</strong>: See your connected wallet address and your aggregated donation history in a personalized, full-width section.</li>
            <li><strong>Admin Expense Recording</strong>: The designated charity address can record and categorize expenses, providing a clear audit trail.</li>
            <li><strong>Coming Soon Section</strong>: A dedicated section for future features, like a detailed expense tracker.</li>
            <li><strong>Responsive UI</strong>: A modern, animated, and mobile-friendly user interface built with React and Tailwind CSS.</li>
            <li><strong>Smooth Navigation</strong>: A sticky navigation bar with smooth scrolling to different sections of the dashboard.</li>
        </ul>

        <hr>

        <h2>Technologies Used 🛠️</h2>
        <ul>
            <li><strong>Frontend</strong>:
                <ul>
                    <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
                    <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI development.</li>
                    <li><strong>Framer Motion</strong>: A React library for production-ready animations.</li>
                    <li><strong>Lucide React</strong>: A collection of beautiful, customizable SVG icons.</li>
                    <li><strong>Google Fonts (Inter, Bebas Neue)</strong>: For modern and legible typography.</li>
                </ul>
            </li>
            <li><strong>Blockchain</strong>:
                <ul>
                    <li><strong>Aptos Blockchain</strong>: A high-performance Layer 1 blockchain.</li>
                    <li><strong>Aptos Move</strong>: The smart contract language used for on-chain logic.</li>
                    <li><strong>Petra Wallet</strong>: The wallet used for interacting with the Aptos blockchain.</li>
                </ul>
            </li>
        </ul>

        <hr>

        <h2>Getting Started 🚀</h2>
        <p>Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.</p>

        <h3>Prerequisites</h3>
        <p>Before you begin, ensure you have the following installed:</p>
        <ul>
            <li><strong>Node.js</strong> (LTS version recommended) & <strong>npm</strong> or <strong>Yarn</strong></li>
            <li><strong>Aptos CLI</strong>: Follow the <a href="https://aptos.dev/build/cli/install-aptos-cli">official Aptos documentation</a> for installation.</li>
            <li><strong>Petra Wallet</strong>: Install the <a href="https://petra.app/">Petra Wallet browser extension</a>.</li>
            <li><strong>Aptos Move Project</strong>: You will need your Move module (<code>charity_tracker.move</code>) deployed on the Aptos Testnet.</li>
        </ul>

        <h3>Installation</h3>
        <ol>
            <li><strong>Clone the repository</strong>:
                <pre><code>git clone &lt;your-repository-url&gt;
cd fundchain-dapp</code></pre>
            </li>
            <li><strong>Install dependencies</strong>:
                <pre><code>npm install
# or
yarn install</code></pre>
            </li>
        </ol>

        <h3>Aptos Move Module Deployment (Crucial Step!)</h3>
        <p><strong>Before running the dApp, you MUST deploy your <code>charity_tracker</code> Move module to the Aptos Testnet.</strong> This ensures the smart contract functions are available for your dApp to interact with.</p>
        <ol>
            <li><strong>Navigate to your Move project directory</strong> (where your <code>Move.toml</code> and <code>sources/charity_tracker.move</code> files are).</li>
            <li><strong>Publish the module</strong>: Replace <code>&lt;YOUR_MODULE_ADDRESS&gt;</code> with your Aptos account address where you want to deploy the module. This address should also be used for <code>CHARITY_ADDRESS</code> and <code>MODULE_ADDRESS</code> in your <code>App.tsx</code> file.
                <pre><code>aptos move publish --named-addresses charity_tracker=&lt;YOUR_MODULE_ADDRESS&gt;</code></pre>
                <ul>
                    <li><strong>Important</strong>: If you've made changes to the Move module (e.g., added new structs or functions), you <strong>must</strong> re-publish it for the changes to take effect on-chain.</li>
                </ul>
            </li>
        </ol>

        <h3>Running the dApp</h3>
        <ol>
            <li><strong>Start the React development server</strong>:
                <pre><code>npm start
# or
yarn start</code></pre>
            </li>
            <li>Open your browser to <code>http://localhost:3000</code> (or the address shown in your terminal).</li>
        </ol>

        <hr>

        <h2>Usage 💡</h2>
        <ol>
            <li><strong>Connect Wallet</strong>: On the entry page, click "Connect Petra Wallet" to link your Aptos wallet.</li>
            <li><strong>Navigate</strong>: Use the top navigation bar to jump between sections:
                <ul>
                    <li><strong>Overview</strong>: See general information and charity statistics.</li>
                    <li><strong>Our Impact</strong>: Learn about the charity's initiatives.</li>
                    <li><strong>Profile</strong>: View your wallet address and total donations.</li>
                    <li><strong>Donate</strong>: Make a new donation.</li>
                    <li><strong>Expenses</strong>: (Coming Soon) Future feature for detailed expense tracking.</li>
                </ul>
            </li>
            <li><strong>Donate</strong>: In the "Make a Donation" section, select a preset amount or enter a custom amount, then click "Donate Now".</li>
            <li><strong>Admin Functions</strong>: If your connected wallet address matches the <code>CHARITY_ADDRESS</code>, you will see an "Admin: Record an Expense" section. Use this to record how donated funds are spent.</li>
        </ol>

        <hr>

        <h2>Contributing 🤝</h2>
        <p>Contributions are welcome! If you have suggestions for improvements or new features, please feel free to:</p>
        <ol>
            <li>Fork the repository.</li>
            <li>Create a new branch (<code>git checkout -b feature/AmazingFeature</code>).</li>
            <li>Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>).</li>
            <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>).</li>
            <li>Open a Pull Request.</li>
        </ol>

        <hr>

        <h2>License 📄</h2>
        <p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>
    </div>
</body>
</html>
