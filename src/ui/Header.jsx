function Header() {
    return (
        <header className=" flex justify-between px-12 py-6 font-popins">
            <h2 className="font-bold text-[16px] ">KEIHIN MARITIME SERVICES</h2>
            <nav>
                <ul className="flex gap-4 text-[12px]">
                    <li className="text-[skyblue]">HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
