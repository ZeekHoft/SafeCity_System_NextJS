import Link from 'next/link';

export default function Home() {
  return (

    <div className="h-screen flex items-center justify-center bg-white">
      <Link href="/dashboard">
        <button
          type="button"
          className="text-5xl text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4
            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
            font-medium rounded-full text-2xl px-20 py-20 text-center"
        >
          See SafeCity
        </button>
      </Link>


      {/* <img
        className="mask mask-heart"
        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" /> */}

    </div>
  );
}
