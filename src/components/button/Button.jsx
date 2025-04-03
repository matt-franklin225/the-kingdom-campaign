export default function Button({ children, className, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={
        `px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition ${className}`
      }
      {...props}
    >
      {children}
    </button>
  );
}
