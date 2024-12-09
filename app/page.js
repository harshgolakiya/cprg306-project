import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-200 text-black">
      <h1 className="text-6xl font-extrabold text-center mb-8">Welcome to the Weather App</h1>
      <p className="text-lg mb-6 text-center">Get weather information by entering your postal code.</p>
      <Link href="/components">
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Enter Postal Code
        </button>
      </Link>
    </div>
  );
}
