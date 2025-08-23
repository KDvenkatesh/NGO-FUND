
# **FundChain: Transparent Charity on Aptos**

## **Project Overview 🌟**

FundChain is a decentralized application (dApp) built on the Aptos blockchain, designed to bring transparency and accountability to charity donations and expense tracking. It allows users to connect their Petra Wallet, make donations in APT, and view a public record of all funds raised and spent by the charity. Donors can also see their total contributions, fostering trust and engagement.

## **Features ✨**

* **Petra Wallet Integration**: Seamlessly connect and disconnect your Aptos Petra Wallet.  
* **Transparent Donations**: Donate APT to the charity address with on-chain verification.  
* **Real-time Tracking**: View the charity's current balance, total funds raised, and total funds spent in a modern, scrollable dashboard.  
* **Donor Profile**: See your connected wallet address and your aggregated donation history in a personalized, full-width section.  
* **Admin Expense Recording**: The designated charity address can record and categorize expenses, providing a clear audit trail.  
* **Coming Soon Section**: A dedicated section for future features, like a detailed expense tracker.  
* **Responsive UI**: A modern, animated, and mobile-friendly user interface built with React and Tailwind CSS.  
* **Smooth Navigation**: A sticky navigation bar with smooth scrolling to different sections of the dashboard.

## **Technologies Used 🛠️**

* **Frontend**:  
  * **React**: A JavaScript library for building user interfaces.  
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.  
  * **Framer Motion**: A React library for production-ready animations.  
  * **Lucide React**: A collection of beautiful, customizable SVG icons.  
  * **Google Fonts (Inter, Bebas Neue)**: For modern and legible typography.  
* **Blockchain**:  
  * **Aptos Blockchain**: A high-performance Layer 1 blockchain.  
  * **Aptos Move**: The smart contract language used for on-chain logic.  
  * **Petra Wallet**: The wallet used for interacting with the Aptos blockchain.

## **Getting Started 🚀**

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended) & **npm** or **Yarn**  
* **Aptos CLI**: Follow the [official Aptos documentation](https://www.google.com/search?q=https://aptos.dev/build/cli/install-aptos-cli) for installation.  
* **Petra Wallet**: Install the [Petra Wallet browser extension](https://petra.app/).  
* **Aptos Move Project**: You will need your Move module (charity\_tracker.move) deployed on the Aptos Testnet.

### **Installation**

1. **Clone the repository**:  
   git clone \<your-repository-url\>  
   cd fundchain-dapp

2. **Install dependencies**:  
   npm install  
   \# or  
   yarn install

### **Aptos Move Module Deployment (Crucial Step\!)**

**Before running the dApp, you MUST deploy your charity\_tracker Move module to the Aptos Testnet.** This ensures the smart contract functions are available for your dApp to interact with.

1. **Navigate to your Move project directory** (where your Move.toml and sources/charity\_tracker.move files are).  
2. **Publish the module**: Replace \<YOUR\_MODULE\_ADDRESS\> with your Aptos account address where you want to deploy the module. This address should also be used for CHARITY\_ADDRESS and MODULE\_ADDRESS in your App.tsx file.  
   aptos move publish \--named-addresses charity\_tracker=\<YOUR\_MODULE\_ADDRESS\>

   * **Important**: If you've made changes to the Move module (e.g., added new structs or functions), you **must** re-publish it for the changes to take effect on-chain.

### **Running the dApp**

1. **Start the React development server**:  
   npm start  
   \# or  
   yarn start

2. Open your browser to http://localhost:3000 (or the address shown in your terminal).

## **Usage 💡**

1. **Connect Wallet**: On the entry page, click "Connect Petra Wallet" to link your Aptos wallet.  
2. **Navigate**: Use the top navigation bar to jump between sections:  
   * **Overview**: See general information and charity statistics.  
   * **Our Impact**: Learn about the charity's initiatives.  
   * **Profile**: View your wallet address and total donations.  
   * **Donate**: Make a new donation.  
   * **Expenses**: (Coming Soon) Future feature for detailed expense tracking.  
3. **Donate**: In the "Make a Donation" section, select a preset amount or enter a custom amount, then click "Donate Now".  
4. **Admin Functions**: If your connected wallet address matches the CHARITY\_ADDRESS, you will see an "Admin: Record an Expense" section. Use this to record how donated funds are spent.

## **Contributing 🤝**

Contributions are welcome\! If you have suggestions for improvements or new features, please feel free to:

1. Fork the repository.  
2. Create a new branch (git checkout \-b feature/AmazingFeature).  
3. Commit your changes (git commit \-m 'Add some AmazingFeature').  
4. Push to the branch (git push origin feature/AmazingFeature).  
5. Open a Pull Request.

## **License 📄**

This project is licensed under the MIT License \- see the LICENSE file for details.
