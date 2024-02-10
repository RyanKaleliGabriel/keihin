import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

function ContactDetails() {
  return (
    <section className="font-popins bg-[white]">
      <h2 className="text-[1.5rem] text-[lightgrey] text-center mt-10">
        P. O. BOX 42197-80100 | MOMBASA
      </h2>

      <div className="text-center flex md:justify-around md:flex-row sm:flex-col mt-8 bg-lightblue py-20">
        <div className="flex flex-col items-center sm:mb-5 mb-0">
            <HiOutlineLocationMarker className="text-[3rem] bg-nrmblue text-skyblue rounded-full p-2 mb-4" />
            <p className="font-bold">Location</p>
            <ul className="text-[10px] mt-2">
              <li>SAUTI YA KENYA RD OFF MOI AVENUE</li>
              <li>| Al- AMIN PLAZA, 3RD FLOOR</li>
              <li>OPP SHEETAL PLAZA, MOMBASA, KENYA</li>
            </ul>
        </div>

        <div className="flex flex-col items-center sm:mb-5 mb-0">
            <HiOutlineMail className="text-[3rem] bg-nrmblue text-skyblue rounded-full p-2 mb-4" />
            <p className="font-bold">Email</p>
            <ul className="text-[10px] mt-2">
              <li> info@keihinmaritime.co.ke </li>
            </ul>
        </div>

        <div className="flex flex-col items-center sm:mb-5 mb-0">
            <HiOutlineDeviceMobile className="text-[3rem] bg-nrmblue text-skyblue rounded-full p-2 mb-4" />
            <p className="font-bold">Call</p>
            <ul className="text-[10px] mt-2">
              <li>TEL: 041-223 0349</li>
              <li>CELL: 0722 413 029</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
