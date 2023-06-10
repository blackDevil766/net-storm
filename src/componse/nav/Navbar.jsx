import NavProps from "./NavProps";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarSection(props) {
  var lastScrollY = window.scroll(0, 1);

  window.addEventListener("scroll", () => {
    var nav = document.querySelector("#nav-section");

    if (lastScrollY < window.scrollY) {
      // console.log("window going down");
      nav.classList.add("native");
      nav.classList.remove("nativeUp");
    } else {
      // console.log("window going up");
      nav.classList.remove("native");
      nav.classList.add("nativeUp");
    }

    lastScrollY = window.scrollY;
  });

  return (
    <Navbar id="nav-section" className="navy" variant="dark" expand="md">
      <Container className="nav-container">
        <Navbar.Brand href="/">
          <svg
            width="65pt"
            height="54pt"
            version="1.1"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="transparent"
              class="path"
              stroke="#d5d0d0"
              stroke-width="30"
              d="m570.5 197.75v-113.75c0-14-10.5-24.5-24.5-24.5h-113.75c-21 0-42 7-59.5 17.5-8.75 5.25-15.75 12.25-22.75 21-19.25-22.75-49-38.5-82.25-38.5h-113.75c-14 0-24.5 10.5-24.5 24.5v113.75c0 33.25 15.75 61.25 38.5 82.25-22.75 19.25-38.5 49-38.5 82.25v113.75c0 14 10.5 24.5 24.5 24.5h113.75c14 0 24.5-10.5 24.5-24.5s-10.5-24.5-24.5-24.5h-89.25v-89.25c0-31.5 24.5-56 56-56h89.25v89.25c0 59.5 47.25 106.75 106.75 106.75h113.75c14 0 24.5-10.5 24.5-24.5v-113.75c0-33.25-15.75-61.25-38.5-82.25 26.25-21 40.25-50.75 40.25-84zm-334.25 57.75c-31.5 0-56-24.5-56-56v-91h89.25c31.5 0 56 24.5 56 56v89.25h-89.25zm285.25 106.75v89.25h-89.25c-31.5 0-56-24.5-56-56v-89.25h89.25c29.75-1.75 56 24.5 56 56zm-147-106.75v-89.25c0-19.25 8.75-36.75 24.5-47.25 8.75-7 21-10.5 31.5-10.5h89.25v89.25c0 31.5-24.5 56-56 56h-89.25z"
            />
          </svg>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <NavProps href="/" daley="250" class="nav-link" text="Home" />
            </Nav.Link>

            {/* <Nav.Link href="/explore"> */}

            <div className="exploreItemInNavs">
              <NavProps
                daley="500"
                class="nav-link exploreItemInNav"
                text="Explore"
                ico={<i className="arrowIcon1  far fa-chevron-down"></i>}
              />

              <div className="exploreShowingItem">
                <ul className="itemss">
                  <a href="/explore1">
                    <li className="navHoverdItem">Explore Style 1</li>
                  </a>
                  <a href="/explore2">
                    <li className="navHoverdItem">Explore Style 2</li>
                  </a>
                  <a href="/explore3">
                    <li className="navHoverdItem">Explore Style 3</li>
                  </a>
                  <a href="/explore4">
                    <li className="navHoverdItem">Explore Style 4</li>
                  </a>
                  <a href="/liveAuctions">
                    <li className="navHoverdItem">Live Auctions</li>
                  </a>
                  <a href="/items">
                    <li className="navHoverdItem">Item Details</li>
                  </a>
                </ul>
              </div>
            </div>

            {/* </Nav.Link> */}

            <Nav.Link href="#activity">
              <NavProps daley="750" class="nav-link" text="Activity" />
            </Nav.Link>

            <Nav.Link href="#community">
              <div className="communityItemInNavs">
                <NavProps
                  daley="1000"
                  class="nav-link communityItemInNav"
                  text="Community"
                  ico={<i className="arrowIcon2  far fa-chevron-down"></i>}
                />

                <div className="communityShowingItem">
                  <ul className="itemss">
                    <li className="navHoverdItem1">Blog</li>
                    <li className="navHoverdItem1">Blog Single</li>
                    <li className="navHoverdItem1">Help Center</li>
                  </ul>
                </div>
              </div>
            </Nav.Link>

            <Nav.Link href="#Pages">
              <div className="pagesItemInNavs">
                <NavProps
                  daley="1250"
                  class="nav-link pagesItemInNav"
                  text="Pages"
                  ico={<i className="arrowIcon3  far fa-chevron-down"></i>}
                />

                <div className="pagesShowingItem">
                  <ul className="itemss">
                    <li className="navHoverdItem2">Authors</li>
                    <li className="navHoverdItem2">Author</li>
                    <li className="navHoverdItem2">Wallet Connect</li>
                    <li className="navHoverdItem2">Create</li>
                    <li className="navHoverdItem2">Login</li>
                    <li className="navHoverdItem2">Signup</li>
                  </ul>
                </div>
              </div>
            </Nav.Link>

            <Nav.Link href="#home">
              <NavProps daley="1500" class="nav-link" text="Contact" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="searchAndCart">
          <i
            onClick={props.searchPro}
            data-aos="zoom-out"
            data-aos-duration="1000"
            className="searchIco fad fa-search"
          ></i>

          <a href="/wallet-cart">
            <div
              data-aos="zoom-out"
              data-aos-duration="1000"
              id="nav-section-btn"
            >
              <button id="nav-btn">Wallet Connect</button>
              <i className="walletIco fal fa-wallet"></i>
            </div>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
















{
  /* <nav id="nav-section" className="navbar navbar-expand-lg navbar-light ">

<div id="collopas" className="collapse navbar-collapse">
    <div id="Navcontiner" className="container-fluid">
        <svg width="65pt" height="54pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <path fill="transparent" class="path" stroke="#d5d0d0" stroke-width="50"
                d="m570.5 197.75v-113.75c0-14-10.5-24.5-24.5-24.5h-113.75c-21 0-42 7-59.5 17.5-8.75 5.25-15.75 12.25-22.75 21-19.25-22.75-49-38.5-82.25-38.5h-113.75c-14 0-24.5 10.5-24.5 24.5v113.75c0 33.25 15.75 61.25 38.5 82.25-22.75 19.25-38.5 49-38.5 82.25v113.75c0 14 10.5 24.5 24.5 24.5h113.75c14 0 24.5-10.5 24.5-24.5s-10.5-24.5-24.5-24.5h-89.25v-89.25c0-31.5 24.5-56 56-56h89.25v89.25c0 59.5 47.25 106.75 106.75 106.75h113.75c14 0 24.5-10.5 24.5-24.5v-113.75c0-33.25-15.75-61.25-38.5-82.25 26.25-21 40.25-50.75 40.25-84zm-334.25 57.75c-31.5 0-56-24.5-56-56v-91h89.25c31.5 0 56 24.5 56 56v89.25h-89.25zm285.25 106.75v89.25h-89.25c-31.5 0-56-24.5-56-56v-89.25h89.25c29.75-1.75 56 24.5 56 56zm-147-106.75v-89.25c0-19.25 8.75-36.75 24.5-47.25 8.75-7 21-10.5 31.5-10.5h89.25v89.25c0 31.5-24.5 56-56 56h-89.25z" />
        </svg>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <ul id="nav-items" className="navbar-nav">

            <NavProps daley="250" class="nav-link" text="Home" />

            <div className="exploreItemInNavs">
                <NavProps daley="500" class="nav-link exploreItemInNav" text="Explore" ico={<i className="arrowIcon1  far fa-chevron-down"></i>} />


                <div className="exploreShowingItem">
                    <ul className="itemss" >
                        <li className="navHoverdItem">Explore Style 1</li>
                        <li className="navHoverdItem">Explore Style 2</li>
                        <li className="navHoverdItem">Explore Style 3</li>
                        <li className="navHoverdItem">Explore Style 4</li>
                        <li className="navHoverdItem">Live Auctions</li>
                        <li className="navHoverdItem">Item Details</li>
                    </ul>
                </div>
            </div>

            <NavProps daley="750" class="nav-link" text="Activity" />

            <div className="communityItemInNavs">
                <NavProps daley="1000" class="nav-link communityItemInNav" text="Community" ico={<i className="arrowIcon2  far fa-chevron-down"></i>} />

                <div className="communityShowingItem">
                    <ul className="itemss">
                        <li className="navHoverdItem1">Blog</li>
                        <li className="navHoverdItem1">Blog Single</li>
                        <li className="navHoverdItem1">Help Center</li>
                    </ul>
                </div>
            </div>

            <div className="pagesItemInNavs">
                <NavProps daley="1250" class="nav-link pagesItemInNav" text="Pages" ico={<i className="arrowIcon3  far fa-chevron-down"></i>} />

                <div className="pagesShowingItem">
                    <ul className="itemss" >
                        <li className="navHoverdItem2">Authors</li>
                        <li className="navHoverdItem2">Author</li>
                        <li className="navHoverdItem2">Wallet Connect</li>
                        <li className="navHoverdItem2">Create</li>
                        <li className="navHoverdItem2">Login</li>
                        <li className="navHoverdItem2">Signup</li>

                    </ul>
                </div>
            </div>


            <NavProps daley="1500" class="nav-link" text="Contact" />

            <i data-aos="zoom-out" data-aos-duration="1000" className="searchIco fad fa-search" ></i>


        </ul>

        <div data-aos="zoom-out" data-aos-duration="1000" id="nav-section-btn">
            <input id="nav-btn" type="button" value="Wallet Connect" />
            <i className="walletIco fal fa-wallet"></i>
        </div>
    </div>

</div>
</nav> */
}
