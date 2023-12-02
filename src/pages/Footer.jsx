import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
  const usefulLinks = [
    'Home',
    'Movies',
    'My List',
    'Terms of servie',
    'Privacy Policy',
  ];
  const locations = [
    'Don Bosko Cinema, Tirane',
    'Ali Demi Cineama, Tirane',
    'Blloku Cinema, Tirane',
    'Currila Cinema, Durres',
    'Lungo Mare Cinema, Vlore',
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>G & I CINEMA</span>
              </a>
              <p>
Mirë se vini në botën e magjisë së kinemasë!
<br></br>
<br></br>
Në këtë rrugëtim të veçantë mes emocioneve, aventurave dhe historive që nuk harrohen kurrë, ju ftojmë të zhyteni në një botë plot mister dhe fantazi. Në këtë terrin të pasur me emocione, do të gjeni çdo lloj historie: nga udhëtimet epiko-artistike në botën e ëndrrave, tek aventurat emocionuese që shkelin kufijtë e mundëshmërive.

Mësohuni me karakteret e rralla, miqtë e rëndomtë dhe aventurat e papara. Studio Ghibli ka krijuar histori që prekin shpirtin dhe zemrën, duke treguar për emocione të thella dhe udhëtime të pambarimtë që shndërrohen në pjesë të pandashme të jetës tonë.

Ne ju ftojmë të eksploroni çdo hap të kësaj botë të mrekullueshme filmash, një botë ku ëndrrat bëhen realitet dhe emocionet shpërthejnë në ekran. Bëhu pjesë e këtij udhëtimi fantastik, përjetoni magjinë e kinemasë së vërtetë.
<br></br>
<br></br>
Falenderimet i takojne trajnereve qe nuk u lodhen kurre duke na mbeshtetur...!
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#" className="facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="instagram">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#" className="youtube">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map(link => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>G & I Cinemas</h4>
              <ul>
                {locations.map(link => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Ali Demi <br />
                Tirana nr.29
                <br />
                Albania <br />
                <br />
                <strong>Phone:</strong> +355 (0) 69 984 8244
                <br />
                <strong>Email:</strong> GandIcinema@hotmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>G & I Studio Technology</span>
          </strong>
          . All Rights Reserved 
          <br></br>
          Po e vodhet shkoni ne burg me pak fjale
        </div>
        <div className="credits">
          Designed by <a href="#">G & I Studio Technology</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
