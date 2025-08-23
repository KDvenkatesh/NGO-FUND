import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandHeart, User, Wallet, Info } from 'lucide-react'; // Import necessary icons

// --- CONFIGURATION ---
const CHARITY_ADDRESS = '0xbc6672e193635582a91fa845509987cd628c5f2a9a12f02440fa47b861139e58'; 
const MODULE_ADDRESS = '0xbc6672e193635582a91fa845509987cd628c5f2a9a12f02440fa47b861139e58'; 
const MODULE_NAME = 'charity_tracker';
const APTOS_NODE_URL = 'https://fullnode.testnet.aptoslabs.com/v1';

// --- TYPE DEFINITIONS ---
interface AptosWallet {
  connect: () => Promise<any>;
  disconnect: () => Promise<void>;
  account: () => Promise<{ address: string; publicKey: string }>;
  signAndSubmitTransaction: (transaction: any) => Promise<{ hash: string }>;
}

type WalletState = { address: string | null; isConnected: boolean; };
type Expense = { purpose: string; category: string; amount: number; timestamp: string; };

// --- API HELPER ---
const waitForTransaction = async (hash: string) => {
    for (let i = 0; i < 30; i++) {
        try {
            const response = await fetch(`${APTOS_NODE_URL}/transactions/by_hash/${hash}`);
            if (response.status === 200) {
                const data = await response.json();
                if (data.success) return data;
                throw new Error(`Transaction failed: ${data.vm_status}`);
            }
        } catch (e) { throw e; }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error('Transaction timed out.');
};

// --- UI COMPONENTS with ANIMATIONS ---

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Header = ({ balance, totalRaised, totalSpent, donorTotalDonated, isConnected }) => ( // Added totalSpent, donorTotalDonated, isConnected
    <motion.header 
        className="text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
    >
        <h1 className="text-5xl font-bold tracking-tight font-inter text-black">Charity Donation Tracker</h1>
        <p className="text-gray-600 mt-2 text-lg font-inter text-black">Transparently funding community projects.</p>
        <div className="mt-4">
            <p className="text-sm font-mono bg-gray-200 px-3 py-1 inline-block rounded-md text-gray-700">
                Charity Address: {CHARITY_ADDRESS}
            </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center max-w-4xl mx-auto"> {/* Adjusted grid and added mx-auto */}
            <motion.div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-200" whileHover={{ scale: 1.05 }}>
                <p className="text-sm font-semibold text-gray-600">Total Donations Received</p>
                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(totalRaised / 10**8).toFixed(4)} APT</p>
            </motion.div>
            <motion.div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg" whileHover={{ scale: 1.05 }}>
                <p className="text-sm font-semibold text-gray-600">Current Balance</p>
                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(balance / 10**8).toFixed(4)} APT</p>
            </motion.div>
            <motion.div className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-sm border border-gray-200" whileHover={{ scale: 1.05 }}>
                <p className="text-sm font-semibold text-gray-600">Total Funds Spent</p>
                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(totalSpent / 10**8).toFixed(4)} APT</p>
            </motion.div>
            {isConnected && ( // Only show "Your Total Donated" if connected
                <motion.div className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg" whileHover={{ scale: 1.05 }}>
                    <p className="text-sm font-semibold text-gray-600">Your Total Donated</p>
                    <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(donorTotalDonated / 10**8).toFixed(4)} APT</p>
                </motion.div>
            )}
        </div>
    </motion.header>
);

