'use client';
import Link from 'next/link';
export const Header = (props) => {
    return (
    <div>
            <h1>{props.my_name}</h1>
            <h2>{props.project_name}</h2>    
            <nav>
                <ul>
                <Link href="/" passHref> <button>Escolher Treino Aleatório</button> </Link>  <Link href="./dashboard" passHref><button>Dashboard</button></Link>      
                </ul>
            </nav>
    </div>
)
}
