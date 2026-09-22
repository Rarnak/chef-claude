import logo from "./../assets/logo.png"
export default function Header() {
    return (<header>
        <img
            className="logo"
            src= {logo}
            alt="chef-claude-logo"
        />
        <h1>Chef Claude</h1>
    </header>)
}