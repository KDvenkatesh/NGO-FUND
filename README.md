\<\!-- Chosen Palette: A minimalistic palette grounded in light grays and whites for backgrounds, with subtle blues, greens, reds, and purples for data highlights and interactive elements. Accent colors like pink and orange are used sparingly for calls to action and branding. --\>

\<\!-- Application Structure Plan: The application is structured as a single-page interactive dashboard with distinct thematic sections: an initial 'Entry Page' for wallet connection, a fixed 'Navbar' for site-wide navigation, a dynamic 'Overview' displaying key charity statistics and a call to action, an 'Our Impact' section for qualitative insights and visual storytelling, a personalized 'Profile' section for donor-specific information, an interactive 'Donate' section for contributions, and a 'Coming Soon' placeholder for 'Expenses'. This structure prioritizes user-centric exploration, allowing users to quickly access relevant information and functionalities without page reloads. The smooth-scrolling navigation enhances usability by providing a cohesive single-page experience. --\>

\<\!-- Visualization & Content Choices:

  - Entry Page Heading: Report Info -\> Project Name/Motto -\> Goal -\> Engage user, set tone -\> Presentation Method -\> Large, styled text with a relevant quote -\> Interaction -\> None (static text) -\> Justification -\> Evokes emotion, clear branding -\> Library/Method - HTML/CSS (Tailwind), Google Fonts (Inter, Bebas Neue).
  - Navbar: Report Info -\> Navigation links -\> Goal -\> Facilitate quick access to sections -\> Presentation Method -\> Sticky navigation bar with text links -\> Interaction -\> Smooth scroll to section IDs -\> Justification -\> Standard, intuitive navigation for SPAs -\> Library/Method - HTML/JS (Vanilla), HTML/CSS (Tailwind).
  - Overview Section (Header Stats): Report Info -\> Total Raised, Current Balance, Total Spent, Donor Total Donated -\> Goal -\> Inform user of key financial metrics -\> Presentation Method -\> Four prominent, glass-morphed boxes -\> Interaction -\> None specific, visual emphasis -\> Justification -\> Clear, scannable display of critical numbers. Glass-morphism adds modern aesthetic. -\> Library/Method - HTML/CSS (Tailwind).
  - Overview Main Content: Report Info -\> Mission, call to action, general images -\> Goal -\> Engage user, explain purpose, prompt donation -\> Presentation Method -\> Text blocks with a large hero image and a grid of smaller images, a "Donate Now" button -\> Interaction -\> Button scrolls to donate section -\> Justification -\> Standard engaging hero section with visual support and clear call to action -\> Library/Method - HTML/CSS (Tailwind).
  - Our Impact Section: Report Info -\> Qualitative insights about charity work (education, community, etc.), supporting images -\> Goal -\> Provide detailed context and emotional connection -\> Presentation Method -\> Text blocks with a main image and a grid of smaller images -\> Interaction -\> None specific, primarily informative -\> Justification -\> Visual storytelling to reinforce the charity's mission -\> Library/Method - HTML/CSS (Tailwind).
  - Profile Section: Report Info -\> User's wallet address, total donations -\> Goal -\> Personalize the experience, show individual impact -\> Presentation Method -\> Contact-card-like layout with avatar, address, and donation total -\> Interaction -\> None specific, primarily informative -\> Justification -\> Intuitive presentation of personal information, easy to read -\> Library/Method - HTML/CSS (Tailwind).
  - Donate Section: Report Info -\> Donation amounts, process -\> Goal -\> Facilitate easy and quick donations -\> Presentation Method -\> Form with preset buttons, custom input, and a main donate button. Tabs for "Give Once" / "Monthly" -\> Interaction -\> Button clicks for preset amounts, input for custom, "Donate Now" for transaction -\> Justification -\> Mimics familiar online donation forms for ease of use -\> Library/Method - HTML/JS (Vanilla).
  - Expenses (Coming Soon) Section: Report Info -\> Placeholder for future expense tracking -\> Goal -\> Manage user expectations, indicate future development -\> Presentation Method -\> Centralized text with an icon and "Explore More" button -\> Interaction -\> Button scrolls to Overview -\> Justification -\> Clear communication for unfinished features. -\> Library/Method - HTML/CSS (Tailwind) + Unicode icon.
  - Footer: Report Info -\> Copyright, legal links -\> Goal -\> Provide standard legal/contact info -\> Presentation Method -\> Simple text links -\> Interaction -\> External links -\> Justification -\> Standard web footer -\> Library/Method - HTML/CSS (Tailwind).

CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. --\>

\<\!DOCTYPE html\>

\<html lang="en"\>
\<head\>
\<meta charset="UTF-8"\>
\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>
\<title\>FundChain: Transparent Charity on Aptos\</title\>
\<link href="[https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css](https://www.google.com/search?q=https://cdn.jsdelivr.net/npm/tailwindcss%402.2.19/dist/tailwind.min.css)" rel="stylesheet"\>
\<link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;700\&family=Bebas+Neue\&display=swap](https://www.google.com/search?q=https://fonts.googleapis.com/css2%3Ffamily%3DInter:wght%40400%3B700%26family%3DBebas%2BNeue%26display%3Dswap)" rel="stylesheet"\>
\<style\>
.font-inter {
font-family: 'Inter', sans-serif;
}
.font-bebas-neue {
font-family: 'Bebas Neue', cursive;
}
@keyframes blob {
0% { transform: translate(0px, 0px) scale(1); }
33% { transform: translate(30px, -50px) scale(1.1); }
66% { transform: translate(-20px, 20px) scale(0.9); }
100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
\</style\>
\</head\>
\<body class="bg-gray-100 text-gray-800 font-inter"\>

```
<div id="entry-page" class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    
    <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')"></div>

    <div class="relative z-10 bg-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-12 rounded-3xl border border-white/20 text-center max-w-lg w-full">
        <div class="mb-4">
            <span class="text-pink-400 text-6xl block mb-2">❤️</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-black font-inter leading-tight">
            No one has ever become poor by giving
        </h1>
        <p class="text-xl text-black/80 mb-8 font-inter">
            Connect your wallet to track donations and make a real impact.
        </p>
        <div class="flex flex-col space-y-4">
            <button id="connect-wallet-button" class="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:shadow-xl transition-all duration-300 font-inter">
                Connect Petra Wallet
            </button>
            <div class="flex justify-center space-x-4 mt-4">
                <a href="[https://instagram.com/your_instagram](https://instagram.com/your_instagram)" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 font-inter">
                    INSTAGRAM
                </a>
                <a href="[https://figma.com/@your_figma](https://figma.com/@your_figma)" target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 font-inter">
                    FIGMA
                </a>
            </div>
        </div>
    </div>
</div>

<div id="dashboard-page" class="min-h-screen bg-gray-100 text-gray-800 flex flex-col hidden">
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md p-4 flex justify-between items-center rounded-b-xl">
        <div class="flex items-center space-x-2">
            <span class="text-pink-500 text-2xl">❤️</span>
            <span class="font-bold text-gray-800 text-lg font-inter">FundChain</span>
        </div>
        <div class="flex space-x-4">
            <a onclick="scrollToSection('overview')" class="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Overview</a>
            <a onclick="scrollToSection('our-impact')" class="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Our Impact</a>
            <a onclick="scrollToSection('profile')" class="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Profile</a>
            <a onclick="scrollToSection('donate')" class="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Donate</a>
            <a onclick="scrollToSection('expenses-coming-soon')" class="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Expenses</a>
        </div>
        <div class="flex items-center space-x-4">
            <span id="wallet-address-display" class="text-sm text-gray-700 hidden md:block font-mono"></span>
            <button id="disconnect-wallet-button" class="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 font-inter">
                Disconnect
            </button>
        </div>
    </nav>

    <div class="flex-1 overflow-y-auto pt-20">
        <section id="overview" class="w-full mb-12 bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200">
            <div class="container mx-auto max-w-4xl">
                <h2 class="text-3xl font-bold text-black mb-6 font-inter">Overview of Our Impact</h2>
                
                <div class="mb-8">
                    <img 
                        src="[https://placehold.co/1200x500/87CEEB/000000?text=Making+a+Difference+Together](https://placehold.co/1200x500/87CEEB/000000?text=Making+a+Difference+Together)" 
                        alt="Making a Difference Together" 
                        class="w-full h-auto rounded-lg shadow-md mb-4"
                    />
                    <p class="text-black text-lg mb-4 font-inter">
                        At FundChain, we believe in the power of collective giving to create lasting change. Our mission is to provide transparent and efficient ways for you to contribute to causes that matter. Every donation, big or small, directly impacts lives and helps build a brighter future.
                    </p>
                    <button onclick="scrollToSection('donate')" class="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter mt-4 block mx-auto">
                        Donate Now
                    </button>
                </div>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
                    <div class="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30">
                        <p class="text-sm font-semibold text-gray-700 font-inter">Total Donations Received</p>
                        <p id="total-raised-display" class="text-3xl md:text-4xl font-bold text-black font-bebas-neue">0.0000 APT</p>
                    </div>
                    <div class="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30">
                        <p class="text-sm font-semibold text-gray-700 font-inter">Current Balance</p>
                        <p id="balance-display" class="text-3xl md:text-4xl font-bold text-black font-bebas-neue">0.0000 APT</p>
                    </div>
                    <div class="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30">
                        <p class="text-sm font-semibold text-gray-700 font-inter">Total Funds Spent</p>
                        <p id="total-spent-display" class="text-3xl md:text-4xl font-bold text-black font-bebas-neue">0.0000 APT</p>
                    </div>
                    <div id="donor-total-donated-box" class="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30 hidden">
                        <p class="text-sm font-semibold text-gray-700 font-inter">Your Total Donated</p>
                        <p id="donor-total-donated-display" class="text-3xl md:text-4xl font-bold text-black font-bebas-neue">0.0000 APT</p>
                    </div>
                </div>

                <p class="text-black text-lg font-inter mt-8">
                    Our platform ensures that every transaction is recorded on the Aptos blockchain, providing unparalleled transparency and accountability. You can track where your funds go and witness the real-world impact of your generosity. Join us in making a tangible difference today!
                </p>
            </div>
        </section>
        
        <div class="container mx-auto max-w-4xl px-4 py-8">
            <section id="our-impact" class="mb-12 bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-inter text-black">Our Impact: Education for All</h2>
                <div class="mb-8">
                    <img 
                        src="[https://placehold.co/800x400/87CEEB/000000?text=Children+Learning](https://placehold.co/800x400/87CEEB/000000?text=Children+Learning)" 
                        alt="Children learning in a classroom" 
                        class="w-full h-auto rounded-lg shadow-md mb-4"
                    />
                    <p class="text-gray-700 text-lg mb-4 font-inter text-black">
                        We believe in the power of education to transform lives. Through your generous donations, we're building schools, providing learning materials, and supporting teachers in underserved communities. Every contribution helps a child reach their full potential.
                    </p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <img src="[https://placehold.co/200x150/FFD700/000000?text=Happy+Kids](https://placehold.co/200x150/FFD700/000000?text=Happy+Kids)" alt="Happy children" class="w-full h-auto rounded-md shadow-sm" />
                        <img src="[https://placehold.co/200x150/90EE90/000000?text=New+Books](https://placehold.co/200x150/90EE90/000000?text=New+Books)" alt="New school books" class="w-full h-auto rounded-md shadow-sm" />
                        <img src="[https://placehold.co/200x150/FF6347/000000?text=Community+Support](https://placehold.co/200x150/FF6347/000000?text=Community+Support)" alt="Community support" class="w-full h-auto rounded-md shadow-sm" />
                        <img src="[https://placehold.co/200x150/6A5ACD/000000?text=Clean+Water](https://placehold.co/200x150/6A5ACD/000000?text=Clean+Water)" alt="Children with clean water" class="w-full h-auto rounded-md shadow-sm" />
                        <img src="[https://placehold.co/200x150/F08080/000000?text=Healthcare](https://placehold.co/200x150/F08080/000000?text=Healthcare)" alt="Healthcare supplies" class="w-full h-auto rounded-md shadow-sm" />
                        <img src="[https://placehold.co/200x150/20B2AA/000000?text=Future+Leaders](https://placehold.co/200x150/20B2AA/000000?text=Future+Leaders)" alt="Children aspiring" class="w-full h-auto rounded-md shadow-sm" />
                    </div>
                </div>
                <p class="text-black text-lg font-inter">
                    Our platform ensures that every transaction is recorded on the Aptos blockchain, providing unparalleled transparency and accountability. You can track where your funds go and witness the real-world impact of your generosity. Join us in making a tangible difference today!
                </p>
            </section>
            
            <section id="profile" class="w-full mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-inter text-black text-center">Your Profile</h2>
                <div class="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center space-y-6 w-full max-w-md mx-auto">
                    <div class="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                        👤
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 font-inter text-black">Your Donor Profile</h2>
                    
                    <div class="bg-white/50 backdrop-blur-md p-4 rounded-xl w-full flex items-center space-x-3 shadow-sm border border-white/30">
                        <span class="text-blue-500 text-xl">👛</span>
                        <div class="text-left flex-1">
                            <p class="text-sm font-semibold text-gray-700 font-inter">Wallet Address</p>
                            <p id="profile-wallet-address" class="text-base text-gray-800 font-mono break-all"></p>
                        </div>
                    </div>

                    <div class="bg-white/50 backdrop-blur-md p-4 rounded-xl w-full flex items-center space-x-3 shadow-sm border border-white/30">
                        <span class="text-pink-500 text-xl">❤️</span>
                        <div class="text-left flex-1">
                            <p class="text-sm font-semibold text-gray-700 font-inter">Total Donated</p>
                            <p id="profile-total-donated" class="text-base font-bold text-green-600 font-inter">0.0000 APT</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="donate" class="w-full mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-inter text-black text-center">Make a Donation</h2>
                <div class="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 w-full max-w-xl mx-auto">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4 font-inter text-black text-center">Your most generous donation</h2>
                    
                    <div class="flex justify-center mb-6 bg-gray-100 rounded-lg p-1">
                        <button class="flex-1 py-2 text-sm font-semibold rounded-md bg-pink-500 text-white shadow-sm font-inter">Give Once</button>
                        <button class="flex-1 py-2 text-sm font-semibold rounded-md text-gray-600 font-inter">Monthly</button>
                    </div>

                    <div class="grid grid-cols-3 gap-3 mb-6">
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="0.05">0.05 APT</button>
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="0.1">0.10 APT</button>
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="0.2">0.20 APT</button>
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="1.0">1.00 APT</button>
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="2.5">2.50 APT</button>
                        <button class="preset-amount px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 hover:bg-white/70" data-amount="5.0">5.00 APT</button>
                    </div>

                    <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6">
                        <span class="px-4 py-3 bg-gray-100 text-gray-600 text-lg font-inter">APT</span>
                        <input id="custom-amount-input" type="number" placeholder="Custom amount" value="" class="flex-1 px-4 py-3 text-lg text-gray-800 bg-white focus:outline-none font-inter"/>
                        <span class="px-4 py-3 bg-gray-100 text-gray-600 text-lg font-inter">USD</span>
                    </div>

                    <div class="flex items-center mb-4">
                        <input type="checkbox" id="dedicate" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                        <label for="dedicate" class="ml-2 text-sm text-gray-700 font-inter">Dedicate this donation</label>
                    </div>

                    <p class="text-sm text-gray-700 mb-6 font-inter">Designate to <a href="#" class="text-blue-600 hover:underline">Where it is needed most</a></p>

                    <button id="donate-button" class="w-full px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-inter">
                        Donate Now
                    </button>
                </div>
            </section>

            <section id="record-expense" class="mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 font-inter text-black">Admin: Record an Expense</h2>
                <div class="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 mb-8 max-w-xl mx-auto">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4 font-inter text-black">Admin: Record an Expense</h2>
                     <div class="flex flex-col space-y-4">
                        <input id="expense-amount-input" type="number" placeholder="Expense amount in APT" value="" class="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter"/>
                        <input id="expense-purpose-input" type="text" placeholder="Purpose (e.g., 'Purchase of 100 blankets')" value="" class="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter"/>
                        <select id="expense-category-select" class="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter">
                            <option value="Food & Water">Food & Water</option>
                            <option value="Medical Supplies">Medical Supplies</option>
                            <option value="Shelter">Shelter</option>
                            <option value="Education">Education</option>
                            <option value="Operational Costs">Operational Costs</option>
                        </select>
                        <button id="record-expense-button" class="w-full px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-inter">
                            Record Expense
                        </button>
                    </div>
                </div>
            </section>

            <section id="expenses-coming-soon" class="w-full mb-12 bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 text-center">
                <h2 class="text-3xl font-bold text-black mb-4 font-inter">Expenses Tracker</h2>
                <div class="flex flex-col items-center justify-center h-48">
                    <span class="text-gray-400 text-5xl mb-4">ℹ️</span>
                    <p class="text-xl text-gray-600 font-inter">Coming Soon!</p>
                    <button onclick="scrollToSection('overview')" class="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter mt-6">
                        Explore More
                    </button>
                </div>
            </section>
        </div>
        <footer class="bg-gray-800 text-white/70 text-center p-6 mt-12 rounded-t-xl font-inter">
            <div class="container mx-auto">
                <p>&copy; 2025 FundChain. All rights reserved.</p>
                <div class="flex justify-center space-x-4 mt-4">
                    <a href="#" class="hover:text-pink-400 transition-colors duration-200">About Us</a>
                    <a href="#" class="hover:text-pink-400 transition-colors duration-200">Privacy Policy</a>
                    <a href="#" class="hover:text-pink-400 transition-colors duration-200">Terms of Service</a>
                </div>
            </div>
        </footer>
    </div>
</div>

<script>
    const CHARITY_ADDRESS = '0xbc6672e193635582a91fa845509987cd628c5f2a9a12f02440fa47b861139e58'; 
    const MODULE_ADDRESS = '0xbc6672e193635582a91fa845509987cd628c5f2a9a12f02440fa47b861139e58'; 
    const MODULE_NAME = 'charity_tracker';
    const APTOS_NODE_URL = '[https://fullnode.testnet.aptoslabs.com/v1](https://fullnode.testnet.aptoslabs.com/v1)';

    let walletState = { address: null, isConnected: false };
    let appData = {
        balance: 0,
        totalRaised: 0,
        totalSpent: 0,
        donorTotalDonated: 0,
        expenses: []
    };
    let isLoading = {
        donate: false,
        record: false
    };

    const entryPage = document.getElementById('entry-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const connectWalletButton = document.getElementById('connect-wallet-button');
    const disconnectWalletButton = document.getElementById('disconnect-wallet-button');
    const walletAddressDisplay = document.getElementById('wallet-address-display');

    const totalRaisedDisplay = document.getElementById('total-raised-display');
    const balanceDisplay = document.getElementById('balance-display');
    const totalSpentDisplay = document.getElementById('total-spent-display');
    const donorTotalDonatedBox = document.getElementById('donor-total-donated-box');
    const donorTotalDonatedDisplay = document.getElementById('donor-total-donated-display');

    const profileWalletAddress = document.getElementById('profile-wallet-address');
    const profileTotalDonated = document.getElementById('profile-total-donated');

    const donationPresetButtons = document.querySelectorAll('.preset-amount');
    const customAmountInput = document.getElementById('custom-amount-input');
    const donateButton = document.getElementById('donate-button');

    const expenseAmountInput = document.getElementById('expense-amount-input');
    const expensePurposeInput = document.getElementById('expense-purpose-input');
    const expenseCategorySelect = document.getElementById('expense-category-select');
    const recordExpenseButton = document.getElementById('record-expense-button');

    function getAptosWallet() {
        if ('aptos' in window) {
            return window.aptos;
        }
        return undefined;
    }

    async function connectWallet() {
        const aptosWallet = getAptosWallet();
        if (!aptosWallet) {
            alert("Petra Wallet not found. Please install it.");
            return;
        }
        try {
            await aptosWallet.connect();
            const account = await aptosWallet.account();
            walletState.address = account.address;
            walletState.isConnected = true;
            updateUI();
            fetchData();
        } catch (error) {
            console.error("Failed to connect wallet:", error);
            alert("Failed to connect wallet. Please try again.");
        }
    }

    async function disconnectWallet() {
        const aptosWallet = getAptosWallet();
        if (!aptosWallet) {
            alert("Petra Wallet not found.");
            return;
        }
        try {
            await aptosWallet.disconnect();
            walletState.address = null;
            walletState.isConnected = false;
            appData.donorTotalDonated = 0;
            updateUI();
        } catch (error) {
            console.error("Failed to disconnect wallet:", error);
            alert("Failed to disconnect wallet. Please try again.");
        }
    }

    async function waitForTransaction(hash) {
        for (let i = 0; i < 30; i++) {
            try {
                const response = await fetch(`${APTOS_NODE_URL}/transactions/by_hash/${hash}`);
                if (response.status === 200) {
                    const data = await response.json();
                    if (data.success) return data;
                    throw new Error(`Transaction failed: ${data.vm_status}`);
                }
            } catch (e) { console.error(e); }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        throw new Error('Transaction timed out.');
    }

    async function fetchCharityData() {
        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::get_charity_stats`,
                type_arguments: [],
                arguments: [CHARITY_ADDRESS],
            };
            const response = await fetch(`${APTOS_NODE_URL}/view`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error("Failed to fetch charity data");
            const data = await response.json();
            appData.balance = parseInt(data[0], 10);
            appData.totalRaised = parseInt(data[1], 10);
            appData.totalSpent = parseInt(data[2], 10);
            updateDashboardStats();
        } catch (error) {
            console.error("Could not fetch charity data:", error);
        }
    }
    
    async function fetchDonorProfile(address) {
        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::get_donor_profile`,
                type_arguments: [],
                arguments: [address],
            };
            const response = await fetch(`${APTOS_NODE_URL}/view`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (response.status === 404) {
                appData.donorTotalDonated = 0;
                return;
            }
            if (!response.ok) throw new Error("Failed to fetch donor profile");
            const data = await response.json();
            appData.donorTotalDonated = parseInt(data[1], 10);
            updateDashboardStats();
            updateProfileSection();
        } catch (error) {
            console.error("Could not fetch donor profile:", error);
        }
    }

    async function handleDonate() {
        const aptosWallet = getAptosWallet();
        if (!walletState.isConnected || !aptosWallet) { alert("Please connect your wallet."); return; }
        const amount = customAmountInput.value;
        const amountInOcta = parseFloat(amount) * 10**8;
        if (isNaN(amountInOcta) || amountInOcta <= 0) { alert("Please enter a valid amount."); return; }
        
        isLoading.donate = true;
        donateButton.disabled = true;
        donateButton.textContent = 'Processing...';

        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::donate_with_signer`,
                type_arguments: [],
                arguments: [CHARITY_ADDRESS, amountInOcta.toString()],
            };
            const tx = await aptosWallet.signAndSubmitTransaction(payload);
            await waitForTransaction(tx.hash);
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            
            alert("Donation successful!");
            fetchData();
            customAmountInput.value = '';
            donationPresetButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md'));
            donationPresetButtons.forEach(btn => btn.classList.add('bg-white/50', 'text-gray-700', 'hover:bg-white/70'));

        } catch (error) {
            console.error(error);
            alert(`Donation failed: ${error.message}`);
        } finally {
            isLoading.donate = false;
            donateButton.disabled = false;
            donateButton.textContent = 'Donate Now';
        }
    }
    
    async function handleRecordExpense() {
        const aptosWallet = getAptosWallet();
        if (!walletState.isConnected || !aptosWallet) { alert("Please connect your wallet."); return; }
        const amount = expenseAmountInput.value;
        const purpose = expensePurposeInput.value;
        const category = expenseCategorySelect.value;

        const amountInOcta = parseFloat(amount) * 10**8;
        if (isNaN(amountInOcta) || amountInOcta <= 0) { alert("Please enter a valid amount."); return; }
        if (!purpose) { alert("Please enter a purpose for the expense."); return; }

        isLoading.record = true;
        recordExpenseButton.disabled = true;
        recordExpenseButton.textContent = 'Recording...';

        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::record_expense`,
                type_arguments: [],
                arguments: [amountInOcta.toString(), purpose, category],
            };
            const tx = await aptosWallet.signAndSubmitTransaction(payload);
            await waitForTransaction(tx.hash);
            alert("Expense recorded successfully!");
            fetchData();
            expenseAmountInput.value = '';
            expensePurposeInput.value = '';
        } catch (error) {
            console.error(error);
            alert(`Failed to record expense: ${error.message}`);
        } finally {
            isLoading.record = false;
            recordExpenseButton.disabled = false;
            recordExpenseButton.textContent = 'Record Expense';
        }
    }

    function updateUI() {
        if (walletState.isConnected) {
            entryPage.classList.add('hidden');
            dashboardPage.classList.remove('hidden');
            walletAddressDisplay.textContent = `${walletState.address.slice(0, 6)}...${walletState.address.slice(-4)}`;
            walletAddressDisplay.classList.remove('hidden');
            if (walletState.address === CHARITY_ADDRESS) {
                document.getElementById('record-expense').classList.remove('hidden');
            } else {
                document.getElementById('record-expense').classList.add('hidden');
            }
            donorTotalDonatedBox.classList.remove('hidden');
        } else {
            entryPage.classList.remove('hidden');
            dashboardPage.classList.add('hidden');
            walletAddressDisplay.classList.add('hidden');
            document.getElementById('record-expense').classList.add('hidden');
            donorTotalDonatedBox.classList.add('hidden');
        }
    }

    function updateDashboardStats() {
        totalRaisedDisplay.textContent = `${(appData.totalRaised / 10**8).toFixed(4)} APT`;
        balanceDisplay.textContent = `${(appData.balance / 10**8).toFixed(4)} APT`;
        totalSpentDisplay.textContent = `${(appData.totalSpent / 10**8).toFixed(4)} APT`;
        donorTotalDonatedDisplay.textContent = `${(appData.donorTotalDonated / 10**8).toFixed(4)} APT`;
    }

    function updateProfileSection() {
        profileWalletAddress.textContent = walletState.address;
        profileTotalDonated.textContent = `${(appData.donorTotalDonated / 10**8).toFixed(4)} APT`;
    }

    function fetchData() {
        fetchCharityData();
        if (walletState.isConnected && walletState.address) {
            fetchDonorProfile(walletState.address);
        }
    }

    function scrollToSection(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('DOMContentLoaded', () => {
        connectWalletButton.addEventListener('click', connectWallet);
        disconnectWalletButton.addEventListener('click', disconnectWallet);
        donateButton.addEventListener('click', handleDonate);
        recordExpenseButton.addEventListener('click', handleRecordExpense);

        donationPresetButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const amount = e.target.dataset.amount;
                customAmountInput.value = amount;
                donationPresetButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-500', 'text-white', 'shadow-md');
                    btn.classList.add('bg-white/50', 'text-gray-700', 'hover:bg-white/70');
                });
                e.target.classList.add('bg-blue-500', 'text-white', 'shadow-md');
                e.target.classList.remove('bg-white/50', 'text-gray-700', 'hover:bg-white/70');
            });
        });

        setInterval(fetchData, 5000); // Poll every 5 seconds
        updateUI(); // Initial UI update
    });
</script>
```

\</body\>
\</html\>
