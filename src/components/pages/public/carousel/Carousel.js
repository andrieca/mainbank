import "../carousel/carousel.scss";
import foto1 from "../../../../assets/carouselImg/illustration.svg";
import foto2 from "../../../../assets/carouselImg/illustration 2.svg";
import foto3 from "../../../../assets/carouselImg/Wallet-rafiki.svg";
import { Link } from "react-router-dom";



const images = [
  {
    label: 'Add all accounts & manage',
    bio: 'You can add all accounts in one place and use it to send and request.',
    imgPath: foto1,
  },
  {
    label: 'Track your activity',
    bio: 'You can track your income, expenses activities and all statistics.',
    imgPath: foto2,
  },
  {
    label: 'Send & request payments',
    bio: 'You can send or recieve any payments from yous accounts.',
    imgPath: foto3,
  },

];

function Carousel() {
 

    return (
        
  <div className="container" id="carousel-onboarding">
    <div className="row">
      <div className="col-lg-6 carusel-data">
          <div id="carouselExampleDark" className="carousel carousel-dark slide h-100 w-100" data-bs-ride="carousel">
              <div className="carousel-inner" >
                {images.map((image, index) => (
                  <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
                    <img src={image.imgPath} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    <div className="carousel-content" >
                      <h5>{image.label}</h5>
                      <p>{image.bio}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carousel-indicators">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                    aria-current={index === 0}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
          
        
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          
          </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="carousel-booton" >
          <Link to="/onboarding">
            <button type="button" className="btn btn-primary carousel-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
    );
  }

export default Carousel;