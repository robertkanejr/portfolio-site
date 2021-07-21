// import React from 'react';
// import Card from './Card';
// import NRLogo from '../assets/images/NRLogo.png';
// import BILogo from '../assets/images/BILogo.png';
// import DHLogo from '../assets/images/DHLogo.jpg';
// import CryptopediaLogo from '../assets/images/CryptopediaLogo.png';
// import Tesla from '../assets/images/Tesla.png';
// import BezosBot from '../assets/images/BezosBot.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

// class Carousel extends React.Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         items: [
//             {
//                 id: 0,
//                 title: 'Biz Incubate',
//                 subTitle: 'Business Incubator Bridging the Generational Gap',
//                 imgSrc: BILogo,
//                 link: 'https://bizincubate.com/',
//                 selected: false

//             },
//             {
//                 id: 1,
//                 title: 'New Remedies',
//                 subTitle: 'First & Only Federally Compliant CBD Franchise',
//                 imgSrc: NRLogo,
//                 link: 'https://newremediescbd.com/',
//                 selected: false
//             },
//             {
//                 id: 2,
//                 title: 'Dailee Holdings LLC.',
//                 subTitle: 'Compliant Solutions for the Cannabinoid Industry',
//                 imgSrc: DHLogo,
//                 link: 'https://daileecbd.com/',
//                 selected: false
//             },
//             {
//                 id: 3,
//                 title: 'Cryptopedia',
//                 subTitle: 'Cryptocurrency Trading Simulator',
//                 imgSrc: CryptopediaLogo,
//                 link: 'https://cryptopedia.netlify.app/',
//                 selected: false
//             },
//             {
//                 id: 4,
//                 title: 'Nikola Tesla Electrical Storm Tracker',
//                 subTitle: 'Track Storms Using Google Maps API',
//                 imgSrc: Tesla,
//                 link: 'https://Nikola-Tesla-electric.netlify.app/',
//                 selected: false
//             },
//             {
//                 id: 5,
//                 title: 'Bezos World Domination Game',
//                 subTitle: 'Futuristic Shooter Game',
//                 imgSrc: BezosBot,
//                 link: 'https://Bezos-domination-game.netlify.app/',
//                 selected: false
//             },
//         ]
//     }
// }

//     handleCardClick = (id, card) => {

//         let items = [...this.state.items];

//         items[id].selected = items[id].selected ? false : true;

//         items.forEach(item => {
//             if (item.id !== id) {
//                 item.selected = false;
//             }
//         });

//         this.setState({
//             items
//         });
//     }

//     makeItems = (items) => {
//         return items.map(item => {
//             return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
//         })
//     }

//     render() {
//         return (
//             <Container fluid={true}>
//                 <Row className="justify-content-around">
//                     {this.makeItems(this.state.items)}
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Carousel;
