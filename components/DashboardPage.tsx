
import React from 'react';
import type { User } from '../types';

interface DashboardPageProps {
    user: User;
    onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
             <div className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-12 border border-slate-700 text-center">
                 <div className="mb-4">
                     <span className="text-6xl" role="img" aria-label="wave">👋</span>
                 </div>
                <h1 className="text-4xl font-bold text-white mb-2">
                    Welcome, <span className="text-sky-400">{user.username}</span>!
                </h1>
                <p className="text-slate-300 text-lg mb-8">You have successfully logged in.</p>
                <div className="w-full h-px bg-slate-700 my-8"></div>
                <p className="text-slate-400 mb-8">
                    This is your personal dashboard. More features can be added here in a real application.
                </p>
                <button 
                    onClick={onLogout}
                    className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    Logout
                </button>
            </div>
             <footer className="text-center text-slate-500 mt-8">
                <p>React Auth Portal Demo</p>
            </footer>
        </div>
    );
};

export default DashboardPage;
