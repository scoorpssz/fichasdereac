export default function Header(props) {
    return (
        <header>
    <div>
            <h1>{props.my_name}</h1>
            <h2>{props.project_name}</h2>    
    </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </header>
    );
}