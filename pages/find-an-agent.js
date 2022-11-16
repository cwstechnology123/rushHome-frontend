export default function FindAnAgent() {
    return (
      <>
        <section className="hero-wrap style3 findagent_banner">
            <div className="hero-slider-two owl-carousel">
            <div className="hero-slide-item hero-slide-4 bg-f" />
            </div>
            <div className="hero-content">
            <div className="row">
                <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <h1>Find an agent for you.</h1>
                <form action="#" className="property-search-form">
                    {/* <div class="form-group col-md-12">
            <button type="submit" class="btn style1 find_hm">Find Home</button>
        </div>	 */}
                    <div className="form-group-wrap">
                    <div className="form-group">
                        <input type="text" placeholder="Enter an Address, Neighbarhood" />
                    </div>
                    </div>
                    <button type="submit" className="btn style2 search_button">Search</button>
                </form>
                </div>
            </div>
            </div>
        </section>
        <section className="agent-wrap ptb-50">
            <div className="container">
            <div className="row align-items-center mb-25">
                <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="profuct-result">
                    <p>We found <span>45</span> properties available for you</p>
                </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4">
                <p className="sort_by">
                    <span className="sorted_list"><i className="fa fa-list-ul" aria-hidden="true" /></span>
                    Sorted By
                </p>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4">
                <div className="filter-item-cat">
                    <select>
                    <option value={1}>Alphabet</option>
                    <option value={2}>Sort By High To Low</option>
                    <option value={3}>Sort By Low To High</option>
                    </select>
                </div>
                </div>
                <div className="lising_icons">
                <span className="list_icon"><i className="fa fa-th-list" aria-hidden="true" /></span>
                <span className="list_th_icon"><i className="fa fa-th" aria-hidden="true" /></span>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img">
                    <img src="assets/img/agents/agent-1.jpg" alt="Image" />
                    </div>
                    <div className="agent-info-wrap">
                    <div className="agent-info">
                        <h3><a href="agent-details.html">Erik Ondricka</a></h3>
                        <span>Real Estate Agent</span>
                        <ul className="social-profile list-style style1">
                        <li>
                            <a target="_blank" href="https://twitter.com/">
                            <i className="flaticon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://facebook.com/">
                            <i className="flaticon-facebook" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="#">
                            <i className="fa fa-skype" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://linkedin.com/">
                            <i className="flaticon-linkedin-1" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="mail_Box">
                        <p>oliverbeddows@homeid.com</p>
                        <span>123 900 686668</span>
                    </div>
                    </div>
                </div>
                </div>
                <ul className="page-nav list-style mt-10">
                <li><a href="agents.html"><i className="flaticon-back" /></a></li>
                <li><a className="active" href="agents.html">1</a></li>
                <li><a href="agents.html">2</a></li>
                <li><a href="agents.html">3</a></li>
                <li><a href="agents.html"><i className="flaticon-next-1" /></a></li>
                </ul>
            </div>
            </div>
        </section>
      </>
    )
  }