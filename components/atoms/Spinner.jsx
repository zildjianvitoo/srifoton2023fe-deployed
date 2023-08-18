export default function Spinner() {
  return (
    <span className="flex items-center justify-center w-full h-screen">
      <span className="relative flex w-10 h-10 bg-purple-400 rounded-sm opacity-75 animate-spin"></span>
    </span>
  );
}
