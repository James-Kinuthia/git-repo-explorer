const NavButton = ({onCLick, isActive, children}) => (
    <button onClick={onCLick} className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
        {children}
    </button>
);

export default NavButton;