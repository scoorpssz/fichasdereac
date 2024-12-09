'use client';
import Link from 'next/link';
export const Header = (props) => {
    return (
    <div>
            <h1>{props.my_name}</h1>
            <h2>{props.project_name}</h2>    
            <nav>
                <ul>
                        <Link href="/">Home</Link>  <Link href="./dashboard">Dashboard</Link>     
                </ul>
            </nav>
    </div>
)
}
