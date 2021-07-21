import Header from '../../components/basic/header/header.jsx';
import Countries from '../../components/countries/countries/countries.jsx';
import './home-page.scss';

export default function HomePage() {
    return (
       <div className="home-page">
           <Header />
           <Countries />
       </div>
    )
}