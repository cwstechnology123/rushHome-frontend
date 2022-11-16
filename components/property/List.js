import Link from 'next/link'
import Image from 'next/image'

export default function List() {
    return (
      <>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">Exclusive</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$15,000.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$10,000.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">Exclusive</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$15,000.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      <span className="property-status">Exclusive</span>
                      {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">Exclusive</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$15,000.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$10,000.00</p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="property-card style3">
                    <div className="property-img">
                      <Image width={100} height={100} layout={'responsive'} src="/assets/img/property/property-26.jpg" alt="Image" />
                      {/* <span class="property-status">For Rent</span>
    <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                      <div className="property-status-wrap">
                        <p className="property-price">$500.00/<span>month</span></p>
                      </div>
                      <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                      <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
    )
}