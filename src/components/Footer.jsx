import { Typography } from "@material-tailwind/react";
import { AiOutlineInstagram } from "react-icons/ai";



export function Footer() {
    return (

        <footer className="w-full bg-verdeDDB p-4">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-4 gap-x-2 text-center md:justify-between">
                <img src="/LogoDDB.png" alt="logo-ct" className="w-10" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                    <li>
                        <Typography
                            as="a"
                            href="https://www.instagram.com/defensoresdelbrancafc/"
                            color="white"
                            className="font-custom transition-colors hover:text-rojoDDB focus:text-rojoDDB flex items-center gap-2"
                        >
                            <AiOutlineInstagram /> <p>Instagram</p>
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-4 border-blue-gray-50" />
            <Typography color="white" className="text-center font-normal">
                &copy; 2023 Defensores del Branca
            </Typography>
        </footer>
    );
}