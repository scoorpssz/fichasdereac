'use client';
import Link from 'next/link';
export default function Header(props) {
    return (
        <header>
    <div>
            <h1>{props.my_name}</h1>
            <h2>{props.project_name}</h2>    
    </div>
            <nav>
                <ul>
                    <Link href="/">Home</Link> <Link href="/dashboard">Dashboard</Link>
                </ul>
            </nav>
        </header>
    );
}