import Link from "next/link";
import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";

export default function HomeCityList() {
    // const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    // const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/count`, method : 'POST'}, fetcher)
    // console.log("COunt data: ", data);
    return (
        <section className="city-wrap pt-100 pb-75 bg-seashell">
        <img src="assets/img/shape-2.png" alt="Image" className="city-shape-one" />
        <div className="container">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
            <div className="section-title style2 text-center mb-40">
              <h2>Explore Cities</h2>
              <hr className="center" />
              {/* <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/Dover.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/dover-de">Dover</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Middletown.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/middletown-de">Middletown</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Wilmington.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/wilmington-de">Wilmington</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/Newark.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city/newark-de">Newark</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/Philly.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city/philadelphia-pa">Philadelphia</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Rehoboth.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/rehoboth-beach-de">Rehoboth</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/Ocean City.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/ocean-city-md">Ocean City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </section>
    )
}

// export async function getInitialProps(){
//     const payload = {url : `${apiBaseUrl}/properties/count`, method : 'POST'};
//     const res = await fetchApi(payload);
//     console.log(res)
//     return {
//         props: {
//             counts: null
//         }
//     }
// }