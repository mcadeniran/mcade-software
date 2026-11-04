import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07182E] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold tracking-[0.3em] text-[#06C7B7]">
          MCADE SOFTWARE
        </p>

        <h1 className="mt-8 text-8xl font-bold tracking-tight">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          The page {"you're"} looking for {"doesn't"} exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#06C7B7] px-6 py-4 font-semibold text-[#07182E] hover:bg-[#00DCC5]"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
