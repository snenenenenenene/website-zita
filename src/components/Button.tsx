export const Button = ({ className, children }: any) => {
  return (
    <button
      //   className={`outline p-4 hover:bg-black from-black to-black bg-growing-underline hover:text-white ${className}`}
      className={`outline p-4 bg-gradient-to-r hover:text-white cursor-pointer from-black to-black bg-growing-underline ${className}`}
    >
      {children}
    </button>
  );
};
