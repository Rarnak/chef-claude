import logo from "./../assets/logo.png"
export default function Header() {
    return (<header>
        <img
            className="logo"
            src= {logo}
            alt="chef-llama-logo"
        />
        <h1>Chef Llama</h1>
    </header>)
}