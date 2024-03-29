import { HiChevronRight,} from "react-icons/hi";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer className="bg-[black] text-[white] md:flex justify-between px-12 py-4 font-popins">
                <div>
                    <h1 className="font-bold text-[16px] mb-5">KEIHIN MARITIME SERVICES</h1>

                    <div className="mb-5 text-[12px] ">
                        <p>SAUTI YA KENYA RD OFF MOI AVENUE</p>
                        <p>Al- AMIN PLAZA, 3RD FLOOR</p>
                        <p>OPP SHEETAL PLAZA, MOMBASA, KENYA</p>
                    </div>

                    <div className="text-[12px]">
                        <p>TEL: 041-223 0349</p>
                        <p>CELL: 0722 413 029</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-[14px] mb-5 sm:mt-5 md:mt-0">Useful Links</h2>
                    <ul className="text-[12px]">
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <Link to='/'>Home</Link>
                        </div>
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <Link to='/services'>Services</Link>
                        </div>
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <Link to='/management'>Management</Link>
                        </div>
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <Link to='/contact'>Contact</Link>
                        </div>

                    </ul>
                </div>

                {/* <div>
                    <h2 className="font-bold text-[14px] mb-5">Our Services</h2>
                    <ul className="text-[12px]">
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <li>Section 1</li>
                        </div>
                        <div className="flex items-center mb-3">
                            <HiChevronRight className="text-[16px] text-[maroon]" />
                            <li>Section 2</li>
                        </div>
                    </ul>
                </div> */}
            </footer>

            <div className="bg-[black] text-[white] text-[14px] text-center px-12 py-4 font-popins">
                <p>&copy; Keihin. All Rights reserved {new Date().getFullYear()}</p>
                <p>Designed by <span className="text-[maroon]">R.K</span></p>
            </div>

        </>
    );
}

export default Footer;
