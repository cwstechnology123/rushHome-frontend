export default function MainBanner() {
  return (
    <>
      <section className="hero-wrap style3">
        <div className="hero-slider-two owl-carousel">
          <div className="hero-slide-item hero-slide-4 bg-f"></div>
        </div>
        <div className="hero-content">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <h1>Get Home Faster</h1>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p> */}
              <form action="#" className="property-search-form">
                  <div className="form-group-wrap">
                      <div className="form-group">
                          <input type="text" placeholder="Enter an Address, Neighbourhood" />
                      </div>
                  </div>
                  <button type="submit" className="btn style2 search_button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}