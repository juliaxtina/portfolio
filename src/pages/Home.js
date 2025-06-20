import Menu from "../components/Menu";
import { HeroBig } from "../components/Hero";
import Image2x from "../components/Image2x";
import Feature from "../components/Feature";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function Home(){

    const photos = [
        '../img/projects-preview/1.jpg',

        '../img/projects-preview/2.jpg',
        '../img/projects-preview/3.jpg',
      ];

    return(
        <div class="bg-white dark:bg-slate-800 *:transition-colors duration-1000 ease-in-out">
            <Menu />
            <HeroBig/>
            <Image2x photos={photos}/>
            <Feature />
            <Content />
            <Footer />
        </div>
    )

}
