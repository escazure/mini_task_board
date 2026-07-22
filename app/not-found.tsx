import Link from "next/link";

export default function NotFound(){
    return (
        <div className="p-3 border w-fit">
            <h1>Page is not found (404)</h1>
            <Link href="/"><strong>Return to the main page</strong></Link>
        </div>
    );
}