const DonationCard = ({ onDonate, isLoading }) => {
    const [amount, setAmount] = useState('');
    const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

    const handlePresetClick = (value: number) => {
        setAmount(value.toString());
        setSelectedPreset(value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        setSelectedPreset(null); // Deselect preset if custom amount is entered
    };

    const handleDonateClick = () => { // Renamed to avoid conflict with prop
        const amountInOcta = parseFloat(amount) * 10**8;
        if (isNaN(amountInOcta) || amountInOcta <= 0) { alert("Please enter a valid amount."); return; }
        onDonate(amountInOcta.toString());
    };

    // Changed preset values to represent APT directly (e.g., 0.05 APT)
    const presets = [0.05, 0.1, 0.2, 1.0, 2.5, 5.0]; // Example presets in APT

    return (
        <motion.div className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 w-full max-w-xl mx-auto" variants={cardVariants}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-inter text-black text-center">Your most generous donation</h2>
            
            {/* Donation Type Tabs (UI only) */}
            <div className="flex justify-center mb-6 bg-gray-100 rounded-lg p-1">
                <button className="flex-1 py-2 text-sm font-semibold rounded-md bg-pink-500 text-white shadow-sm font-inter">Give Once</button>
                <button className="flex-1 py-2 text-sm font-semibold rounded-md text-gray-600 font-inter">Monthly</button>
            </div>

            {/* Preset Donation Amounts */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                {presets.map((preset) => (
                    <motion.button
                        key={preset}
                        onClick={() => handlePresetClick(preset)}
                        className={`px-4 py-3 rounded-lg text-lg font-bold transition-all duration-200 font-inter bg-white/50 backdrop-blur-sm border border-white/30 ${ // Transparent white background
                            selectedPreset === preset ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 hover:bg-white/70' // Updated active state
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {preset.toFixed(2)} APT {/* Display with 2 decimal places */}
                    </motion.button>
                ))}
            </div>

            {/* Custom Amount Input */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6">
                <span className="px-4 py-3 bg-gray-100 text-gray-600 text-lg font-inter">APT</span> {/* Changed to APT */}
                <input 
                    type="number" 
                    placeholder="Custom amount" 
                    value={amount} 
                    onChange={handleAmountChange} 
                    className="flex-1 px-4 py-3 text-lg text-gray-800 bg-white focus:outline-none font-inter"
                />
                <span className="px-4 py-3 bg-gray-100 text-gray-600 text-lg font-inter">USD</span>
            </div>

            {/* Dedicate Donation (UI only) */}
            <div className="flex items-center mb-4">
                <input type="checkbox" id="dedicate" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                <label htmlFor="dedicate" className="ml-2 text-sm text-gray-700 font-inter">Dedicate this donation</label>
            </div>

            {/* Designate Donation (UI only) */}
            <p className="text-sm text-gray-700 mb-6 font-inter">Designate to <a href="#" className="text-blue-600 hover:underline">Where it is needed most</a></p>

            {/* Donate Button */}
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleDonateClick} disabled={isLoading} className="w-full px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-inter"> {/* Changed to blue-600 */}
                {isLoading ? 'Processing...' : 'Donate Now'}
            </motion.button>
        </motion.div>
    );
};

const RecordExpenseCard = ({ onRecordExpense, isLoading }) => {
    const [amount, setAmount] = useState('');
    const [purpose, setPurpose] = useState('');
    const [category, setCategory] = useState('Food & Water');
    const categories = ["Food & Water", "Medical Supplies", "Shelter", "Education", "Operational Costs"];

    const handleRecord = () => {
        const amountInOcta = parseFloat(amount) * 10**8;
        if (isNaN(amountInOcta) || amountInOcta <= 0) { alert("Please enter a valid amount."); return; }
        if (!purpose) { alert("Please enter a purpose for the expense."); return; }
        onRecordExpense(amountInOcta.toString(), purpose, category);
    };

    return (
        <motion.div className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 mb-8" variants={cardVariants}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-inter text-black">Admin: Record an Expense</h2>
             <div className="flex flex-col space-y-4">
                <input type="number" placeholder="Expense amount in APT" value={amount} onChange={e => setAmount(e.target.value)} className="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter"/>
                <input type="text" placeholder="Purpose (e.g., 'Purchase of 100 blankets')" value={purpose} onChange={e => setPurpose(e.target.value)} className="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter"/>
                <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-3 bg-white border-transparent rounded-lg text-gray-800 font-inter">
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleRecord} disabled={isLoading} className="w-full px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 font-inter"> {/* Changed to blue-600 */}
                    {isLoading ? 'Recording...' : 'Record Expense'}
                </motion.button>
            </div>
        </motion.div>
    );
};

const ExpenseTracker = () => { // Removed expenses prop as it's no longer used
    return (
        <motion.div className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 mt-8 text-center" variants={cardVariants}>
            <h2 className="text-2xl font-bold text-black mb-4 font-inter">Expenses Section</h2>
            <div className="flex flex-col items-center justify-center h-48">
                <Info size={48} className="text-gray-400 mb-4" />
                <p className="text-xl text-gray-600 font-inter">Coming Soon!</p>
                <motion.button
                    onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter mt-6" // Changed to blue-600
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore More
                </motion.button>
            </div>
        </motion.div>
    );
};

// ProfileCard component
const ProfileCard = ({ walletAddress, donorTotalDonated }) => {
    return (
        <motion.div 
            className="bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center space-y-6 w-full max-w-md mx-auto" // Adjusted width and centering
            variants={cardVariants}
        >
            {/* Circular Avatar */}
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                <User size={48} />
            </div>
            {/* User Name (Placeholder or derived from address) */}
            <h2 className="text-3xl font-bold text-gray-800 font-inter text-black">Your Donor Profile</h2>
            
            {/* Address */}
            <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl w-full flex items-center space-x-3 shadow-sm border border-white/30"> {/* Transparent white background */}
                <Wallet size={20} className="text-blue-500" />
                <div className="text-left flex-1">
                    <p className="text-sm font-semibold text-gray-700 font-inter">Wallet Address</p>
                    <p className="text-base text-gray-800 font-mono break-all">{walletAddress}</p>
                </div>
            </div>

            {/* Total Donated */}
            <div className="bg-white/50 backdrop-blur-md p-4 rounded-xl w-full flex items-center space-x-3 shadow-sm border border-white/30"> {/* Transparent white background */}
                <HandHeart size={20} className="text-pink-500" />
                <div className="text-left flex-1">
                    <p className="text-sm font-semibold text-gray-700 font-inter">Total Donated</p>
                    <p className="text-base font-bold text-green-600 font-inter">{(donorTotalDonated / 10**8).toFixed(4)} APT</p>
                </div>
            </div>
        </motion.div>
    );
};

// --- Navbar Component ---
const Navbar = ({ isConnected, connectWallet, disconnectWallet, walletAddress }) => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md p-4 flex justify-between items-center rounded-b-xl">
            <div className="flex items-center space-x-2">
                <HandHeart size={24} className="text-pink-500" />
                <span className="font-bold text-gray-800 text-lg font-inter">FundChain</span>
            </div>
            <div className="flex space-x-4">
                <a onClick={() => scrollToSection('overview')} className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Overview</a>
                <a onClick={() => scrollToSection('our-impact')} className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Our Impact</a>
                <a onClick={() => scrollToSection('profile')} className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Profile</a>
                <a onClick={() => scrollToSection('donate')} className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Donate</a>
                <a onClick={() => scrollToSection('expenses-coming-soon')} className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200 font-inter">Expenses</a> {/* Updated ID */}
            </div>
            <div className="flex items-center space-x-4">
                {isConnected ? (
                    <>
                        <span className="text-sm text-gray-700 hidden md:block font-mono">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                        <motion.button
                            onClick={disconnectWallet}
                            className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 font-inter"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Disconnect
                        </motion.button>
                    </>
                ) : (
                    <motion.button
                        onClick={connectWallet}
                        className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:shadow-md transition-all duration-300 font-inter"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Connect Wallet
                    </motion.button>
                )}
            </div>
        </nav>
    );
};

// --- Footer Component ---
const Footer = () => (
    <footer className="bg-gray-800 text-white/70 text-center p-6 mt-12 rounded-t-xl font-inter">
        <div className="container mx-auto">
            <p>&copy; 2025 FundChain. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">About Us</a>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">Terms of Service</a>
            </div>
        </div>
    </footer>
);


// --- MAIN APP COMPONENT ---

export default function App() {
    const [wallet, setWallet] = useState<WalletState>({ address: null, isConnected: false });
    const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
    const [balance, setBalance] = useState(0);
    const [totalRaised, setTotalRaised] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [donorTotalDonated, setDonorTotalDonated] = useState(0);

    const getAptosWallet = (): AptosWallet | undefined => {
        if ('aptos' in window) return window.aptos as AptosWallet;
    };

    const connectWallet = async () => {
        const aptosWallet = getAptosWallet();
        if (!aptosWallet) {
            alert("Petra Wallet not found. Please install it.");
            return;
        }
        try {
            await aptosWallet.connect();
            const account = await aptosWallet.account();
            setWallet({ address: account.address, isConnected: true });
        } catch (error) {
            console.error("Failed to connect wallet:", error);
            alert("Failed to connect wallet. Please try again.");
        }
    };

    const disconnectWallet = async () => {
        const aptosWallet = getAptosWallet();
        if (!aptosWallet) {
            alert("Petra Wallet not found.");
            return;
        }
        try {
            await aptosWallet.disconnect();
            setWallet({ address: null, isConnected: false });
            setDonorTotalDonated(0); // Reset donor data on disconnect
        } catch (error) {
            console.error("Failed to disconnect wallet:", error);
            alert("Failed to disconnect wallet. Please try again.");
        }
    };
    
    const fetchCharityData = async () => {
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
            setBalance(parseInt(data[0], 10));
            setTotalRaised(parseInt(data[1], 10));
            setTotalSpent(parseInt(data[2], 10));
        } catch (error) {
            console.error("Could not fetch charity data:", error);
        }
    };
    
    const fetchExpenses = async () => {
        // This function is no longer actively fetching data for the ExpenseTracker
        // as it's now a "Coming Soon" section.
        // Keeping it here for structural integrity but its logic won't be used.
        try {
            const resourceType = `${MODULE_ADDRESS}::charity_tracker::Registry`;
            const eventsUrl = `${APTOS_NODE_URL}/accounts/${MODULE_ADDRESS}/resource/${resourceType}`;
            const response = await fetch(eventsUrl);
            if (!response.ok) return; // Or handle error if resource doesn't exist
            const resource = await response.json();
            const eventsHandle = resource.data.expense_events.guid.id.addr;
            const creationNum = resource.data.expense_events.guid.id.creation_num;
            const eventsDataUrl = `${APTOS_NODE_URL}/accounts/${eventsHandle}/events/${creationNum}`;
            const eventsResponse = await fetch(eventsDataUrl);
            const events = await eventsResponse.json();
            const formattedExpenses = events.map(event => ({
                purpose: event.data.purpose,
                category: event.data.category,
                amount: parseInt(event.data.expense_amount, 10),
                timestamp: new Date(parseInt(event.version, 10) / 1000).toLocaleString(),
            })).reverse();
            setExpenses(formattedExpenses); // Still update state if data is fetched, though not displayed
        } catch (error) { console.error("Could not fetch expenses:", error); }
    };
    
    // Function to fetch donor profile
    const fetchDonorProfile = async (address: string) => {
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
                 setDonorTotalDonated(0);
                 return;
            }
            if (!response.ok) throw new Error("Failed to fetch donor profile");
            const data = await response.json();
            // data[0] is the name (String), data[1] is total_donated (u64)
            setDonorTotalDonated(parseInt(data[1], 10));
        } catch (error) {
            console.error("Could not fetch donor profile:", error);
        }
    };

    const handleDonate = async (amount: string) => {
        const aptosWallet = getAptosWallet();
        if (!wallet.isConnected || !aptosWallet) { alert("Please connect your wallet."); return; }
        setIsLoading(prev => ({...prev, donate: true}));
        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::donate_with_signer`,
                type_arguments: [],
                arguments: [CHARITY_ADDRESS, amount],
            };
            const tx = await aptosWallet.signAndSubmitTransaction(payload);
            await waitForTransaction(tx.hash);
            // Add a small delay to allow RPC nodes to sync
            await new Promise(resolve => setTimeout(resolve, 2000)); 
            
            alert("Donation successful!");
            // Refresh data after successful transaction
            await fetchCharityData();
            await fetchDonorProfile(wallet.address);
        } catch (error) {
            console.error(error);
            alert(`Donation failed: ${error.message}`);
        } finally {
            setIsLoading(prev => ({...prev, donate: false}));
        }
    };
    
    const handleRecordExpense = async (amount: string, purpose: string, category: string) => {
        const aptosWallet = getAptosWallet();
        if (!wallet.isConnected || !aptosWallet) { alert("Please connect your wallet."); return; }
        setIsLoading(prev => ({...prev, record: true}));
        try {
            const payload = {
                function: `${MODULE_ADDRESS}::${MODULE_NAME}::record_expense`,
                type_arguments: [],
                arguments: [amount, purpose, category],
            };
            const tx = await aptosWallet.signAndSubmitTransaction(payload);
            await waitForTransaction(tx.hash);
            alert("Expense recorded successfully!");
            await fetchCharityData();
            await fetchExpenses();
        } catch (error) {
            console.error(error);
            alert(`Failed to record expense: ${error.message}`);
        } finally {
            setIsLoading(prev => ({...prev, record: false}));
        }
    };
    
    useEffect(() => {
        const fetchData = () => {
            fetchCharityData();
            fetchExpenses();
            if (wallet.isConnected && wallet.address) {
                fetchDonorProfile(wallet.address);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [wallet.isConnected, wallet.address]); // Add wallet.address to the dependency array

    if (!wallet.isConnected) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
                {/* Blurred gradient background elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <motion.div
                    className="relative z-10 bg-white/10 backdrop-blur-xl shadow-2xl p-8 md:p-12 rounded-3xl border border-white/20 text-center max-w-lg w-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-4"
                    >
                        <HandHeart size={64} className="mx-auto text-pink-400" /> {/* Donation-themed logo */}
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black font-inter leading-tight">
                        No one has ever become poor by giving
                    </h1>
                    <p className="text-xl text-black/80 mb-8 font-inter">
                        Connect your wallet to track donations and make a real impact.
                    </p>
                    <div className="flex flex-col space-y-4">
                        <motion.button
                            onClick={connectWallet}
                            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:shadow-xl transition-all duration-300 font-inter"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 105, 180, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect Petra Wallet
                        </motion.button>
                        
                    </div>
                </motion.div>
                {/* Tailwind CSS animations for blob effect */}
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
                    .font-inter {
                        font-family: 'Inter', sans-serif;
                    }
                    @keyframes blob {
                        0% {
                            transform: translate(0px, 0px) scale(1);
                        }
                        33% {
                            transform: translate(30px, -50px) scale(1.1);
                        }
                        66% {
                            transform: translate(-20px, 20px) scale(0.9);
                        }
                        100% {
                            transform: translate(0px, 0px) scale(1);
                        }
                    }
                    .animate-blob {
                        animation: blob 7s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col font-inter">
            <Navbar 
                isConnected={wallet.isConnected} 
                connectWallet={connectWallet} 
                disconnectWallet={disconnectWallet} 
                walletAddress={wallet.address} 
            />
            <div className="flex-1 overflow-y-auto pt-20"> {/* Added pt-20 for navbar spacing */}
                {/* Overview Section - Now full width */}
                <section id="overview" className="w-full mb-12 bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200">
                    <div className="container mx-auto max-w-4xl"> {/* Content centered within full width */}
                        <h2 className="text-3xl font-bold text-black mb-6 font-inter">Overview of Our Impact</h2>
                        
                        {/* Main Image */}
                        <div className="mb-8">
                            <img 
                                src="https://placehold.co/1200x500/87CEEB/000000?text=Making+a+Difference+Together" // Text color black
                                alt="Making a Difference Together" 
                                className="w-full h-auto rounded-lg shadow-md mb-4"
                            />
                            <p className="text-black text-lg mb-4 font-inter">
                                At FundChain, we believe in the power of collective giving to create lasting change. Our mission is to provide transparent and efficient ways for you to contribute to causes that matter. Every donation, big or small, directly impacts lives and helps build a brighter future.
                            </p>
                            <motion.button
                                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter mt-4 block mx-auto" // Changed to blue-600
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(67, 206, 162, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Donate Now
                            </motion.button>
                        </div>

                        {/* Four Glass-Morphed Boxes for Stats */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
                            <motion.div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30" whileHover={{ scale: 1.05 }}>
                                <p className="text-sm font-semibold text-gray-700 font-inter">Total Donations Received</p>
                                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(totalRaised / 10**8).toFixed(4)} APT</p>
                            </motion.div>
                            <motion.div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30" whileHover={{ scale: 1.05 }}>
                                <p className="text-sm font-semibold text-gray-700 font-inter">Current Balance</p>
                                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(balance / 10**8).toFixed(4)} APT</p>
                            </motion.div>
                            <motion.div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30" whileHover={{ scale: 1.05 }}>
                                <p className="text-sm font-semibold text-gray-700 font-inter">Total Funds Spent</p>
                                <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(totalSpent / 10**8).toFixed(4)} APT</p>
                            </motion.div>
                            {wallet.isConnected && (
                                <motion.div className="bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/30" whileHover={{ scale: 1.05 }}>
                                    <p className="text-sm font-semibold text-gray-700 font-inter">Your Total Donated</p>
                                    <p className="text-3xl md:text-4xl font-bold text-black font-pincoya-black">{(donorTotalDonated / 10**8).toFixed(4)} APT</p>
                                </motion.div>
                            )}
                        </div>

                        <p className="text-black text-lg font-inter mt-8">
                            Our platform ensures that every transaction is recorded on the Aptos blockchain, providing unparalleled transparency and accountability. You can track where your funds go and witness the real-world impact of your generosity. Join us in making a tangible difference today!
                        </p>
                    </div>
                </section>
                
                <div className="container mx-auto max-w-4xl px-4 py-8"> {/* This container wraps the rest of the sections */}
                    {/* Profile Section */}
                    <section id="profile" className="w-full mb-12"> {/* Made full width */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-inter text-black text-center">Your Profile</h2> {/* Centered text */}
                        <ProfileCard 
                            walletAddress={wallet.address} 
                            donorTotalDonated={donorTotalDonated}
                        />
                    </section>

                    {/* Donation Section */}
                    <section id="donate" className="w-full mb-12"> {/* Made full width */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-inter text-black text-center">Make a Donation</h2> {/* Centered text */}
                        <DonationCard onDonate={handleDonate} isLoading={isLoading.donate} />
                    </section>

                    {/* Admin: Record Expense Section (only visible to charity address) */}
                    {wallet.address === CHARITY_ADDRESS && (
                        <section id="record-expense" className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-inter text-black">Admin: Record an Expense</h2>
                            <RecordExpenseCard onRecordExpense={handleRecordExpense} isLoading={isLoading.record} />
                        </section>
                    )}

                    {/* Expense Tracker Section - Coming Soon */}
                    <section id="expenses-coming-soon" className="w-full mb-12 bg-white/80 backdrop-blur-lg shadow-xl p-8 rounded-2xl border border-gray-200 text-center">
                        <h2 className="text-3xl font-bold text-black mb-4 font-inter">Expenses Tracker</h2>
                        <div className="flex flex-col items-center justify-center h-48">
                            <Info size={48} className="text-gray-400 mb-4" />
                            <p className="text-xl text-gray-600 font-inter">Coming Soon!</p>
                            <motion.button
                                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-inter mt-6"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore More
                            </motion.button>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
}
