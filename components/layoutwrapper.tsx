import Footer from "./footer";
import Header from "./Header";

export default function LayoutWrapper(props: { children: any; }) {
    return <>
        <div className="bg-light">
            <Header />
            <div className="container vh-100">
                {props.children}
            </div>
            <Footer />
        </div>
    </>
}