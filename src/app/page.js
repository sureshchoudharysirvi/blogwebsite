import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     

      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600  w-full">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl text-white font-bold mb-4">
            Browse our blog collection
          </h2>
          <Link
            href="/blogs"
            className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded hover:bg-blue-50 transition"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
