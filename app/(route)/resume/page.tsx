import Link from 'next/link';

const page = () => {
  return (
    <div className="flex font-bold justify-center items-center text-6xl h-screen flex-col gap-4">
      <h1>Updating...</h1>
      <Link href="/" className="text-2xl font-normal text-blue-500 underline">
        Go back
      </Link>
    </div>
  );
};

export default page;
