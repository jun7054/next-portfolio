import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
    return (
        <>
           <Header></Header>
                <h1>푸터입니다.</h1>
                <div>{children}</div>
           <Footer></Footer>
        </>
    )
}