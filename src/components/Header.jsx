import logo from "./../assets/logo.png"
export default function Header() {
    console.log("Header Component")
    return (<header>
        <img
            className="logo"
            src= {logo}
            alt="chef-claude-logo"
        />
        <h1>Chef Claude</h1>
    </header>)
}