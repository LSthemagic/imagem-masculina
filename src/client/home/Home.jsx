import { TbRazorElectric } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content gap-7 bg-gradient-to-b from-primary
            via-secondary to-black">
                <nav>
                    <img
                        className="hover:scale-105"
                        src="/NVIZU.png"
                        width="275px"
                        alt="Logo"
                    />
                </nav>
                <div className="content p-10">
                    <section className="grid grid-cols-1 gap-2 text-justify w-full">
                        <a
                            className="flex flex-row gap-5 p-3 pl-10 pr-10 mb-3 rounded-lg items-center bg-primary text-white hover:scale-105 hover:text-secondary"
                            href="https://sites.appbarber.com.br/agendamento/nvizubarbearia-d6um"
                        >
                            <TbRazorElectric />
                            Agendar no App
                        </a>
                        <a
                            className="flex flex-row gap-5 p-3 pl-10 pr-10 rounded-lg items-center bg-primary text-white hover:scale-105 hover:text-secondary"
                            href="https://wa.me/message/X63QORHDRLEZI1"
                        >
                            <IoLogoWhatsapp />
                            Agendar no WhatsApp
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
